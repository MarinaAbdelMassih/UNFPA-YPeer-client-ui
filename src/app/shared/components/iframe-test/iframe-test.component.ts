import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

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
          token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZCN0FDQzUyMDMwNUJGREI0RjcyNTJEQUVCMjE3N0NDMDkxRkFBRTFSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJuYmYiOjE2MzcxNDMzNTIsImV4cCI6MTYzNzE0Njk1MiwiaXNzIjoiaHR0cHM6Ly9sZWFybi5sZWFybmluZ2N1cnZlY2xvdWQuY29tL2lkZW50aXR5Iiwic3ViIjoiZTU1NjUwYWUtODRkOS00ZTNiLTk1ZWItNzY3MDdkZmEzZmVkIiwibmFtZSI6Im9zYW1hLm1hcnpvdXFAYWxtZW50b3IubmV0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoib3NhbWEubWFyem91cUBhbG1lbnRvci5uZXQiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IjZQUEdBREk2UDJVTU1FSlZCNjNGSlVWNUtJSTQ3NVZLIiwicHJlZmVycmVkX3VzZXJuYW1lIjoib3NhbWEubWFyem91cUBhbG1lbnRvci5uZXQiLCJpZHAiOiJsb2NhbCIsImNsaWVudF9pZCI6IklidGlrYXIiLCJhdWQiOiJ3aW5qaWdvIiwic2NvcGUiOlsiVXNlci5HZW5lcmF0ZVRva2VuIiwid2luamlnbyJdfQ.FrZTxKp07pIQN8qImrX3APRWAh76MERdOddflnFpiulfetoSn7LAb4u1ky7KU31RnJCfv9T966dtntW85brQhu8jSS0xwQIWveTtRkqLQZIftb1EUg3-wt7B-O16MINGj9ZNOP36-n9BwOBLJcZiVBaiCcr42Zhs5vvHeQf8llAf5FChCu4vjZ5J9UwUJD-_reY08nYVp-5Ckop-Hkk9uGGi2DZUqwSpH3NZe9AXogvkeIooUd0YK0ipD2D2F5SeUiNbkv69NxkB9QZ5ddTf7s4DiHLHeii3KNnTqd4W2dIbh6jz-78a171hDECuXfHmukQ67NWZu4TUmHBetbrilA'
        }})
    }).subscribe((res: string) => {
      this.iframeData = res;
      console.log(res);
    });
  }
}
