import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {homeContent} from "../../../../../../src/app/shared/models/home.model";
import {HomeResolverService} from "../../../../../../src/app/shared/services/home-resolver.service";
import {SignInService} from '../../../../../../src/app/shared/services/sign-in.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  homeData: homeContent;
  isActive: boolean = false;

  constructor(private homeResolver: HomeResolverService, private signInService: SignInService) { }

  ngOnInit() {
    this.checkUserStatus();
    let homeSub = this.homeResolver.resolve().subscribe((homeData: homeContent) => {
      this.homeData = undefined;
      setTimeout(() => {
        this.homeData = homeData;
      }, 200)

    });

    this.subscriptions.push(homeSub);
  }

  checkUserStatus(): void {
    this.signInService.userAuthorized().then(userInfo => {
      if(userInfo && userInfo.status === 1) {
        this.isActive = true
      }
    });
  }

}
