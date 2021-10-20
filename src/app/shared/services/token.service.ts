import {Injectable} from '@angular/core';
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import SHA256 from 'crypto-js/sha256';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  private buildJwtHeader = (sender: string, receiver: string, uuid?: string): { header: object, base64: string, secret: string } => {
    let header = {
      sender: sender,
      receiver: receiver,
      timestamp: Date.now(),
      uuid: uuid ? uuid : '0000-0000-0000-0000'
    };
    let headerBase64 = Base64.stringify(Utf8.parse(JSON.stringify(header)));
    let secret = `${header.sender[0]}${header.timestamp}${header.receiver[0]}`;
    return {
      header: header,
      base64: headerBase64,
      secret: secret
    }
  };

  private buildJwtPayload = (payload: Object): { payload: Object, base64: string } => {
    let payloadBase64 = Base64.stringify(Utf8.parse(JSON.stringify(payload)));
    return {
      payload: payload,
      base64: payloadBase64
    }
  };

  private buildJwtAuth = (): string => {
    let authLocalStorage = localStorage.getItem('auth');
    let authBase64 = Base64.stringify(Utf8.parse(JSON.stringify({})));
    return authLocalStorage ? authLocalStorage : authBase64;
  }

  private buildJwtSignature = (headerBase64: string, payloadBase64: string, authBase64: string, secret: string): string => {
    let signatureString = `${headerBase64}.${payloadBase64}.${authBase64}.${secret}`;
    return SHA256(signatureString).toString();
  }

  buildJwt(request: { sender: string, receiver: string, body: Object, uuid?: string }): string {
    let jwtHeader = this.buildJwtHeader(request.sender, request.receiver, request.uuid);
    let jwtPayload = this.buildJwtPayload(request.body);
    let jwtAuth = this.buildJwtAuth();
    let jwtSignature = this.buildJwtSignature(jwtHeader.base64, jwtPayload.base64, jwtAuth, jwtHeader.secret);
    return `${jwtHeader.base64}.${jwtPayload.base64}.${jwtAuth}.${jwtSignature}`;
  }

}
