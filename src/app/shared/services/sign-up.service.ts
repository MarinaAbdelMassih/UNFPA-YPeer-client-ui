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

  getEducationalLevels(): Promise<any> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'auth/educationalLevels',
      sender: 'educationalLevels',
      receiver: 'educationalLevels',
      body: {},
    });
  }

  getGovernorates(): Promise<any> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'auth/governorates',
      sender: 'Governorates',
      receiver: 'governorates',
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

  getMaritalStatus(): Promise<any> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'auth/maritalStatus',
      sender: 'maritalStatus',
      receiver: 'maritalStatus',
      body: {},
    });
  }

}


