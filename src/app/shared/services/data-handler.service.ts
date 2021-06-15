import { Injectable } from '@angular/core';
import {IDBService} from "./idb.service";
import {ContentfulService} from "./contentful.service";
import {AppInitializedService} from "./app-initialized.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  private idbInit: boolean = false;
  private idbSupported: boolean = true;
  private cmsSynced: boolean = false;

  constructor(private idbService: IDBService, private contentfulService: ContentfulService,
              private appInitializedService: AppInitializedService) {
  }

  private getLocalData(table: string): Promise<any> {
    return new Promise<any>(resolve => {
      if (this.idbSupported) {
        this.idbService.readTable(table).then((data) => {
          if (data) {
            resolve(data);
          } else {
            resolve(null);
          }
        });
      } else {
        resolve(null)
      }
    });
  }

  private saveCustomPageData(table: string, data: any): void {
    try {
      this.idbService.clearTable(table);
      this.idbService.writeToTable(table, data);
    } catch (e) {
    }
  }

  public getDataAfterIDBInitialized(table: string): Promise<any> {
    return new Promise<any>(resolve => {
      if (this.idbInit) {
        this.getLocalData(table).then(resolve);
      } else {
        this.appInitializedService.checkIDBData()
          .then((isSupported) => {
            this.idbInit = true;
            this.idbSupported = isSupported;
            this.getLocalData(table).then(resolve);
          })
      }
    });
  }

  public getRemoteData(query: string, table: string, processData: Function): Promise<any> {
    return new Promise<any>(resolve => {
      this.contentfulService.getQuery(query).then(data => {
        resolve(data);
      }).catch(() => resolve(null));
    }).then((responseData) => {
      let data = processData(responseData);
      if (this.idbSupported) {
        this.saveCustomPageData(table, data);
      }
      return data;
    });
  }

  public getDefaultPageData(query: string, table: string, processData: Function): Observable<any> {
    return new Observable<any>(subscriber => {
      this.getDataAfterIDBInitialized(table).then(data => {
        if (data) {
          subscriber.next(data);
          if (!this.cmsSynced) {
            this.appInitializedService.syncContentfulData().then(changed => {
              this.cmsSynced = true;
              if (changed) {
                this.getRemoteData(query, table, processData).then(data => subscriber.next(data));
              }
            })
          }
        } else {
          this.getRemoteData(query, table, processData).then(data => {subscriber.next(data)});
          if (!this.cmsSynced) {
            this.appInitializedService.syncContentfulData().then(changed => {
              this.cmsSynced = true;
            })
          }
        }
      });
    });
  }
}
