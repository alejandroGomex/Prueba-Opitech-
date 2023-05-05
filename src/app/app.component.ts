import { Component,OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  users:any
  searchQuery: string = '';
  filteredUsers: any
  constructor(private userService:UserService){}
  
  ngOnInit() {
    this.userService.getUsers()
      .subscribe(response => {
        this.users = response;
        this.filteredUsers = response;
        console.log(this.users);
      });
  }

  filterUsers() {
    console.log(this.searchQuery);
    this.filteredUsers = this.users.filter((user:any) =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  
sortByNameAsc() {
  this.filteredUsers.sort((a: any, b: any) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}

sortByNameDesc() {
  this.filteredUsers.sort((a: any, b: any) => {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  });
}




}
