import {Injectable} from '@angular/core';
import {CustomHttpClientService} from './custom-http-client.service';
import {ImageService} from './image.service';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  constructor(private customHttpClientService: CustomHttpClientService, private imageService: ImageService) {
  }

  uploadImage(image: { sender: string, file: File, name: string, update: boolean }): Promise<any> {
    return this.customHttpClientService.upload({
      endpoint: 'uploadImage', sender: image.sender,
      receiver: 'uploadImage', file: image.file, body: {
        name: this.imageService.hashFileName(image.name),
        update: image.update
      }
    });
  }
}
