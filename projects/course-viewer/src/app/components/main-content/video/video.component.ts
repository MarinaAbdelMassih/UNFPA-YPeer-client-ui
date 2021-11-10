import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IStuff} from "../../../../../../../src/app/shared/models/course-viewer/stuff.model";
import {Subscription} from "rxjs";
import {CourseViewerDataService} from "../../../../../../../src/app/shared/services/course-viewer/course-viewer-data.service";
import {SideComponentsControlsService} from "../../../../../../../src/app/shared/services/course-viewer/side-components-controls.service";
import {Router} from "@angular/router";
import {CurriculumControlService} from "../../../../../../../src/app/shared/services/course-viewer/curriculum-control.service";
import {VideoInit} from "./videoInit";
import brightcovePlayerLoader from '@brightcove/player-loader';
import {environment} from "../../../../../../../src/environments/environment";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() video: IStuff;
  @Input() userId: number;
  @Input() videosCount: number;
  @Input() subjectId: number;
  videoPlayer;
  private currentTime: number = 0;
  private subscriptions: Set<Subscription> = new Set<Subscription>();
  @Output() userProgress: EventEmitter<number> = new EventEmitter();

  constructor(private curriculumControl: CurriculumControlService, private router: Router,
              private courseViewerDataService: CourseViewerDataService, private sideControleService: SideComponentsControlsService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
    if (this.videoPlayer) {
      //this.courseViewerDataService.bookmarks.next(null);
      this.courseViewerDataService.videoPlayer.next(null);
      // this.videoPlayer.bookmarks.reset([]);
      this.videoPlayer.dispose();
      brightcovePlayerLoader.reset();
    }
  }

  ngAfterViewInit(): void {
    //@ts-ignore
    this.currentTime = this.video.finished ? 0 : this.video.videoPosition;
    //@ts-ignore
    if (this.video.localProgress > this.video.videoPosition) {
      //@ts-ignore
      this.currentTime = this.video.finished ? 0 : this.video.localProgress;
    }

    VideoInit.initBrightCove('#video-player').then(bc => {
      this.videoPlayer = bc.ref;
      //@ts-ignore
      this.courseViewerDataService.getDRMVideoObject(this.video.link).then((videoObject) => {
        this.videoPlayer.catalog.load(this.videoPlayer.catalog.transformVideoResponse(videoObject));
        this.courseViewerDataService.videoPlayer.next(this.videoPlayer);
        //@ts-ignore
        let videoJS = window.videojs;
        // videoJS.registerPlugin('bookmarks', BookmarksPlugin);
        //@ts-ignore
        if (environment.disableSeeking && !this.video.finished) {
          VideoInit.disableSeeking(videoJS, this.video);
        }
        VideoInit.initPlayer(this.videoPlayer, this.currentTime);
        // let bookmarksButton = VideoInit.initBookmarks(this.videoPlayer, videoJS, this.bookmarks);
        // bookmarksButton.on('click', () => {
        //     this.addBookmark()
        // });
        // bookmarksButton.on('touchend', () => {
        //     this.addBookmark()
        // });

        // this.ngxService.stop('course-viewer-loading');
        // this.ngxService.stop('init-course-viewer');
        // this.courseViewerDataService.getBookmarks(this.video.id).then((bookmarks: IBookmark[]) => {
        //     this.bookmarks = bookmarks;
        //     this.ngxService.stop('course-viewer-loading');
        //     this.ngxService.stop('init-course-viewer');
        //     this.videoPlayer.on('loadedmetadata', () => {
        //         let bookmarksSub2 = this.courseViewerDataService.bookmarks.subscribe((data: IBookmark[]) => {
        //             this.bookmarks = data;
        //             this.videoPlayer.bookmarks.reset(this.bookmarks);
        //         });
        //         this.subscriptions.add(bookmarksSub2);
        //     });
        // });
        // let bookmarksSub1 = this.courseViewerDataService.bookmarks.subscribe((data: IBookmark[]) => {
        //     this.bookmarks = data;
        //     this.videoPlayer.bookmarks.reset(this.bookmarks);
        // });
        // this.subscriptions.add(bookmarksSub1);
        this.setVideoProgress(this.userId, this.videosCount);
      });
    });
  }

  private initFinishEvent(userId: number, videosCount: number) {
    this.courseViewerDataService.setUserProgress({
      userId: userId,
      courseId: this.video.courseId,
      learningObjectiveChildId: this.video.id,
      videosCount: videosCount,
    }).then((data) => {
      //@ts-ignore
      this.video.setFinished(true);
      //@ts-ignore
      this.video.setLocalProgress(0);
      this.userProgress.emit(data.totalProgress)
    });
  }

  private setVideoProgress(userId: number, videosCount:number) {
    let finished = false;
    this.videoPlayer.on('timeupdate', (e) => {
      if ((this.videoPlayer.duration() - this.videoPlayer.currentTime()) <= 10 && !finished) {
        finished = true;
        this.initFinishEvent(userId, videosCount);
      }
      if (this.videoPlayer.duration() == this.videoPlayer.currentTime()) {
        if (this.curriculumControl.isNext()) {
          this.curriculumControl.next();
        } else {
          //    this.router.navigate([this.subjectId ? '/subject-details/' + this.subjectId : '/home']);
        }
      }
      // this.sendVideoProgress();
    });
  }

  private sendVideoProgress() {
    //@ts-ignore
    if ((this.videoPlayer.currentTime() - this.video.localProgress) > 15) {
      //@ts-ignore
      this.video.setLocalProgress(this.videoPlayer.currentTime());
    }
    if ((this.videoPlayer.currentTime() - this.currentTime) > 15 || this.videoPlayer.currentTime() < this.currentTime) {
      this.currentTime = this.videoPlayer.currentTime();
      let videoPosition = {stuffId: this.video.id, time: this.currentTime};
      this.courseViewerDataService.setVideoPosition(videoPosition);
    }
  }

}
