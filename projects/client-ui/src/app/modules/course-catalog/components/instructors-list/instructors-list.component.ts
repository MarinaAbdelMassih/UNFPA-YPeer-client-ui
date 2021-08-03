import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';

@Component({
  selector: 'app-instructors-list',
  templateUrl: './instructors-list.component.html',
  styleUrls: ['./instructors-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InstructorsListComponent implements OnInit, AfterViewInit {

  @ViewChild('latestSlickModal', {static: false}) slickModal;
  latestConfig: any = {"slidesToShow": 3, "rtl": false, "slidesToScroll": 1,"arrows": false, "fade": false,
    "cssEase": 'linear', "dots": false,"autoplay": false, "autoplaySpeed": 2000, infinite: false,
    "responsive": [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }
    ]};
  isArabic: boolean = this.languageService.getIsArabic();

  instructorsList = [
    {
      image: 'assets/images/instructor-1.png',
      name: {EN: 'Asmaa Elrosasy', AR: 'أسماء الرصاصى'},
      title: {EN: 'Title', AR: 'عنوان'},
      description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...', AR: 'أسماء الرصاصى'}
    },
    {
      image: 'assets/images/instructor-1.png',
      name: {EN: 'Asmaa Elrosasy', AR: 'أسماء الرصاصى'},
      title: {EN: 'Title', AR: 'عنوان'},
      description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...', AR: 'أسماء الرصاصى'}
    },
    {
      image: 'assets/images/instructor-1.png',
      name: {EN: 'Asmaa Elrosasy', AR: 'أسماء الرصاصى'},
      title: {EN: 'Title', AR: 'عنوان'},
      description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...', AR: 'أسماء الرصاصى'}
    },
    {
      image: 'assets/images/instructor-1.png',
      name: {EN: 'Asmaa Elrosasy', AR: 'أسماء الرصاصى'},
      title: {EN: 'Title', AR: 'عنوان'},
      description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...', AR: 'أسماء الرصاصى'}
    }
    ];

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.reInitSlick();
    this.languageService.isArabic.subscribe(isArabic => {
      this.isArabic = isArabic;
      this.reInitSlick();
    });
  }

  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }

  private reInitSlick(): void {
    if (this.instructorsList) {
      this.slickModal.unslick();
      this.latestConfig.rtl = this.isArabic;
      this.slickModal.initSlick();
    }
  }

}
