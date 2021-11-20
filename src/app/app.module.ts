import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalComponent } from './hospital/hospital.component';
import { UserServiceComponent } from './user-service/user-service.component';

import { BloodComponent } from './blood/blood.component';
import { HomeComponent } from './home/home.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserlistComponent } from './userlist/userlist.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserDpComponent } from './user-dp/user-dp.component';


import { DonorCreateComponent } from './donor-create/donor-create.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { DonorDetailsComponent } from './donor-details/donor-details.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    UserServiceComponent,
    
    BloodComponent,
    HomeComponent,
    OurservicesComponent,
    ContactusComponent,
    UserCreateComponent,
    UserdetailsComponent,
    UserlistComponent,
    LoginPageComponent,
    UserDpComponent,

  
    DonorCreateComponent,
    DonorListComponent,
    DonorDetailsComponent,
    PatientCreateComponent,
    UserEditComponent,
    
   
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
