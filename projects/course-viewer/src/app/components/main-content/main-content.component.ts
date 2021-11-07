import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver, ComponentRef, EventEmitter, Input,
  OnDestroy, Output, Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {SideComponentsControlsService} from "../../../../../../src/app/shared/services/course-viewer/side-components-controls.service";
import {IStuff, StuffType} from "../../../../../../src/app/shared/models/course-viewer/stuff.model";
import {LectureType} from "../../../../../../src/app/shared/models/course-viewer/lectures.model";
import {CurriculumControlService} from "../../../../../../src/app/shared/services/course-viewer/curriculum-control.service";
import {LearnerSectionsDataService} from "../../../../../../src/app/shared/services/course-viewer/learner-sections-data.service";
import {VideoComponent} from "./video/video.component";
import {CourseViewerDataService} from "../../../../../../src/app/shared/services/course-viewer/course-viewer-data.service";
import {Subscription} from "rxjs";
import {LanguageService} from "../../../../../../src/app/shared/services/language.service";
import {delay} from "rxjs/operators";
import {QuizComponent} from "./quiz/quiz.component";


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements AfterViewInit, OnDestroy {

  @ViewChild('componentContainer', {static: false, read: ViewContainerRef}) componentContainer;
  private currentComponent: ComponentRef<any>;
  private subscriptions: Subscription[] = [];
  isArabic: boolean = false;
  courseId = null;
  currentTitle: string;
  @Input() videosCount: number;
  @Output() userProgress: EventEmitter<number> = new EventEmitter();

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private learnerSectionDataService: LearnerSectionsDataService,
              private curriculumControl: CurriculumControlService,
              private courseViewerDataService: CourseViewerDataService, private langService: LanguageService,
              private componentsControlsService: SideComponentsControlsService) {
    this.isArabic = this.langService.getIsArabic();
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    let sub = this.learnerSectionDataService.userCurrentPosition.pipe(
      delay(0)
    ).subscribe(current => {
      //this.ngxService.start('course-viewer-loading');
      if (!current)
        return;
      this.courseId = current.section.courseId;
      if (current.lecture) {
        // this.isNextExist = this.curriculumControl.isNext();
        // this.isPrevExist = this.curriculumControl.isPrev();
        if (current.lecture.type == LectureType.LECTURE) {
          if (current.stuff) {
            let stuff = current.stuff;
            this.currentTitle = this.isArabic ? stuff.titleLocal.AR : stuff.titleLocal.EN;
            if (stuff.type == StuffType.VIDEO) {
              this.createComponent(VideoComponent);
              (<VideoComponent>this.currentComponent.instance).video = stuff;
              (<VideoComponent>this.currentComponent.instance).userId = 1111;
              (<VideoComponent>this.currentComponent.instance).videosCount = this.videosCount;
              (<VideoComponent>this.currentComponent.instance).userProgress
                .subscribe(progress => this.userProgress.emit(progress))
              // (<VideoComponent>this.currentComponent.instance).subjectId = this.subjectId;
            }
            else if (stuff.type == StuffType.QUIZ) {
              this.createComponent(QuizComponent);
              (<QuizComponent>this.currentComponent.instance).quiz = stuff;
            }
            // else if (stuff.type == StuffType.MATERIAL) {
            //   this.setUserProgress(stuff);
            //   this.createComponent(MaterialComponent);
            //   (<MaterialComponent>this.currentComponent.instance).material = stuff;
            // } else if (stuff.type == StuffType.ARTICLE) {
            //   this.setUserProgress(stuff);
            //   this.createComponent(ArticleComponent);
            //   (<ArticleComponent>this.currentComponent.instance).article = stuff;
            //   // this.openInModal(stuff, ArticleComponent);
            // } else if (stuff.type == StuffType.INTERACTIVE) {
            //   this.setUserProgress(stuff);
            //   this.createComponent(HtmlComponent);
            //   (<HtmlComponent>this.currentComponent.instance).html = stuff;
            //   // this.openInModal(stuff, HtmlComponent);
            // }
          }
        }
        // else if (current.lecture.type == LectureType.QUIZ) {
        //   let lecture = current.lecture;
        //   this.currentTitle = this.isArabic ? lecture.titleLocal.AR : lecture.titleLocal.EN;
        //   this.createComponent(QuizComponent);
        //   (<QuizComponent>this.currentComponent.instance).quiz = lecture;
        // }
      }
    });
    this.subscriptions.push(sub);
  }

  private createComponent(component: Type<any>): ComponentRef<any> {
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.currentComponent = this.componentContainer.createComponent(componentFactory);
    return this.currentComponent;
  }

  private openInModal(stuff, component) {
    if (this.currentComponent) {
      if (this.currentComponent.componentType.name == 'VideoComponent') {
        let videoPlayer = (<VideoComponent>this.currentComponent.instance).videoPlayer;
        if (videoPlayer) {
          videoPlayer.pause();
        }
      }
    }
    this.componentsControlsService.openModal(stuff, component);

  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => {
      subscription.unsubscribe();
    });
    if (this.currentComponent)
      this.currentComponent.destroy();
  }

  private setUserProgress(stuff: IStuff, userId: number) {
    this.courseViewerDataService.setUserProgress({
      userId: userId,
      courseId: stuff.courseId,
      learningObjectiveChildId: stuff.id,
      videosCount: 14,
    }).then(success => {
      stuff.setFinished(true);
    })
  }

}
