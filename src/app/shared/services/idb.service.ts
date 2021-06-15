import { Injectable } from '@angular/core';
import {IDBPDatabase, openDB,} from 'idb';

@Injectable({
  providedIn: 'root'
})
export class IDBService {

  private _isSupported: boolean = true;
  private indexedDB: IDBPDatabase;

  constructor() {
  }

  private checkIdbSupport(): boolean {
    this._isSupported = !!window.indexedDB;
    return this._isSupported;
  }

  private createDB(dbName: string, dbVersion: number, tables: string[]): Promise<IDBPDatabase> {
    return openDB(dbName, dbVersion, {
      upgrade(database: IDBPDatabase): void {
        database.createObjectStore('contentfulToken');
        tables.forEach((table: string) => {
          database.createObjectStore(table, {autoIncrement: true});
        });
      }
    });
  }

  public initialize(dbName: string, dbVersion: number, tables: string[]): Promise<IDBPDatabase> {
    return new Promise<IDBPDatabase>((resolve) => {
      if (this.checkIdbSupport()) {
        this.createDB(dbName, dbVersion, tables).then(indexedDB => {
          this.indexedDB = indexedDB;
          resolve(indexedDB);
        }).catch(e => {
          this._isSupported = false;
          resolve(null);
        });
      } else {
        resolve(null);
      }
    });
  }

  public clearTable(table: string): void {
    if (!this.indexedDB) {
      throw 'DB need to be initialized first, call init function';
    }
    let transaction = this.indexedDB.transaction(table, 'readwrite');
    let store = transaction.store;
    store.clear();
  }

  public clearDB(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (!this.indexedDB) {
        reject('DB need to be initialized first, call init function');
      }
      for (let i = 0; i < this.indexedDB.objectStoreNames.length; i++) {
        let store = this.indexedDB.objectStoreNames[i];
        this.clearTable(store);
      }
      resolve(true);
    })

  }

  public writeToTable(table: string, data: any): void {
    if (!this.indexedDB) {
      throw 'DB need to be initialized first, call init function';
    }
    try {
      let transaction = this.indexedDB.transaction(table, 'readwrite');
      let store = transaction.store;
      store.put(data, table);
      transaction.done.catch(e => {
        return null;
      });
    } catch (e) {
      return null;
    }

  }

  public readTable(table: string): Promise<any> {
    return this.indexedDB.get(table, table)
      .catch(e => {
        return null;
      });
  }
}
