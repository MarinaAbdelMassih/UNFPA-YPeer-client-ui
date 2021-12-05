import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-social',
  templateUrl: './footer-social.component.html',
  styleUrls: ['./footer-social.component.scss']
})
export class FooterSocialComponent implements OnInit {
  @Input() show ? = false;
  @Input() facebook: string;
  @Input() twitter: string;
  @Input() instagram: string;
  @Input() youtype: string;

  constructor() {
  }

  ngOnInit() {
  }

}
