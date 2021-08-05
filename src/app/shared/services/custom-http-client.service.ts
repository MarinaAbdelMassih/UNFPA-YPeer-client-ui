import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomHttpClientService {

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  private checkIfUserLoggedIn = (): string => {
    let uuid = localStorage.getItem('uuid');
    let auth = localStorage.getItem('auth');
    if (uuid && auth) {
      return uuid;
    }
    return null;
  };

  sendBackendRequest(request: {endpoint: string, sender: string, receiver: string, body: Object}): Promise<any> {
    let uuid = this.checkIfUserLoggedIn();
    let jwtToken = this.tokenService.buildJwt({
      sender: request.sender,
      receiver: request.receiver,
      uuid: uuid,
      body: request.body
    });
    return this.http.post(`${environment.serviceURI}/${request.endpoint}`, jwtToken).toPromise();
  }
}
