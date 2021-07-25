import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslationModel} from '../../models/translation.model';

@Component({
  selector: 'app-might-like-item',
  templateUrl: './might-like-item.component.html',
  styleUrls: ['./might-like-item.component.scss']
})
export class MightLikeItemComponent implements OnInit {
  @Input() imageSrc: string;
  @Input() type: TranslationModel;
  @Input() title: TranslationModel;
  @Input() description: TranslationModel;
  @Input() buttonAppear = false;
  @Input() resources = false;
  @Output() moreClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  clickMore(): void {
    this.moreClicked.emit(this.type.EN);
  }

}
