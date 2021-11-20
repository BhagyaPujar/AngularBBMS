import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../Patient.service';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  @Input()
  public patientDetails = {pat_name:'' , pat_email: '', pat_password: '' , pat_address: '' ,pat_mobile:'',pat_gender:''};
  
  constructor(private restApi: PatientService, public router: Router) {}

  ngOnInit(): void {
  }
  getPatient() {
   

    this.restApi
    .getPatient(this.patientDetails)
    .subscribe((data: {}) => this.router.navigate(['/login'])); // navigate to other page
 
  }

}