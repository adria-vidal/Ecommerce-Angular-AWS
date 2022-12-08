import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor(private userService: UserService, private router: Router){

  }
  ngOnInit(): void {

  }
  logOut(){
    this.userService.logout()
    .then(()=> this.router.navigate(['/login']))
    .catch(error => console.log(error));


  }


}
