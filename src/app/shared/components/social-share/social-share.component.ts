import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss']
})
export class SocialShareComponent implements OnInit {

  socialLinks: any = [
    {
      link: "javascript:void(0);",
      type: "facebook",
    },
    {
      link: "javascript:void(0);",
      type: "twitter",
    },
    {
      link: "javascript:void(0);",
      type: "whatsapp",
    }];

  constructor() { }

  ngOnInit() {
  }

}
