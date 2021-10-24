import {Injectable} from '@angular/core';
import {CustomHttpClientService} from './custom-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(private customHttpClient: CustomHttpClientService) {
  }

  signIn(username: string, password: string, authType: string): Promise<any> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'auth/signin',
      sender: 'signin',
      receiver: 'signin',
      body: {
        username,
        password,
        authType
      },
    });
  }
}


