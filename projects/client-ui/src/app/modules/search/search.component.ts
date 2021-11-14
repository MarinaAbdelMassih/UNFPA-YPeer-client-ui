import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../../../../../../src/app/shared/services/search.service";
import {searchContent, searchListItem, SearchModel} from "../../../../../../src/app/shared/models/search.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  tags = [{id: 1, name: {EN: 'productive health', AR: 'صحة منتجة'}}, {id: 2, name: {EN: 'productive', AR: ' منتجة'}}];
  pageNumbers: number[] = [];
  currentPage = 1;
  @Output() PageNumber = new EventEmitter<number>();
  searchResults: searchContent;
  resultList: searchListItem[];
  searchWord: '';
  searchType: '';
  allResultData: searchListItem[] = [];
  searchLimit = 3;

  constructor(private route:ActivatedRoute, private searchService: SearchService) {
    for (let i = 1; i < 5; i++) {
      this.pageNumbers.push(i);
    }
  }

  ngOnInit() {
  }

  changeNumber(index): void {
    this.currentPage = index;
    this.PageNumber.emit(this.currentPage);
    console.log('page no', this.currentPage);
  }

  first(): void {
    this.changeNumber(this.currentPage);
  }

  last(): void {
    this.changeNumber(this.pageNumbers.length);
  }

  next(): void {
    this.changeNumber(this.currentPage + 1);
  }

  prev(): void {
    this.changeNumber(this.currentPage - 1);
  }

  loadMoreResults() {
    let maxLength = this.resultList.length + this.searchLimit;
    for (let i = this.resultList.length; (i < this.allResultData.length && i < maxLength); i++) {
      this.resultList.push(this.allResultData[i])
    }
      }

  search(searchData?, initial?: boolean) {
    this.resultList = []; this.allResultData = [];
    searchData? this.searchWord = searchData.searchWord : null;
    searchData? this.searchType = searchData.searchType : null;
      this.searchService.getSearchData(this.searchWord, 0, 100)
        .then(data => {
          this.searchResults = new SearchModel(data);
          for (let i =0; i < this.searchResults.searchItems.length; i++) {
            if (this.searchResults.searchItems[i]) {
              this.searchService.getImageById(this.searchResults.searchItems[i].imageId).then((data: any) => this.searchResults.searchItems[i].imageId = data.fields.file.url);
              if (this.searchType == null || this.searchType == '') {
                this.allResultData.push(this.searchResults.searchItems[i]);
                if (this.resultList.length < this.searchLimit)
                  this.resultList.push(this.searchResults.searchItems[i]);
              }
              else if (this.searchType == this.searchResults.searchItems[i].type) {
                this.allResultData.push(this.searchResults.searchItems[i]);
                if(this.resultList.length < this.searchLimit)
                  this.resultList.push(this.searchResults.searchItems[i]);
              }
            }
          }
          console.log(this.allResultData);
          console.log(this.resultList)
        });
  }

}
