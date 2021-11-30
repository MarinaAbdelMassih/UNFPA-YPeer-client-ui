import {Injectable} from '@angular/core';
import {CustomHttpClientService} from './custom-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  constructor(private customHttpClientService: CustomHttpClientService) {
  }

  uploadImage(image: { sender: string, file: File, token: {userId: number, uuid: string} }): Promise<any> {
    return this.customHttpClientService.upload({
      endpoint: 'uploader/uploadImage',
      sender: image.sender,
      receiver: 'uploadImage',
      body: image.token,
      file: image.file,
      headers: true
    });
  }
}
