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
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZCN0FDQzUyMDMwNUJGREI0RjcyNTJEQUVCMjE3N0NDMDkxRkFBRTFSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJuYmYiOjE2MzcyMjcyNTYsImV4cCI6MTYzNzIzMDg1NiwiaXNzIjoiaHR0cHM6Ly9sZWFybi5sZWFybmluZ2N1cnZlY2xvdWQuY29tL2lkZW50aXR5Iiwic3ViIjoiZTU1NjUwYWUtODRkOS00ZTNiLTk1ZWItNzY3MDdkZmEzZmVkIiwibmFtZSI6Im9zYW1hLm1hcnpvdXFAYWxtZW50b3IubmV0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoib3NhbWEubWFyem91cUBhbG1lbnRvci5uZXQiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IjZQUEdBREk2UDJVTU1FSlZCNjNGSlVWNUtJSTQ3NVZLIiwicHJlZmVycmVkX3VzZXJuYW1lIjoib3NhbWEubWFyem91cUBhbG1lbnRvci5uZXQiLCJpZHAiOiJsb2NhbCIsImNsaWVudF9pZCI6IklidGlrYXIiLCJhdWQiOiJ3aW5qaWdvIiwic2NvcGUiOlsiVXNlci5HZW5lcmF0ZVRva2VuIiwid2luamlnbyJdfQ.YI5TmNOYEmBZ3KZjLaLKmXz8M71IjCO3PXLWtlmV4rWBfARjmwtsVN5JJKLKklq8yV4QZ8w2BtogGwNFedRD_ED1VdqgRkjENZVWZnbK5c0wFBY-PNZIxfH70uC9J84lRUPpWWP6MOQ9-EchowrO9wRLZ8kbx3froRwo75lepUD-zgQZo-SfsugYmnCOLtemAsselWnp_6as8vWUk5xwTrMgJUwgBRVXVTe9RzrXC5Vc5QvaXgm4ycJSLiMWfYpOsEP0aMzoyyKsOKs042Uu3RJQh9okEECLFcuQW_q00ctobmFxawWil7EFzDMeJBMf0rUB5b4xxUjZRjObVZptNw';
    const courseRoundId = 3361;
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${IframeUrl}?courseRoundId=${courseRoundId}&token=${token}`);
  }

}
