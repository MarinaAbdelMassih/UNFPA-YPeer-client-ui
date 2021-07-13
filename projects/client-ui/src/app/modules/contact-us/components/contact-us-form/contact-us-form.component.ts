import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {
  options = [{value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}];
  titles = [
    {name: 'Dog', sound: 'Dog!'},
    {name: 'Cat', sound: 'Cat!'},
    {name: 'Cow', sound: 'Cow!'},
    {name: 'Fox', sound: 'Fox!'},
  ];
  contactForm: FormGroup;
  emailPattern = '^([a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$';


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.submitContactForm();
    this.contactForm = this.fb.group({
      titles: ['', [Validators.required]],
      fName: ['', [Validators.required, Validators.maxLength(10)]],
      lName: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      subject: ['', [Validators.required, Validators.maxLength(25)]],
      options: ['', [Validators.required]],
      massage: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  submitContactForm() {
    console.log('value', this.contactForm);
  }

  changeOption(e) {
    console.log(e.target.value);
  }
}
