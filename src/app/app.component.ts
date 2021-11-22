import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {map} from "rxjs/operators";
import {SignInService} from "./shared/services/sign-in.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isCourseViewer: boolean = false;
  userName: string;
  constructor(private router: Router, private signInService: SignInService) {
  }

  ngOnInit(): void {
    this.signInService.userInfo.subscribe((userData) => {
      if (userData) {
        this.userName = userData.firstName;
      }
    });

    this.router.events.pipe(
      map((event) => {
        return event;
      })
    ).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let courseViewerRegex = RegExp(`\/viewer\/[0-9]`);
        this.isCourseViewer = courseViewerRegex.test(event.url);
        setTimeout(() => {
          window.scroll(0, 0)
        }, 500);
      }
    });
  }
}
