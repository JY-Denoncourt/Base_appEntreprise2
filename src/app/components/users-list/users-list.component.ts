import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})


export class UsersListComponent implements OnInit {

  constructor(private authService: AuthService) { }


  get users(): User[] {
    return this.authService.users;
  }


  ngOnInit(): void {
  }


  userClicked(userEmail: string) {
    alert(userEmail);
  }
  
}