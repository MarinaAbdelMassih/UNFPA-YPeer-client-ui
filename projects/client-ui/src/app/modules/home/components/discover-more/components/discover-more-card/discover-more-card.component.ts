import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-discover-more-card',
  templateUrl: './discover-more-card.component.html',
  styleUrls: ['./discover-more-card.component.scss']
})
export class DiscoverMoreCardComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
