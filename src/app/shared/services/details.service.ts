import { Injectable } from '@angular/core';
import {CustomHttpClientService} from "./custom-http-client.service";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private customHttpClient: CustomHttpClientService) { }

  getCourseById(sender: string, id: number, hasProgress: boolean) {
    return this.customHttpClient.sendBackendRequest({
      endpoint: "course/details",
      sender: sender,
      receiver: "details",
      body: {entityId: id, hasProgress: hasProgress},
    });
  }
}
