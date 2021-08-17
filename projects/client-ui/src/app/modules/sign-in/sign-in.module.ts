import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule, MatInputModule} from '@angular/material';


@NgModule({
  declarations: [SignInComponent, SignInFormComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class SignInModule { }
