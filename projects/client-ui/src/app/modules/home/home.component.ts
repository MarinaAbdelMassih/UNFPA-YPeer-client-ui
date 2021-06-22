import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {homeContent} from "../../../../../../src/app/shared/models/home.model";
import {HomeResolverService} from "../../../../../../src/app/shared/services/home-resolver.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  homeData: homeContent;

  constructor(private homeResolver: HomeResolverService) { }

  ngOnInit() {
    let homeSub = this.homeResolver.resolve().subscribe((homeData: homeContent) => {
      this.homeData = homeData;
      console.log(homeData)
    });

    this.subscriptions.push(homeSub);
  }

}
