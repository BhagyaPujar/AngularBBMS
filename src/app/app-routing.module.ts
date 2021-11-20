import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalComponent } from './hospital/hospital.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserServiceComponent } from './user-service/user-service.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HomeComponent } from './home/home.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { BloodComponent } from './blood/blood.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserDpComponent } from './user-dp/user-dp.component';

import { PatientCreateComponent } from './patient-create/patient-create.component';
import { DonorCreateComponent } from './donor-create/donor-create.component';
import { DonorDetailsComponent } from './donor-details/donor-details.component';
import { DonorListComponent } from './donor-list/donor-list.component';


const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'hospital', component: HospitalComponent },
{ path: 'createUser', component: UserCreateComponent },
{ path: 'userService', component: UserServiceComponent },
{ path: 'useredit', component: UserEditComponent },
{ path: 'usrdetails', component: UserdetailsComponent },
{ path: 'usrlist', component: UserlistComponent },
{ path: 'blood', component: BloodComponent },
{ path: 'ourservices', component: OurservicesComponent },
{ path: 'login', component: LoginPageComponent },
{ path: 'contactus', component: ContactusComponent },
{ path: 'userdp', component: UserDpComponent },

{ path: 'patientcreate', component: PatientCreateComponent },
{ path: 'donorcreate', component: DonorCreateComponent },
{ path: 'donordetails', component: DonorDetailsComponent },
{ path: 'donorlist', component: DonorListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
