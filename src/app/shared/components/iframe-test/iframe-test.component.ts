import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-test',
  templateUrl: './iframe-test.component.html',
  styleUrls: ['./iframe-test.component.scss']
})
export class IframeTestComponent implements OnInit {
  iframeData: SafeResourceUrl;
  token: string;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  safeURL() {
    // tslint:disable-next-line:max-line-length
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://learn.learningcurvecloud.com/CoursePlayer/WebRedirection?courseRoundId=3361&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjZCN0FDQzUyMDMwNUJGREI0RjcyNTJEQUVCMjE3N0NDMDkxRkFBRTFSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJuYmYiOjE2MzcxNjE1NDcsImV4cCI6MTYzNzE2NTE0NywiaXNzIjoiaHR0cHM6Ly9sZWFybi5sZWFybmluZ2N1cnZlY2xvdWQuY29tL2lkZW50aXR5Iiwic3ViIjoiZTU1NjUwYWUtODRkOS00ZTNiLTk1ZWItNzY3MDdkZmEzZmVkIiwibmFtZSI6Im9zYW1hLm1hcnpvdXFAYWxtZW50b3IubmV0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoib3NhbWEubWFyem91cUBhbG1lbnRvci5uZXQiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IjZQUEdBREk2UDJVTU1FSlZCNjNGSlVWNUtJSTQ3NVZLIiwicHJlZmVycmVkX3VzZXJuYW1lIjoib3NhbWEubWFyem91cUBhbG1lbnRvci5uZXQiLCJpZHAiOiJsb2NhbCIsImNsaWVudF9pZCI6IklidGlrYXIiLCJhdWQiOiJ3aW5qaWdvIiwic2NvcGUiOlsiVXNlci5HZW5lcmF0ZVRva2VuIiwid2luamlnbyJdfQ.G837R7swPYlY7cZAzdKcAfcqgdUiEPcmeSbmhP87xVtino2GiImWLIca9eSfd3KS4clel4H95S6uA4KhH-SmVVIsM9YSm9KifVBQo4u9qMC0h8-GvaUmn2HubUDeszgetJhuSt65r6AFoYvlziGD4LfcTMYnLb9yKAw8QlBi8YiL_3FYQCPBbN5hXN3U7BtPV91I2VaHBwv5VlHoKGpauNfA2NpWGM-Odz21LHOAuWO4M0xlqEOPtsUYyRz0qEHg2mR2lZvJALc4ZyUtRMJjUqX5i65rNbBwEZOWU32C5NFkl4ByJpOaNXsijyVDgD4bqX8CN1WCw7ogFHd05WXrxA');
  }

}
