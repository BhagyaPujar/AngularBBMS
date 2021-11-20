import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../User.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  @Input()
  public userDetails = {usr_name:'' , usr_email: '', usr_password: '' , usr_address: '' ,usr_mobile:'',usr_gender:''};
  
  constructor(private restApi: UserService, public router: Router) {}

  ngOnInit(): void {
  }
  addUser() {
   

    this.restApi
    .createUser(this.userDetails)
    .subscribe((data: {}) => this.router.navigate(['/login'])); // navigate to other page
 
  }

}

//usr_name:'' , usr_email: '', usr_password: '' , usr_address: '' ,usr_mobile:'',usr_gender:''