import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-iframe-test',
  templateUrl: './iframe-test.component.html',
  styleUrls: ['./iframe-test.component.scss']
})
export class IframeTestComponent implements OnInit {
  iframeData: string;
  token: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // this.getToken();
    this.loadIframe();
  }

  private loadIframe() {
    this.httpClient.get('https://learn.learningcurvecloud.com/CoursePlayer/WebRedirection', {
      params: new HttpParams({fromObject : {
          courseRoundId: '3361',
          // tslint:disable-next-line:max-line-length
          token: 'yJhbGciOiJSUzI1NiIsImtpZCI6IjZCN0FDQzUyMDMwNUJGREI0RjcyNTJEQUVCMjE3N0NDMDkxRkFBRTFSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJuYmYiOjE2MzcxNTUxMjYsImV4cCI6MTYzNzE1ODcyNiwiaXNzIjoiaHR0cHM6Ly9sZWFybi5sZWFybmluZ2N1cnZlY2xvdWQuY29tL2lkZW50aXR5Iiwic3ViIjoiZTU1NjUwYWUtODRkOS00ZTNiLTk1ZWItNzY3MDdkZmEzZmVkIiwibmFtZSI6Im9zYW1hLm1hcnpvdXFAYWxtZW50b3IubmV0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoib3NhbWEubWFyem91cUBhbG1lbnRvci5uZXQiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IjZQUEdBREk2UDJVTU1FSlZCNjNGSlVWNUtJSTQ3NVZLIiwicHJlZmVycmVkX3VzZXJuYW1lIjoib3NhbWEubWFyem91cUBhbG1lbnRvci5uZXQiLCJpZHAiOiJsb2NhbCIsImNsaWVudF9pZCI6IklidGlrYXIiLCJhdWQiOiJ3aW5qaWdvIiwic2NvcGUiOlsiVXNlci5HZW5lcmF0ZVRva2VuIiwid2luamlnbyJdfQ.p05rkHkZEJlPtIWqkhfef4RgUTaSENtwm26nj2Hsmn9RUDz3_0QVsy23Tv88OWt9Y0XhES8Rg8xkbqsdpVJeJy-V8F0mh1mBIPDULwPn5qYR9a5K35y2iW2zpnT01XragMwN80q4h48XNsWu6zy_pEWVHvgJsQD2yjr7vHU6APT_QG3-xI2nUzzpJHIS3U-VGvKoXJwS3nEGL3AGCSTNmB0_cLZSFO5d4mE2k7SCChB8qMt8ddmwjuI76J0uNnq8KsyplItc8AARgevxLAPRs-G5zDjc-EToXU6vT9NKbDrnw_HO16nB7EjXpa3Pi7TxuI3S256DYBbZoSFY-eV0Wg'
        }})
      }).subscribe((res: string) => {
      console.log(res);
    }, (error) => {
      console.log(error);
      this.iframeData = 'https://learn.learningcurvecloud.com/CoursePlayer?courseRoundId=3361';
    });
  }

  private getToken() {
    // tslint:disable-next-line:max-line-length
    this.httpClient.post('https://learn.learningcurvecloud.com/api/external/v1/users/generatetoken?email=osama.marzouq@almentor.net', null, {
      headers:  new HttpHeaders({
        // tslint:disable-next-line:max-line-length
        Authorization : 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZCN0FDQzUyMDMwNUJGREI0RjcyNTJEQUVCMjE3N0NDMDkxRkFBRTFSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJuYmYiOjE2MzcxNTA1MTgsImV4cCI6MTYzOTc3ODUxOCwiaXNzIjoiaHR0cHM6Ly9sZWFybi5sZWFybmluZ2N1cnZlY2xvdWQuY29tL2lkZW50aXR5IiwiYXVkIjoid2luamlnbyIsImNsaWVudF9pZCI6IkFsTWVudG9yWVBlZXIiLCJzdWIiOiIwNTU2MTk4NS1kODIzLTRiODQtYjliMi1kNzAyNjkzYzVmZjQiLCJhdXRoX3RpbWUiOjE2MzcxNTA1MTgsImlkcCI6ImxvY2FsIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiWVBFRVItVU5GUEEuYWRtaW5AYWRtaW4uY29tIiwianRpIjoiNTA4MDUwMDlENzJCMDE4MzI2OTI2Rjc4N0ExQzM2NzAiLCJpYXQiOjE2MzcxNTA1MTgsInNjb3BlIjpbImVtYWlsIiwib3BlbmlkIiwicHJvZmlsZSIsIlVzZXIuR2VuZXJhdGVUb2tlbiIsIndpbmppZ28iLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.kvTbw25MNPBjp7UqUXgRuKZknTOaC48LjdIBuRlxAY6Bg6SORHY6Lip4tMmkLf_TybK-gPEgToeXeiK4GHET2hXSIR80L5qyGn8gyLMsrnYiRQKWlbFsUKMUY5FpB1akzkYY3IdMTY-vpw3_RNIIJQqjU6YtWjyqcnbiB9184uj_inYo85YLiNocgs44Yygn4nw9b9kezmx4bVrl-rsR2yclg9v28uSgy96ohvPMK9Pjh68EXYTShDCKyJZ5Yr-k7IwAeYoMuFIdPRU0GjhLIFcj40NDJTDPaON9gWSHvKb5Bg8klir5Dxhlgtixxy9EDFhKp7pZ8hgFI6FqjiQhnQ'
      })
    }).subscribe(res => {
      console.log(res);
    });
  }
}
