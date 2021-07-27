import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-publications-tags',
  templateUrl: './publications-tags.component.html',
  styleUrls: ['./publications-tags.component.scss']
})
export class PublicationsTagsComponent implements OnInit {
  @Input() tagsList;
  constructor() { }

  ngOnInit() {
  }

}
