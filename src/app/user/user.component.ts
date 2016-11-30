import { DataService } from './../shared/data.service';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UserService, DataService]
})

export class UserComponent implements OnInit {
user: {name: string};
isLoggedIn = false;
data: string;

  constructor(private userService: UserService, 
              private dataService:DataService) { }

 

  ngOnInit() {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data:string) => this.data = data);
  }



}
