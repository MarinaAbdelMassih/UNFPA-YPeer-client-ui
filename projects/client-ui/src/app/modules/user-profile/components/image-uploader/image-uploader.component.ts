import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {NgxDropzoneChangeEvent} from 'ngx-dropzone';
import {UploaderService} from '../../../../../../../../src/app/shared/services/uploader.service';
import {IUserInfo} from '../../../../../../../../src/app/shared/models/my-profile.model';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit, OnChanges {
  file: File;
  @Input() userInfo: IUserInfo;
  @Input() imageSrc: string;
  @Input() width: number;
  @Input() height: number;
  @Input() name: string;
  @Input() update: boolean;
  @Input() shouldUpload: boolean;
  @Output() onImageChange: EventEmitter<string | ArrayBuffer> = new EventEmitter<string | ArrayBuffer>();
  @Output() onImageRemove: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onImageUpload: EventEmitter<boolean> = new EventEmitter<boolean>();
  hasError = false;
  showInputError = false;
  uploading = false;
  currentImage: any;

  constructor(private uploaderService: UploaderService) {
  }

  ngOnInit(): void {
    if ((this.width && !this.height) || (this.height && !this.width)) {
      this.showInputError = true;
      throw new Error('Image should has both width and height not only one of them.');
    }
  }

  private validateImageDimensions(reader: FileReader): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      if (this.width && this.height) {
        const image = new Image();
        image.src = reader.result.toString();
        image.onload = () => {
          if (this.width == image.width && this.height == image.height) {
            resolve(true);
          } else {
            resolve(false);
          }
        };
      } else {
        resolve(true);
      }
    });
  }

  onSelect($event: NgxDropzoneChangeEvent) {
    const file = $event.addedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      this.validateImageDimensions(reader).then((isValid: boolean) => {
        if (isValid) {
          // @ts-ignore
          this.currentImage = e.target.result;
          this.file = file;
          this.onImageChange.emit(reader.result);
          this.hasError = false;
        } else {
          this.hasError = true;
        }
      });
    };
  }

  onRemove(file: File) {
    this.file = null;
    this.onImageRemove.emit(true);
  }

  uploadImage() {
    if (this.name && this.file && this.shouldUpload) {
      this.uploading = true;
      this.uploaderService.uploadImage({
        file: this.file,
        sender: 'image',
        token: {
          userId: this.userInfo.id,
          uuid: this.userInfo.uuid
        }
      }).then((res) => {
        this.uploading = false;
        this.file = null;
        this.onImageUpload.emit(res.url);
        this.imageSrc = res.url;
      }).catch(() => {
        this.file = null;
        this.onImageUpload.emit(false);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.shouldUpload) {
      if (this.name){
        this.uploadImage();
      } else {
        throw new Error('File uploader should has name to upload.');
      }
    }
  }
}
