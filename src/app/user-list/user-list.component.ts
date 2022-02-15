import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UsersListService } from '../users-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(public userListService: UsersListService) { 
    this.updateUserList();
  }

  private updateUserList(){
    this.userListService.getUserList().subscribe(
      (userList: User[]) => {
        this.users = userList;
      },
      (error: String) => {
        alert(error);
      }
    );
  }

  ngOnInit(): void {
    this.updateUserList();
  }

}
