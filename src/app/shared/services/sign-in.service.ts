import {Injectable} from '@angular/core';
import {CustomHttpClientService} from './custom-http-client.service';
import {ISignIn} from '../models/signIn.model';
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user.model";
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';

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

  refreshToken(): Promise<any> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'auth/refreshToken',
      sender: 'app',
      receiver: 'refreshToken',
      body: {refreshToken: localStorage.getItem('refresh-token')}
    });
  }

  saveUserAuth(userData): void {
    let authBase64 = Base64.stringify(Utf8.parse(JSON.stringify(userData.auth)));
    localStorage.setItem('auth', authBase64);
    localStorage.setItem('uuid', userData.uuid);
    localStorage.setItem('user-token',userData.accessToken);
    localStorage.setItem('refresh-token', userData.refreshToken);
  }

  private checkAuthorization(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.customHttpClient.sendBackendRequest({
        body: {},
        receiver: 'isAuthorized',
        sender: 'app',
        endpoint: 'auth/isAuthorized',
        headers: true
      })
        .then((userData) => {
          if (userData.valid) {
            this.userInfo.next({
              userId: userData.auth.userId,
              firstName: userData.name,
              status: userData.status
            });
            localStorage.setItem('uuid', userData.uuid);
            resolve(userData);
          } else {
            reject()
          }
        })
        .catch(reject);
    });
  }

  rememberMe() {
    if (localStorage.getItem('remember-me') == 'true') {
      this.refreshToken().then((data => {
        this.saveUserAuth(data.data);
        this.userInfo.next(data.data);
        return true;
      }))
    }
    else {
      return false;
    }
  }
  userAuthorized(): Promise<any> {
    return new Promise<any>((resolve) => {
      let uuid = localStorage.getItem('uuid');
      let auth = localStorage.getItem('auth');
      let accessToken = localStorage.getItem('user-token');
      if (uuid && auth && accessToken) {
        this.checkAuthorization().then((userData) => {
          if (userData.valid) {
            resolve(userData);
          } else {
            if (this.rememberMe()) {
              resolve(true)
            }
            else {
              this.logout();
              resolve(null);
            }
          }
        }).catch(() => {
          if (this.rememberMe()) {
            resolve(true)
          }
          else {
            this.logout();
            resolve(null);
          }
        })
      } else {
        resolve(null);
      }

    });
  }

  logout(): void {
    localStorage.removeItem('auth');
    localStorage.removeItem('uuid');
    localStorage.removeItem('user-token');
    localStorage.removeItem('refresh-token');
    this.userInfo.next(null);
  }
}


