import { Component, OnInit } from '@angular/core';
import { UserService } from '../User.service';



@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  public users = [] as any;
 
  constructor(private uservice: UserService) {}

  ngOnInit(): void {
    this.uservice
      .getUserFromService()
      .subscribe((data) => (this.users = data));
  }

}
