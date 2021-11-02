import {Injectable} from '@angular/core';
import SHA256 from 'crypto-js/sha256';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) {
  }

  hashFileName(name: string): string {
    return SHA256(name).toString();
  }

  getHashedImage(name: string): string {
    let hashedImageName = this.hashFileName(name);
    return `${environment.cdnURI}/${hashedImageName}`;
  }

  getHashedHTMLFile(name: string): Promise<any> {
    let hashedImageName = this.hashFileName(name);
    return this.httpClient.get(`${environment.cdnURI}/${hashedImageName}.html`, {
      responseType: 'text'
    }).toPromise();
  }
}
