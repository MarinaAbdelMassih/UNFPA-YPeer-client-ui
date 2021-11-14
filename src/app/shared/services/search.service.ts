import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

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
}
