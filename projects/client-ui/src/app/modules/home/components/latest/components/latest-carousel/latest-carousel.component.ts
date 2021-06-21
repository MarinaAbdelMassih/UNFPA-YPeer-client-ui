import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-latest-carousel',
  templateUrl: './latest-carousel.component.html',
  styleUrls: ['./latest-carousel.component.scss']
})
export class LatestCarouselComponent implements OnInit {

  @ViewChild('latestSlickModal', {static: false}) slickModal;
  latestConfig: any = {"slidesToShow": 3, "rtl": false, "slidesToScroll": 1,"arrows": false, "fade": false,
    "cssEase": 'linear', "dots": false,"autoplay": false, "autoplaySpeed": 2000, infinite: false,
    "responsive": [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }
    ]};

  latestSections = [
    {
      imgSrc: 'assets/images/latest-1.png',
      type: {en: 'Events1', ar: 'ألأحداث'},
      title: {en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', ar: 'ورشة تثقيف الأقران حول قضايا السكان والصحة الإنجابية'},
      date: {en: 'Jan 12, 2021', ar: 'يناير 12، 2021'},
      description: {en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...', ar: 'يهدف معسكر مساحتنا الآمنة لدمج الشباب من خلال شبكة تثقيف الأقران مصر لرفع الوعي عن قضايا العنف المبني على النوع الإجتماعي خاصة التحرش الجنسي بم يخدم الأوضاع الإنسانية بم...'}
    },
    {
      imgSrc: 'assets/images/latest-2.png',
      type: {en: 'News2', ar: 'الأخبار'},
      title: {en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', ar: 'إجتماع المجلس التشاوري الوطني السابع'},
      date: {en: 'Jan 13, 2021', ar: 'يناير 12، 2021'},
      description: {en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...', ar: 'اقيم اجتماع المجلس التشاوري الوطني السابع بمركز تثقيف الاقران للابداع و تنمية المهارات – جامعة اسيوط علي مدار يومي20 و 21 يونيه 2018 و ذلك لمناقشة الخطة الوطنية، و تعديل...'}
    },
    {
      imgSrc: 'assets/images/latest-3.png',
      type: {en: 'Events3', ar: 'ألأحداث'},
      title: {en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', ar: 'معسكر مساحتنا الآمنة'},
      date: {en: 'Jan 12, 2021', ar: 'يناير 12، 2021'},
      description: {en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...', ar: 'الورشة العملية لتثقيف الأقران حول قضايا السكان والصحة الإنجابية لعدد (20) طالب من جامعة أسيوط في الفترة (26-28) ديسمبر 2017'}
    },
    {
      imgSrc: 'assets/images/latest-3.png',
      type: {en: 'Events4', ar: 'ألأحداث'},
      title: {en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', ar: 'معسكر مساحتنا الآمنة'},
      date: {en: 'Jan 12, 2021', ar: 'يناير 12، 2021'},
      description: {en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...', ar: 'الورشة العملية لتثقيف الأقران حول قضايا السكان والصحة الإنجابية لعدد (20) طالب من جامعة أسيوط في الفترة (26-28) ديسمبر 2017'}
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }

  openDetailsPage(): void {
    this.router.navigate(['']);
  }

}
