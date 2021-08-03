import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';
import {ActivatedRoute} from '@angular/router';
import {eventsContent, eventsDetailsItem, eventsListItem} from '../../../../../../src/app/shared/models/events.model';
import {EventsResolverService} from '../../../../../../src/app/shared/services/events-resolver.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  cardDetails = [
    {
      description: {
        EN: 'Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...',
        AR: ''
      },
      img: 'assets/images/might-like.png',
      title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      type: {EN: 'Events', AR: ''},
    },
    {
      description: {
        EN: 'Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis...',
        AR: ''
      },
      img: 'assets/images/might-like.png',
      title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      type: {EN: 'Events', AR: ''},
    },
    {
      description: {
        EN: 'Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis...',
        AR: ''
      },
      img: 'assets/images/might-like.png',
      title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      type: {EN: 'Events', AR: ''},
    },
    {
      description: {
        EN: 'Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis...',
        AR: ''
      },
      img: 'assets/images/might-like.png',
      title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      type: {EN: 'Events', AR: ''},
    }
  ];
  categoriesList: CategoryModel[] = [
    {title: {EN: 'News', AR: 'الأخبار'}, count: 50, hideToggle: true},
    {title: {EN: 'Events', AR: 'الأحداث'}, count: 23, hideToggle: true},
    {title: {EN: 'Stories', AR: 'القصص'}, count: 18, hideToggle: true},
    {
      title: {EN: 'Year', AR: 'السنه'}, hideToggle: false, yearsList: [
        {year: 2018, selected: false},
        {year: 2019, selected: false},
        {year: 2020, selected: false},
        {year: 2021, selected: false},
        {year: 2022, selected: false}
      ]
    },
  ];
  tagsList = [
    {id: 1, name: {EN: 'productive health', AR: 'صحة منتجة'}},
    {id: 2, name: {EN: 'sexual health', AR: 'الصحة الجنسية'}},
    {id: 3, name: {EN: 'maternal health', AR: 'الصحه الذهنيه'}},
    {id: 4, name: {EN: 'gender-based violence', AR: 'العنف القائم على النوع الاجتماعي'}},
    {id: 5, name: {EN: 'family planning', AR: 'خطة العائلة'}},
  ];
  eventLatest = [
    {
      eventDescription: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      eventDate: {EN: 'Jan 12, 2021', AR: ''},
      eventImage: 'assets/images/might-like.png'
    },
    {
      eventDescription: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      eventDate: {EN: 'Jan 12, 2021', AR: ''},
      eventImage: 'assets/images/might-like.png'
    },
    {
      eventDescription: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      eventDate: {EN: 'Jan 12, 2021', AR: ''},
      eventImage: 'assets/images/might-like.png'
    }
  ];
  eventPhotos = ['assets/images/events-details-photos.png', 'assets/images/events-details-photos.png', 'assets/images/events-details-photos.png', 'assets/images/events-details-photos.png'];
  index;
  eventsDetailsData: eventsDetailsItem;
  eventsBasicData: eventsListItem;

  constructor(private eventsResolverService: EventsResolverService, public activatedRoute: ActivatedRoute) {
    this.index = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getEventsData();
    this.getEventsDetailsData();
  }

  getEventsData(): void {
    let eventsSub = this.eventsResolverService.resolve().subscribe((eventsData: eventsContent) => {
      this.eventsBasicData = eventsData.eventsList[(this.index-1)];
    });
    this.subscriptions.push(eventsSub);
  }

  getEventsDetailsData(): void {
    let eventsSub = this.eventsResolverService.getPageDetails(this.index).subscribe((eventsData: eventsContent) => {
      this.eventsDetailsData = undefined;
      setTimeout(() => {
        this.eventsDetailsData = eventsData.eventsDetailsItem[0];
        console.log(this.eventsDetailsData);
      }, 200);
    });
    this.subscriptions.push(eventsSub);
  }
}
