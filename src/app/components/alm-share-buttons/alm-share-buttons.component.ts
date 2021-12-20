import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogService} from '../../shared/services/custom-dialogs/dialog.service';
import {UAParser} from "ua-parser-js";

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
          ['description', `Certificate of completion: ${this.courseName} at Y-Peer`]
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
          ['description', `Certificate of completion: ${this.courseName} at Y-Peer`],
          ['via', 'YPEER_EGYPT']
        ]);
        break;
      case 'messenger' :
        this.openLink('fb-messenger://share/?', [
          ['link', this.url]
        ]);
        break;
      case 'whatsapp' :
        let url = 'https://web.whatsapp.com/send?';
        const os = new UAParser().getOS();
        if (os.name && os.name.toLowerCase() === 'android') {
          url = 'whatsapp://send?';
        } else if (os.name && os.name.toLowerCase() === 'ios') {
          url = 'https://api.whatsapp.com/send?';
        }
        this.openLink(url, [
          ['text', this.url]
        ]);
        break;
      case 'email' :
        this.openLink('mailto:?', [
          ['subject', `Certificate of completion: ${this.courseName} at Y-Peer`],
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
