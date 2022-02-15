import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../model/message';
import { User } from '../model/user';
import { UserListComponent } from '../user-list/user-list.component';
import { UsersListService } from '../users-list.service';

@Component({
  selector: 'app-user-object',
  templateUrl: './user-object.component.html',
  styleUrls: ['./user-object.component.css']
})
export class UserObjectComponent implements OnInit {

  @Input() currentUser!: User;
  constructor(public userService: UsersListService, public userListComponent: UserListComponent) { }

  ngOnInit(): void {
  }
  
  deleteUser():void{
    this.userService.deleteUser(this.currentUser.id).subscribe(
      (res: Message) => {
        alert(res.message);
        this.userListComponent.ngOnInit();
      },
      (error: String) => {
        alert(error);
      }
    )
  }
}
