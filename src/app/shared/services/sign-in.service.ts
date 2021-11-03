import {Injectable} from '@angular/core';
import {CustomHttpClientService} from './custom-http-client.service';
import {ISignIn} from '../models/signIn.model';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(private customHttpClient: CustomHttpClientService) {
  }

  signIn(data: ISignIn): Promise<ISignIn> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'auth/signin',
      sender: 'signin',
      receiver: 'signin',
      body: data,
      headers: true
    });
  }
}


