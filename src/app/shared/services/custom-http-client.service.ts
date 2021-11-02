import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {TokenService} from './token.sevice';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpClientService {

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  private checkIfUserLoggedIn = (): any => {
    let uuid = localStorage.getItem('uuid');
    let auth = localStorage.getItem('user-token');
    if (uuid && auth) {
      return {uuid: uuid, accessToken: auth};
    }
    return null;
  };

  sendBackendRequest(request: {endpoint: string, sender: string, receiver: string, body: object, headers?: boolean}): Promise<any> {
    let uuid, token;
    if (this.checkIfUserLoggedIn()) {
       uuid = this.checkIfUserLoggedIn().uuid;
       token = this.checkIfUserLoggedIn().accessToken;
    }
    let jwtToken = this.tokenService.buildJwt({
      sender: request.sender,
      receiver: request.receiver,
      uuid: uuid,
      body: request.body
    });
    return this.http.post(`${environment.serviceURI}/${request.endpoint}`, jwtToken,
      {headers: request.headers ? {'authorization': `Bearer ${token}`}: null } ).toPromise();
  }
}
