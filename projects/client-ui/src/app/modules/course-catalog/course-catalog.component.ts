import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {courseCatalogContent} from '../../../../../../src/app/shared/models/course-catalog.model';
import {CourseCatalogResolverService} from '../../../../../../src/app/shared/services/course-catalog-resolver.service';
import {SignInService} from '../../../../../../src/app/shared/services/sign-in.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-catalog',
  templateUrl: './course-catalog.component.html',
  styleUrls: ['./course-catalog.component.scss']
})
export class CourseCatalogComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  courseCatalogData: courseCatalogContent;

  constructor(private courseCatalogResolverService: CourseCatalogResolverService, private router: Router,
              private signInService: SignInService) { }

  ngOnInit() {
    this.redirectToHome();
    this.getCourseCatalogData();
  }

  redirectToHome(): void {
    this.signInService.userAuthorized().then(userInfo => {
      if(userInfo && userInfo.status !== 1) {
        this.router.navigate(['/home']);
      }
    });
  }

  getCourseCatalogData(): void {
    let courseCatalogSub = this.courseCatalogResolverService.resolve().subscribe((courseCatalogData: courseCatalogContent) => {
      this.courseCatalogData = undefined;
      setTimeout(() => {
        this.courseCatalogData = courseCatalogData;
      }, 200)

    });
    this.subscriptions.push(courseCatalogSub);
  }

}
