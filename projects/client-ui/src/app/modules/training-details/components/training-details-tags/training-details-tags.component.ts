import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-training-details-tags',
  templateUrl: './training-details-tags.component.html',
  styleUrls: ['./training-details-tags.component.scss']
})
export class TrainingDetailsTagsComponent implements OnInit {
  @Input() tagsList;

  constructor() { }

  ngOnInit() {
  }

}
