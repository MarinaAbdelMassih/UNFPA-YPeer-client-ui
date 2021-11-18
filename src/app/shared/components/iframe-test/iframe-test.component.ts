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
    const IframeUrl = 'https://learn.learningcurvecloud.com/CoursePlayer/WebRedirection';
    // tslint:disable-next-line:max-line-length
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZCN0FDQzUyMDMwNUJGREI0RjcyNTJEQUVCMjE3N0NDMDkxRkFBRTFSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJuYmYiOjE2MzcyMjI2MTUsImV4cCI6MTYzNzIyNjIxNSwiaXNzIjoiaHR0cHM6Ly9sZWFybi5sZWFybmluZ2N1cnZlY2xvdWQuY29tL2lkZW50aXR5Iiwic3ViIjoiZTU1NjUwYWUtODRkOS00ZTNiLTk1ZWItNzY3MDdkZmEzZmVkIiwibmFtZSI6Im9zYW1hLm1hcnpvdXFAYWxtZW50b3IubmV0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoib3NhbWEubWFyem91cUBhbG1lbnRvci5uZXQiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IjZQUEdBREk2UDJVTU1FSlZCNjNGSlVWNUtJSTQ3NVZLIiwicHJlZmVycmVkX3VzZXJuYW1lIjoib3NhbWEubWFyem91cUBhbG1lbnRvci5uZXQiLCJpZHAiOiJsb2NhbCIsImNsaWVudF9pZCI6IklidGlrYXIiLCJhdWQiOiJ3aW5qaWdvIiwic2NvcGUiOlsiVXNlci5HZW5lcmF0ZVRva2VuIiwid2luamlnbyJdfQ.elyg-wTTQNH8kadpnYTInwJNZuU7Ai6OrGNUVOhFNq1yFRlr5O20oXIV-o31cR43pjYKud5-5iHYvXqghnyyMLWP8u09U-BdVbKAP_tM653ffot_pSdr2E03sfrarQsZQsFWuv01apRG2WM7fTil5sfkio0uCevgefE7qJLpdLVvPFWQgS67bggeOzX4hRjfo_0bgqAcubZEuC8Qh0Vn3bkGYvhxM3IinQkNeISouoDofHjk4vJTT7Peb4GiBoQH-JHhZaozOxKK7cd-teLK1BXkKYIocRtq7pJ1kx6-pSu-oI7pIipZG9P1QjKBDZq51KnCFxt6BwqdMcsbmaoPVQ';
    const courseRoundId = 3361;
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${IframeUrl}?courseRoundId=${courseRoundId}&token=${token}`);
  }

}
