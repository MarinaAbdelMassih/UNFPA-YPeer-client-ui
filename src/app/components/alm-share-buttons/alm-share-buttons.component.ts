import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogService} from '../../shared/services/custom-dialogs/dialog.service';

@Component({
  selector: 'app-share-buttons',
  templateUrl: './alm-share-buttons.component.html',
  styleUrls: ['./alm-share-buttons.component.scss']
})
export class AlmShareButtonsComponent implements OnInit {

  url?: string;
  courseName?: string;
  icons: string[] = ['linkedin', 'facebook', 'twitter', 'messenger', 'whatsapp', 'email'];

  constructor(private dialogService: DialogService,
              @Inject(MAT_DIALOG_DATA) private shareData: { url: string, courseName: string, sharingSource: string },
              ) {
  }

  ngOnInit(): void {
    this.url = this.shareData.url;
    this.courseName = this.shareData.courseName;
  }

  closeDialog() {
    this.dialogService.closeDialog('alm-share');
  }

  shareCourse(socialMediaName: string) {
    console.log(socialMediaName);
    switch (socialMediaName) {
      case 'linkedin' :
        this.openLink('https://www.linkedin.com/shareArticle?', [
          ['url', this.url],
          ['title', 'title'],
          ['description', 'here is my certificate of completion at Y-Peer']
        ]);
        break;
      case 'facebook' :
        this.openLink('https://www.facebook.com/sharer/sharer.php?', [
          ['u', this.url]
        ]);
        break;
      case 'twitter' :
        this.openLink('https://twitter.com/intent/tweet?', [
          ['url', this.url],
          ['description', 'here is my certificate of completion at Y-Peer'],
          ['tags', 'My_Certificate'],
          ['via', 'UnfpaEgypt']
        ]);
        break;
      case 'messenger' :
        this.openLink('fb-messenger://share/?', [
          ['url', this.url]
        ]);
        break;
      case 'whatsapp' :
        this.openLink('https://web.whatsapp.com/send?', [
          ['text', this.url]
        ]);
        break;
      case 'email' :
        this.openLink('mailto:?', [
          ['subject', 'here is my certificate of completion at Y-Peer'],
          ['body', this.url]
        ]);
        break;
    }
  }

  openLink(url, queryArray) {
    const queryString = queryArray.map(query => {
      return `${query[0]}=${query[1]}`;
    }).join('&');
    window.open(encodeURI(url + queryString), '_blank');
  }
}
