import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {

  get currentUser() {
    return this.authService.currentUser;
  }

  
  constructor(private authService: AuthService) { }


  ngOnInit(): void {
  }

}