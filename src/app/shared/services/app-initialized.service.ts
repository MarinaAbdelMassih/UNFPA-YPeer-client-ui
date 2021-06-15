import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {ContentfulService} from "./contentful.service";
import {IDBService} from "./idb.service";

@Injectable({
  providedIn: 'root'
})
export class AppInitializedService {

  constructor(private idbService: IDBService, private contentfulService: ContentfulService) { }

  public checkIDBData(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      let idbConfig = environment.idb;
      this.idbService.initialize(idbConfig.name, idbConfig.version, idbConfig.tables)
        .then((idb) => {
          if (idb) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(() => resolve(false));
    });
  }

  private checkForRemoteChanges(localToken: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.contentfulService.checkIfDataChanged(localToken)
        .then((nextToken) => {
          if (localToken) {
            if (nextToken) {
              this.idbService.clearDB().then(() => {
                this.idbService.writeToTable('contentfulToken', nextToken);
                resolve(true);
              });
            } else {
              resolve(false);
            }
          } else {
            if (nextToken)
              this.idbService.writeToTable('contentfulToken', nextToken);
          }
        });
    });
  }

  public syncContentfulData(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.idbService.readTable('contentfulToken').then((token: string) => {
        if (!token) {
          resolve(false);
        }
        this.checkForRemoteChanges(token).then(resolve);
      }).catch(() => {
        resolve(false);
      });
    });
  }
}
