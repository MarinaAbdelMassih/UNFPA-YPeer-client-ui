import {Injectable} from '@angular/core';
import {CustomHttpClientService} from './custom-http-client.service';
import {IUserInfo} from '../models/my-profile.model';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {
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

  updateUserInfo(updateUser: IUserInfo): Promise<IUserInfo> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'auth/updateUserInfo',
      sender: 'updateUserInfo',
      receiver: 'updateUserInfo',
      body: updateUser
    });
  }

  getEducationalLevels(): Promise<any> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'auth/educationalLevels',
      sender: 'educationalLevels',
      receiver: 'educationalLevels',
      body: {},
    });
  }


  getGenders(): Promise<any> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'auth/genders',
      sender: 'genders',
      receiver: 'genders',
      body: {},
    });
  }
}
