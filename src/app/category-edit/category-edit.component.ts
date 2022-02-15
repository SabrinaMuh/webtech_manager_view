import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Category } from '../model/category';
import { Message } from '../model/message';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  currentCategory: Category = new Category(0, "", "");
  id: number = 0;

  constructor(public route: ActivatedRoute, public categoryService: CategoriesService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.categoryService.getCategory(this.id).subscribe(
      (category: Category[]) => {
        this.currentCategory = category[0];
      },
      (error) => {
        alert(error)
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm): void{
    if(f.value.title === "", f.value.description === ""){
      alert("ERROR: Every field must be filled out.")
    }else{
      let category: Category = new Category(this.id, f.value.title, f.value.description);
      this.categoryService.updateCategory(category).subscribe(
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
