import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../../../../../src/environments/environment";

@Component({
  selector: 'app-contact-us-banner',
  templateUrl: './contact-us-banner.component.html',
  styleUrls: ['./contact-us-banner.component.scss']
})
export class ContactUsBannerComponent implements OnInit {

  deploySrc = environment.deployUrl;
  constructor() { }

  ngOnInit() {
  }

}
