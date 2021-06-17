import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {

  @ViewChild('bannersSlick', {static: false}) slickModal;
  bannerConfig: any = {"slidesToShow": 1, "rtl": false, "slidesToScroll": 1,"arrows": false, "fade": true,
    "cssEase": 'linear', "dots": false,"autoplay": false, "autoplaySpeed": 2000};

  latestSections = [
    {
      imgSrc: 'assets/images/latest-1.png',
      type: {en: 'Events', ar: 'ألأحداث'},
      title: {en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', ar: 'ورشة تثقيف الأقران حول قضايا السكان والصحة الإنجابية'},
      date: {en: 'Jan 12, 2021', ar: 'يناير 12، 2021'},
      description: {en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...', ar: 'يهدف معسكر مساحتنا الآمنة لدمج الشباب من خلال شبكة تثقيف الأقران مصر لرفع الوعي عن قضايا العنف المبني على النوع الإجتماعي خاصة التحرش الجنسي بم يخدم الأوضاع الإنسانية بم...'}
    },
    {
      imgSrc: 'assets/images/latest-2.png',
      type: {en: 'News', ar: 'الأخبار'},
      title: {en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', ar: 'إجتماع المجلس التشاوري الوطني السابع'},
      date: {en: 'Jan 12, 2021', ar: 'يناير 12، 2021'},
      description: {en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...', ar: 'اقيم اجتماع المجلس التشاوري الوطني السابع بمركز تثقيف الاقران للابداع و تنمية المهارات – جامعة اسيوط علي مدار يومي20 و 21 يونيه 2018 و ذلك لمناقشة الخطة الوطنية، و تعديل...'}
    },
    {
      imgSrc: 'assets/images/latest-3.png',
      type: {en: 'Events', ar: 'ألأحداث'},
      title: {en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', ar: 'معسكر مساحتنا الآمنة'},
      date: {en: 'Jan 12, 2021', ar: 'يناير 12، 2021'},
      description: {en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...', ar: 'الورشة العملية لتثقيف الأقران حول قضايا السكان والصحة الإنجابية لعدد (20) طالب من جامعة أسيوط في الفترة (26-28) ديسمبر 2017'}
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openDetailsPage(): void {
    this.router.navigate(['']);
  }

  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }
}


