import {Injectable} from '@angular/core';
import {CustomHttpClientService} from './custom-http-client.service';
import {IContactUs} from '../models/contact-us-model';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private customHttpClient: CustomHttpClientService) {
  }

  contactUs(contactUsInfo: IContactUs): Promise<IContactUs> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'contactUs',
      sender: 'contactUs',
      receiver: 'contactUs',
      body: contactUsInfo,
    });
  }
}
