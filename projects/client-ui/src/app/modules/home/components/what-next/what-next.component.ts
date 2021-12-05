import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-what-next',
  templateUrl: './what-next.component.html',
  styleUrls: ['./what-next.component.scss']
})
export class WhatNextComponent implements OnInit {

  @Output() joinClicked: EventEmitter<boolean> = new EventEmitter<false>();

  constructor() { }

  ngOnInit() {
  }

  joinTheProgramClicked(): void {
    this.joinClicked.emit(true);
  }

}
