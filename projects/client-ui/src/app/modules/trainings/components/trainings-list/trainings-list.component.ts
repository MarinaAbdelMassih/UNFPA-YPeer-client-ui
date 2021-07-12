import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.scss']
})
export class TrainingsListComponent implements OnInit {
  @Input() trainingsLists;
  constructor() { }

  ngOnInit() {
  }

}
