import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../User.service';
import { User } from '../User';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  
  public users = [] as any;
  public selectedId: number = 0;
  constructor(private uservice: UserService, private router: Router) {}

  ngOnInit(): void {
    this.uservice
      .getUserFromService()
      .subscribe((data) => (this.users = data));
  }

  onDelete(usr: User) {
    this.selectedId = usr.usr_id;
    console.log(this.selectedId);
    if (window.confirm('Are your sure, you want to delete?')) {
      this.uservice.deleteUser(this.selectedId).subscribe((data) => {
        this.router.navigate(['/usrlist']);
      });
    }
  }
}
