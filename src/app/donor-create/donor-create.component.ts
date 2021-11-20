import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorService } from '../Donor.service';

@Component({
  selector: 'app-donor-create',
  templateUrl: './donor-create.component.html',
  styleUrls: ['./donor-create.component.css']
})
export class DonorCreateComponent implements OnInit {

  @Input()
  public donorDetails = {dnr_name:'' , dnr_email: '', dnr_password: '' , dnr_address: '' ,dnr_mobile:'',dnr_gender:'',dnr_bldgrp:''};
  
  constructor(private restApi: DonorService, public router: Router) {}

  ngOnInit(): void {
  }
  addDonor() {
   

    this.restApi
    .addDonor(this.donorDetails)
    .subscribe((data: {}) => this.router.navigate(['/login'])); // navigate to other page
 
  }

}