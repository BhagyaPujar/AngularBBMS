import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../User.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public userData: any = {};

  public usr_id: any = this.aroute.snapshot.params['usr_id'];

  public selectedId: any;
  constructor(private restApi:UserService, private router: Router,private aroute:ActivatedRoute) {}

    ngOnInit(): void {
      console.log('from ng onint ' + this.usr_id + this.selectedId);
      this.restApi.getUser(this.usr_id).subscribe((data) => {
        this.userData = data;
      });

    
    this.restApi
    .getUserFromService()
    .subscribe((data) => (this.userData = data));
  }
  updateUser() {
    console.log('user data ---' + this.userData);
    this.restApi
      .updateUser(this.userData)
      .subscribe((data: {}) => this.router.navigate(['/usrlist']));
  }
  goToUsers() {
    this.router.navigate(['/usrlist']);
  }
}

