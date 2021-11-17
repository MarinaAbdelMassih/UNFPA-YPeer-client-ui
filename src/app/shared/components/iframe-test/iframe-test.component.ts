import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-iframe-test',
  templateUrl: './iframe-test.component.html',
  styleUrls: ['./iframe-test.component.scss']
})
export class IframeTestComponent implements OnInit {
  iframeData: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.loadIframe();
  }

  private loadIframe() {
    this.httpClient.get('https://learn.learningcurvecloud.com/CoursePlayer/WebRedirection', {
      params: new HttpParams({fromObject : {
          courseRoundId: '3361',
          // tslint:disable-next-line:max-line-length
          token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZCN0FDQzUyMDMwNUJGREI0RjcyNTJEQUVCMjE3N0NDMDkxRkFBRTFSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJuYmYiOjE2MzcxNTMxOTEsImV4cCI6MTYzNzE1Njc5MSwiaXNzIjoiaHR0cHM6Ly9sZWFybi5sZWFybmluZ2N1cnZlY2xvdWQuY29tL2lkZW50aXR5Iiwic3ViIjoiZTU1NjUwYWUtODRkOS00ZTNiLTk1ZWItNzY3MDdkZmEzZmVkIiwibmFtZSI6Im9zYW1hLm1hcnpvdXFAYWxtZW50b3IubmV0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoib3NhbWEubWFyem91cUBhbG1lbnRvci5uZXQiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IjZQUEdBREk2UDJVTU1FSlZCNjNGSlVWNUtJSTQ3NVZLIiwicHJlZmVycmVkX3VzZXJuYW1lIjoib3NhbWEubWFyem91cUBhbG1lbnRvci5uZXQiLCJpZHAiOiJsb2NhbCIsImNsaWVudF9pZCI6IklidGlrYXIiLCJhdWQiOiJ3aW5qaWdvIiwic2NvcGUiOlsiVXNlci5HZW5lcmF0ZVRva2VuIiwid2luamlnbyJdfQ.KjXU6qHzyYXEFJgN5xVzYZjmHOOXzmGqcl6PDSo-TDfIElWd-hlrzad9zqYPPHg15WsQbER80Z6n5KV2RRFtb6234wbH8l9Igx0X05hhG4X_kuq_Lmje1bogRdAAIYtQeyjdioU3LzyZJZzbw1S8Wr48vNhRufXh3mGZPWz1GqyfDD67rayK0lh0cxjPx3LHbN0H4s1Q7BrfA2O6NAqP3K89-DNAPDDdCI8yaGpANy7m7XmE--L6q34lCoMY4A_Ev5gvrM_DzimCMJeJeEo4Tr0HSgQT0cs4qlebhC5kW5nL2fu813c0MqcLpBZ29aQlyJZq05lFqFem-DyMxFPYBg'
        }})
      }).subscribe((res: string) => {
      // this.iframeData = res;
      console.log(res);
    });
  }
}
