import { Injectable } from '@angular/core';
import {SignInService} from "../services/sign-in.service";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthResolverService {

  constructor(private signInService: SignInService) { }

  resolve(): Promise<User> {
    return new Promise<User>(resolve => {
      let userInfoExist = this.signInService.userInfo.getValue();
      if (userInfoExist) {
        resolve({
          userId: userInfoExist.userId,
          firstName: userInfoExist.firstName,
          status: userInfoExist.status,
          valid: true,
        });
      } else {
        this.signInService.userAuthorized().then((remoteUserInfo: User) => {
          if (remoteUserInfo) {
            if (remoteUserInfo.valid) {
              resolve({
                userId: remoteUserInfo.userId,
                firstName: remoteUserInfo.firstName,
                status: remoteUserInfo.status,
                valid: true,
              });
            } else {
              resolve(null);
            }
          } else {
            resolve(null);
          }
        })
      }
    });
  }
}
