import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {
  @Input() hideToggle: boolean;
  @Input() title: string;
  @Input() count: number;
  @Input() yearsList: [];

  constructor() { }

  ngOnInit() {
    console.log(this.yearsList)
  }

}
