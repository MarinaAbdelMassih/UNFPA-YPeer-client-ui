import {Injectable} from '@angular/core';
import {CustomHttpClientService} from './custom-http-client.service';
import {ISignIn} from '../models/signIn.model';
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  userInfo: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  constructor(private customHttpClient: CustomHttpClientService) {
  }

  signIn(data: ISignIn): Promise<ISignIn> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'auth/signin',
      sender: 'signin',
      receiver: 'signin',
      body: data
    });
  }
}


