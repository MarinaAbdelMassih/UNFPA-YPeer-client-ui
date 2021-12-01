import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {homeContent} from "../../../../../../src/app/shared/models/home.model";
import {HomeResolverService} from "../../../../../../src/app/shared/services/home-resolver.service";
import {SignInService} from '../../../../../../src/app/shared/services/sign-in.service';
import {MyCoursesService} from '../../../../../../src/app/shared/services/my-courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  homeData: homeContent;
  isActive: boolean = false;

  constructor(private homeResolver: HomeResolverService, private signInService: SignInService,
              private myCoursesService: MyCoursesService) { }

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
    this.signInService.userInfo.subscribe((userData) => {
      if (userData && userData.status === 1) {
        this.isActive = true;
        this.enrollIntroductory(userData.userId);
      }
    });
  }

  enrollIntroductory(userId: number): void {
    this.myCoursesService.enrollIntroductory({userId: userId}).then();
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => {
      subscription.unsubscribe();
    });
  }

}
