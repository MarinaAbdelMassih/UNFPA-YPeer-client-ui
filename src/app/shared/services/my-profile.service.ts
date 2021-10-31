import {Injectable} from '@angular/core';
import {CustomHttpClientService} from './custom-http-client.service';
import {IUserInfo} from '../models/my-profile.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(private customHttpClient: CustomHttpClientService) {
  }

  getUserInfo(userId: number): Promise<IUserInfo> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'auth/getUserInfo',
      sender: 'getUserInfo',
      receiver: 'getUserInfo',
      body: {
        id: userId
      },
    });
  }
}
