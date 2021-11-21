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
    this.html.link = `https://cdn-stg-doroos.almentor.net/${folderName}/story.html`;
  }

}
