import {Injectable} from '@angular/core';
import {CustomHttpClientService} from './custom-http-client.service';
import {IUserData} from '../models/user-data.interface';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(private customHttpClient: CustomHttpClientService) {
  }
  signUp(user: IUserData): Promise<IUserData> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'auth/signup',
      sender: 'signup',
      receiver: 'signup',
      body: user,
    });
  }
}


