import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trainings-tags',
  templateUrl: './trainings-tags.component.html',
  styleUrls: ['./trainings-tags.component.scss']
})
export class TrainingsTagsComponent implements OnInit {

  @Input() tagsList;

  constructor() {
  }

  ngOnInit() {
  }

}
