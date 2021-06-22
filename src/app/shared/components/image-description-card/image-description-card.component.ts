import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslationModel} from '../../models/translation.model';

@Component({
  selector: 'app-image-description-card',
  templateUrl: './image-description-card.component.html',
  styleUrls: ['./image-description-card.component.scss']
})
export class ImageDescriptionCardComponent implements OnInit {
  @Input() imageSrc: string;
  @Input() type: TranslationModel;
  @Input() title: TranslationModel;
  @Input() date: TranslationModel;
  @Input() description: TranslationModel;
  @Output() moreClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clickMore(): void {
    this.moreClicked.emit(this.type.EN);
  }

}
