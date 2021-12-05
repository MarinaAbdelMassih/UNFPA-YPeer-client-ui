import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {homeContent} from "../../../../../../src/app/shared/models/home.model";
import {HomeResolverService} from "../../../../../../src/app/shared/services/home-resolver.service";
import {SignInService} from '../../../../../../src/app/shared/services/sign-in.service';
import {Router} from '@angular/router';
import {ConfirmationPopUpComponent} from '../../../../../../src/app/shared/components/confirmation-pop-up/confirmation-pop-up.component';
import {MatDialog} from '@angular/material';
import {User} from '../../../../../../src/app/shared/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  homeData: homeContent;
  userInfo: User;

  constructor(private homeResolver: HomeResolverService, private signInService: SignInService,
              private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.getUserInfo();
    let homeSub = this.homeResolver.resolve().subscribe((homeData: homeContent) => {
      this.homeData = undefined;
      setTimeout(() => {
        this.homeData = homeData;
      }, 200)

    });

    this.subscriptions.push(homeSub);
  }

  getUserInfo(): void {
    this.signInService.userInfo.subscribe((userInfo) => {
        this.userInfo = userInfo;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => {
      subscription.unsubscribe();
    });
  }

  joinTheProgram(): void {
      if(!this.userInfo) {
        this.router.navigate(['/signIn']);
      } else if (this.userInfo && this.userInfo.status === 1) {
        this.router.navigate(['/course-catalog']);
      } else if (this.userInfo && this.userInfo.status === 2) {
        this.router.navigate(['/welcome']);
      } else if (this.userInfo && this.userInfo.status === 3) {
        this.dialog.open(ConfirmationPopUpComponent, {
          width: '740px',
        });
      }
  }

}
