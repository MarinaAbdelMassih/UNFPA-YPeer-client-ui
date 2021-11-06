import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getSearchData(searchWord: string) {
   return this.http.get(`https://cdn.contentful.com/spaces/jvvejk00zh2l/entries?query=${searchWord}&limit=7&skip=0`,
      {headers: {'authorization': 'Bearer SjOnnb-PwRJ45RxLrkygZq__Tcum2HeCje-ZxqgO0c0'
        }}).toPromise();
  }

  getImageById(id: string) {
    return this.http.get(`https://cdn.contentful.com/spaces/jvvejk00zh2l/environments/master/assets/${id}`,
      {headers: {'authorization': 'Bearer SjOnnb-PwRJ45RxLrkygZq__Tcum2HeCje-ZxqgO0c0'
        }}).toPromise()
  }
}
