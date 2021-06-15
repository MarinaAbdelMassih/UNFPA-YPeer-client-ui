import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  contentfulGraphQL(query: string): Promise<any> {
    const graphqlLink = `https://graphql.contentful.com/content/v1/spaces/${environment.contentful.spaceId}`;
    return this.http.post(graphqlLink, {'query': query}, {
      headers: {
        'Authorization': `Bearer ${environment.contentful.token}`
      }
    }).toPromise();
  }

  contentfulSync(asyncLink: string): Promise<any> {
    return this.http.get(asyncLink, {
      headers: {
        'Authorization': `Bearer ${environment.contentful.token}`
      }
    }).toPromise()
  }
}
