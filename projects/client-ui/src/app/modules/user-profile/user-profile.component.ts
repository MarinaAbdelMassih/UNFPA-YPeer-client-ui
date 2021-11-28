import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../../../../../src/app/shared/services/language.service';
import {MyProfileService} from '../../../../../../src/app/shared/services/my-profile.service';
import {IUserInfo} from '../../../../../../src/app/shared/models/my-profile.model';
import {SignInService} from '../../../../../../src/app/shared/services/sign-in.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userInfo: IUserInfo;
  isArabic: boolean;
  subscription: Subscription;

  constructor(private languageService: LanguageService, private myProfileService: MyProfileService,
              private signInService: SignInService) { }

  ngOnInit() {
    this.checkLanguage();
    this.getUSerInfo();
  }

  checkLanguage(): void {
    this.subscription = this.languageService.isArabic.subscribe((isArabic: boolean) => {
      this.isArabic = isArabic;
    });
  }

  getUSerInfo(): void {
    this.signInService.userAuthorized().then(userData => {
      if(userData) {
        this.myProfileService.getUserInfo(userData.auth.userId).then(userInfo => {
          this.userInfo = userInfo;
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
