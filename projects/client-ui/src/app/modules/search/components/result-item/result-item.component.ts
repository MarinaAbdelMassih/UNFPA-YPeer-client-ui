import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {SearchService} from "../../../../../../../../src/app/shared/services/search.service";
import {searchContent, searchListItem} from "../../../../../../../../src/app/shared/models/search.model";

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit, AfterViewInit {
  // @Input() type: string;
  // @Input() title: string;
  // @Input() description: string;
  @Input() details: searchListItem[] = [];
  @Input() tagsList;
  @Input() start?;
  @Input() end?;
  images = [];

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getImage();
  }

  getImage() {
    console.log(this.details)
    for (let i =0; i<this.details.length; i++) {
      if(this.details[i]) {
        this.searchService.getImageById(this.details[i].imageId).then((data: any) => this.details[i].imageId = data.fields.file.url);
      }
    }
    console.log(this.details)
  }

}
