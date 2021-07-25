import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resources-tags',
  templateUrl: './resources-tags.component.html',
  styleUrls: ['./resources-tags.component.scss']
})
export class ResourcesTagsComponent implements OnInit {
  @Input() tagsList;

  constructor() {
  }

  ngOnInit() {
  }

}
