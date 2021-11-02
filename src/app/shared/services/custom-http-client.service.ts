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

  private checkIfUserLoggedIn = (): string => {
    let uuid = localStorage.getItem('uuid');
    let auth = localStorage.getItem('user-token');
    if (uuid && auth) {
      return uuid;
    }
    return null;
  };

  sendBackendRequest(request: { endpoint: string, sender: string, receiver: string, body: object }): Promise<any> {
    let uuid = this.checkIfUserLoggedIn();
    let jwtToken = this.tokenService.buildJwt({
      sender: request.sender,
      receiver: request.receiver,
      uuid: uuid,
      body: request.body
    });
    return this.http.post(`${environment.serviceURI}/${request.endpoint}`, jwtToken).toPromise();
  }

  upload(request: { endpoint: string, sender: string, receiver: string, body: object, file: File }): Promise<any> {
    let uuid = this.checkIfUserLoggedIn();
    let jwtToken = this.tokenService.buildJwt({
      sender: request.sender,
      receiver: request.receiver,
      uuid: uuid,
      body: request.body
    });
    let fileFormData = new FormData();
    fileFormData.append('file', request.file, request.file.name);
    fileFormData.append('token', jwtToken);
    return this.http.post(`${environment.uploadServiceURI}/${request.endpoint}`, fileFormData).toPromise();
  }

}
