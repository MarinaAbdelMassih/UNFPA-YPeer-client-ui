import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-story-tags',
  templateUrl: './stories-tags.component.html',
  styleUrls: ['./stories-tags.component.scss']
})
export class StoriesTagsComponent implements OnInit {
  @Input() tagsList;
  constructor() { }

  ngOnInit() {
  }

}
