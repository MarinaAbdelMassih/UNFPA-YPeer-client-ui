import { Injectable } from '@angular/core';
import {HttpService} from "../../core/http/http.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor(private http: HttpService) { }

  public getQuery(query: string): Promise<any> {
    return this.http.contentfulGraphQL(query);
  }

  public checkIfDataChanged(accessToken?: string): Promise<string> {
    return new Promise<string>(resolve => {
      const asyncLink = this.setSyncLink(accessToken);
      this.http.contentfulSync(asyncLink)
        .then((res: any) => {
          let nextURL = res.nextSyncUrl;
          if(!nextURL){
            nextURL = res.nextPageUrl;
          }
          resolve(this.checkIfAccessTokenChanged(accessToken, nextURL));
        })
        .catch(() => resolve(null));
    });
  }

  private setSyncLink(accessToken): string {
    let asyncParam = 'initial=true&limit=1000';
    if (accessToken)
      asyncParam = `sync_token=${accessToken}`;
    return `https://cdn.contentful.com/spaces/${environment.contentful.spaceId}/environments/master/sync?${asyncParam}`;

  }

  private getToken(url): string {
    const urlParts = url.split('?')
    return urlParts.length > 0 ? urlParts[1].replace('sync_token=', '') : null;
  }

  private checkIfAccessTokenChanged(accessToken, nextUrl): string {
    if (nextUrl) {
      let paramsObject = this.getToken(nextUrl);
      if (paramsObject) {
        if (paramsObject != accessToken)
          return paramsObject
      }
    }
    return null;
  }
}
