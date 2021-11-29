import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-what-next',
  templateUrl: './what-next.component.html',
  styleUrls: ['./what-next.component.scss']
})
export class WhatNextComponent implements OnInit {

  @Input() isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

}
