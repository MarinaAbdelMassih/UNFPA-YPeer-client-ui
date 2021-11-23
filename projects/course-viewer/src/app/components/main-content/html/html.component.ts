import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../../../../../../../src/app/shared/services/image.service';

@Component({
  selector: 'app-interactive',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent implements OnInit {

  @Input() html: any;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    const folderName = this.imageService.hashFileName(`interactive-${this.html.lectureId}-${this.html.id}`);
    // TODO change CDN URI in the environment file
    // this.html.link = `${environment.cdnURI}/${folderName}/story.html`;
    this.html.link = `https://ypeerstgcdn.z1.web.core.windows.net/${folderName}/story.html`;
  }

}
