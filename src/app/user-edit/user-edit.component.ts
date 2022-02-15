import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../model/message';
import { User } from '../model/user';
import { UsersListService } from '../users-list.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  currentUser: User = new User(0, "", "", "");
  id: number = 0;
  showpassword: boolean = false;
  role?: String = "";
  currentRole?: String = "";

  options = [{
      name:"",
      value: 0
    },
    {
      name: "Waiter",
      value: 1
    },
    {
      name: "Management",
      value: 2
    },
    {
      name: "Kitchen",
      value: 3
    },
  ]

  constructor(public route: ActivatedRoute, public userService: UsersListService) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.userService.getUser(this.id).subscribe(
      (user: User[]) =>{
        this.currentUser = user[0];
        this.currentRole = this.currentUser.role;
      },
      (error) => {
        alert(error);
      }
    )
  }

  ngOnInit(): void {
  }

  selected(event: any){
    this.role = event.target.value;
  }
  
  onSubmit(f: NgForm): void{
    if(f.value.name === ""){
      alert("Error: Every field must be filled out.");
    }else{
      let password: String = f.value.password;
      if(f.value.password === ""){
        password = this.currentUser.password;
      }

      if(this.role === ""){
        this.role = this.currentRole;
      }
      let user: User = new User(this.id, f.value.name, password, this.role);
      this.userService.updateUser(user).subscribe(
        (res: Message) => {
          alert(res.message);
        },
        //TODO: Handle Error
        (error: String) => {
          alert(error);
        }
      );
    }
  }

  showPassword(): void{
    this.showpassword = !this.showpassword;
  }
}
