import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataHandlerService} from "./data-handler.service";
import {SearchAllContent, searchContent, SearchModelSpecific} from "../models/search.model";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchData: searchContent;
  constructor(private http: HttpClient, private dataHandlerService: DataHandlerService) { }

  getSearchData(searchWord: string, skip: number, limit: number) {
   return this.http.get(`https://cdn.contentful.com/spaces/jvvejk00zh2l/entries?query=${searchWord}`,
      {headers: {'authorization': 'Bearer SjOnnb-PwRJ45RxLrkygZq__Tcum2HeCje-ZxqgO0c0'
        }}).toPromise();
  }

  getImageById(id: string) {
    return this.http.get(`https://cdn.contentful.com/spaces/jvvejk00zh2l/environments/master/assets/${id}`,
      {headers: {'authorization': 'Bearer SjOnnb-PwRJ45RxLrkygZq__Tcum2HeCje-ZxqgO0c0'
        }}).toPromise()
  }


  getSearchDataByEntryId(entryId: string, searchWord: string) {
    return this.http.get(`https://cdn.contentful.com/spaces/jvvejk00zh2l/entries?query=${searchWord}&links_to_entry=${entryId}`,
      {headers: {'authorization': 'Bearer SjOnnb-PwRJ45RxLrkygZq__Tcum2HeCje-ZxqgO0c0'
        }}).toPromise();
  }

  getPageData(skip: number, limit: number, searchWord: string, searchQuery:any, searchDataType?: string): Observable<searchContent> {
    let result;
    return new Observable<searchContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(searchQuery(skip, limit, searchWord), (res) => {
        result = res;
      }).then(() => {
        this.searchData = new SearchModelSpecific({
         searchResult: result.data[searchDataType]
        });
        subscriber.next(this.searchData);
      }, () => {subscriber.next(null);    console.log(result)});
    });
  }

  getMultiPageData(searchQuery:any): Observable<SearchAllContent[]> {
    const searchableModels = [
      'newsListItemCollection',
      'eventsListItemCollection',
      'storiesListItemCollection',
      'publicationsListItemCollection',
      'trainingsListItemCollection',
    ];
    let data;
    return new Observable<SearchAllContent[]>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(searchQuery, (res) => {
        data = res.data;
      }).then(() => {
        const searchAllData = searchableModels.map(key => {
          return {
            modelType: key,
            total: data[key].total,
            items: SearchModelSpecific.setPublicationsList(data[key].items)
          };
        });
        subscriber.next(searchAllData);
      }, () => {subscriber.next(null);    console.log(data); });
    });
  }
}
