import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  NgForm
} from '@angular/forms';
import { Message } from '../model/message';
import { User } from '../model/user';
import { UsersListService } from '../users-list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  showpassword: boolean = false;
  role: String = "";

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

  constructor(public userService: UsersListService) { }

  ngOnInit(): void {
  }

  selected(event: any){
    this.role = event.target.value;
  }

  onSubmit(f: NgForm): void{
    if(f.value.id === "" || f.value.name === "" || f.value.password === "" || this.role === ""){
      alert("Error: Every field must be filled out.");
    }else{
      let user: User = new User(f.value.id, f.value.name, f.value.password, this.role);
      this.userService.addUser(user).subscribe(
        (res: Message) => {
          alert(res.message);
        },
        //TODO: Handle Error
        (error: String) => {
          alert(error);
        }
      )
    }
  }

  showPassword(): void{
    this.showpassword = !this.showpassword;
  }
}
