import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-social',
  templateUrl: './footer-social.component.html',
  styleUrls: ['./footer-social.component.scss']
})
export class FooterSocialComponent implements OnInit {
  @Input() show ?= false;

  constructor() {
  }

  ngOnInit() {
  }

}
