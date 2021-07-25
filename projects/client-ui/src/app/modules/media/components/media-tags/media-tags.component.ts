import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-media-tags',
  templateUrl: './media-tags.component.html',
  styleUrls: ['./media-tags.component.scss']
})
export class MediaTagsComponent implements OnInit {
  @Input() tagsList;

  constructor() { }

  ngOnInit() {
  }

}
