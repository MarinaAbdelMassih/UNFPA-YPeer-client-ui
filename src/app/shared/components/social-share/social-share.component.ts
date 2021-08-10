import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss']
})
export class SocialShareComponent implements OnInit {

  @Input() facebook: boolean;
  @Input() twitter: boolean;
  @Input() instagram: boolean;
  @Input() youtube: boolean;
  @Input() messenger: boolean;
  @Input() whatsapp: boolean;

  constructor() { }

  ngOnInit() {
  }

}
