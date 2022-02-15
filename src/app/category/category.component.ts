import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Category } from '../model/category';
import { Message } from '../model/message';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public categoriesService: CategoriesService, public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm): void{
    if(f.value.id === "" || f.value.title === "" || f.value.description === ""){
      alert("ERROR: Every field must be filled out.")
    }else{
      let category: Category = new Category(f.value.id, f.value.title, f.value.description);
      this.categoriesService.addCategory(category).subscribe(
        (res: Message) => {
          alert(res.message);
        },
        //TODO: Find solution for error Handling
        (error: Message) => {
          alert(error.message);
        }
      );
    }
  }
}
