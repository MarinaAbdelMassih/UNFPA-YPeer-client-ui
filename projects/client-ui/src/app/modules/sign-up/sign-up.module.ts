import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import {MatInputModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from "@angular/material/datepicker";


@NgModule({
  declarations: [SignUpComponent, SignUpFormComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    SharedModule,
    MatNativeDateModule,
    MatDatepickerModule,

  ]
})
export class SignUpModule { }
