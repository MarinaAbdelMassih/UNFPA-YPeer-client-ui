import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {environment} from "../../../../src/environments/environment";
import {MatIconRegistry} from "@angular/material";
import {LearnerSectionsDataService} from "../../../../src/app/shared/services/course-viewer/learner-sections-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseViewerDataService} from "../../../../src/app/shared/services/course-viewer/course-viewer-data.service";
import {DomSanitizer} from "@angular/platform-browser";
import {LanguageService} from "../../../../src/app/shared/services/language.service";
import {Location} from "@angular/common";
import {ILocalPosition} from "../../../../src/app/shared/models/course-viewer/common-data.model";
import {QuizService} from "../../../../src/app/shared/services/quiz.service";

@Component({
  selector: 'course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.scss']
})
export class CourseViewerComponent implements OnInit, OnDestroy{

  isArabic: boolean = false;
  loaded: boolean;
  courseId: number;
  hasProgress: boolean;
  subjectId: number;
  private subscriptions: Subscription[] = [];
  showResult: boolean;


  // private studentService: StudentService, private subjectService: SubjectService
  constructor(private langService: LanguageService, private router: Router,
              private learnerSectionService: LearnerSectionsDataService, private route: ActivatedRoute,
              private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer,
              private courseViewerDataService: CourseViewerDataService,
              private location: Location, private quizService: QuizService) {
    quizService.examIsFinished.subscribe(showResult => this.showResult = showResult);
    // this.matIconRegistry.addSvgIcon(
    //   `viewer_interactive`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.deployUrl}/assets/images/interactive-icon.svg`)
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `viewer_video`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.deployUrl}/assets/images/video-icon.svg`)
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `viewer_article`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.deployUrl}/assets/images/article-icon.svg`)
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `viewer_resource`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.deployUrl}/assets/images/resource-icon.svg`)
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `viewer_assessment`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.deployUrl}/assets/images/assessment.svg`)
    // );

    this.isArabic = this.langService.getIsArabic();
    //this.ngxService.start('init-course-viewer');
    this.learnerSectionService.learnerSections.next(null);
    this.learnerSectionService.userCurrentPosition.next(null);
  }

  ngOnInit() {
    let paramsSub = this.route.params.subscribe((params) => {
      if (params.courseId) {
        this.courseId = params.courseId;
        this.learnerSectionService.setLearnerSections(this.courseId, true).then((data) => {
          this.learnerSectionService.learnerSections.next(data.sections);
          this.learnerSectionService.getUserCurrentPosition(data.sections, this.courseId).then((position: ILocalPosition) => {
            this.learnerSectionService.userCurrentPosition.next(position);
            //this.ngxService.stop('init-course-viewer');
          });
          //this.subjectId = data.course.subjectId;
          // if(params.isEnrolled) {
          //   let isEnrolled = JSON.parse(params.isEnrolled);
          //   this.location.replaceState('viewer/' + params.courseId)
          //   if (!isEnrolled) {
          //     //this.studentService.coursesEnrollment({courseId: this.courseId, subjectId: this.subjectId}).then();
          //   }
          // }
          // this.getSubjectInfoById(this.subjectId).then((subject) => {
          //
          //   this.hasProgress = this.studentService.userHasProgress({
          //     gradeId: subject.gradeId,
          //     schoolLanguages: subject.schoolLanguages,
          //     tracks: subject.tracks
          //   });
          //   // if(data.course.typeId == 2){
          //   //   let userData = this.studentService.studentInfo.getValue();
          //   //   this.hasProgress = this.hasProgress  && userData.isSubscribed;
          //   //   if(!this.hasProgress)
          //   //     this.router.navigate(['/home']);
          //   // }
          //   //this.courseViewerDataService.shouldSendProgress = this.hasProgress;
          //
          //   this.loaded = true;
          // });

        }).catch(() => {
          //this.router.navigate(['/home']);
        });
      }
    });
    this.subscriptions.push(paramsSub);

  }

  ngOnDestroy(): void {
    this.subscriptions.map((subscription) => {
      subscription.unsubscribe();
    })
  }
}
