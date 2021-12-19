import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-share-button',
  templateUrl: './alm-share-button.component.html',
  styleUrls: ['./alm-share-button.component.scss']
})
export class AlmShareButtonComponent implements OnInit {

  @Input() socialIcon?: string;
  @Input() url?: string;
  @Input() description?: string;
  @Output() onSharingCourse: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
