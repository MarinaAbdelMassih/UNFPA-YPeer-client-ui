import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isCourseViewer: boolean = false;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
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
