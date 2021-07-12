import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-publications-list',
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.scss']
})
export class PublicationsListComponent implements OnInit {
  @Input() publicationsLists;
  constructor() { }

  ngOnInit() {
  }

}
