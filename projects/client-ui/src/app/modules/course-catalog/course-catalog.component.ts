import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {courseCatalogContent} from '../../../../../../src/app/shared/models/course-catalog.model';
import {CourseCatalogResolverService} from '../../../../../../src/app/shared/services/course-catalog-resolver.service';

@Component({
  selector: 'app-course-catalog',
  templateUrl: './course-catalog.component.html',
  styleUrls: ['./course-catalog.component.scss']
})
export class CourseCatalogComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  courseCatalogData: courseCatalogContent;

  constructor(private courseCatalogResolverService: CourseCatalogResolverService) { }

  ngOnInit() {
    this.getCourseCatalogData();
  }

  getCourseCatalogData() {
    let courseCatalogSub = this.courseCatalogResolverService.resolve().subscribe((courseCatalogData: courseCatalogContent) => {
      this.courseCatalogData = undefined;
      setTimeout(() => {
        this.courseCatalogData = courseCatalogData;
      }, 200)

    });
    this.subscriptions.push(courseCatalogSub);
  }

}
