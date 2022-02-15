import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItemListService } from '../menu-item-list.service';
import { Allergen } from '../model/allergen';
import { Message } from '../model/message';

@Component({
  selector: 'app-edit-menu-item-allergenelist',
  templateUrl: './edit-menu-item-allergenelist.component.html',
  styleUrls: ['./edit-menu-item-allergenelist.component.css']
})
export class EditMenuItemAllergenelistComponent implements OnInit {

  allergene: Allergen[] = [{
    title: "Glutenhaltiges Getreide",
    id: "A"
  }, {
    title: "Krebstiere",
    id: "B"
  }, {
    title: "Eier",
    id: "C"
  }, {
    title: "Fische",
    id: "D"
  }, {
    title: "Erdnüsse",
    id: "E"
  }, {
    title: "Sojabohnen",
    id: "F"
  }, {
    title: "Milch",
    id: "G"
  }, {
    title: "Schalenfrüchte",
    id: "H"
  }, {
    title: "Sellerie",
    id: "L"
  }, {
    title: "Senf",
    id: "M"
  }, {
    title: "Sesamsamen",
    id: "N"
  }, {
    title: "Schwefeldioxid und Sulphite",
    id: "O"
  }, {
    title: "Lupinen",
    id: "P"
  }, {
    title: "Weichtiere",
    id: "R"
  }];
  selectedAllergene: String[] = [];
  allergen: String = "";
  emptyAllergeneList: String[] = [];

  id: number = 0;

  constructor(public route: ActivatedRoute, public menuItemService: MenuItemListService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.updateAllergene();
  }

  updateAllergene(){
    this.menuItemService.getAllergeneForMenuItem(this.id).subscribe(
      (allergene: String[]) => {
        this.selectedAllergene = allergene;
        if(this.selectedAllergene[0] == null){
          this.emptyAllergeneList = this.selectedAllergene;
          this.selectedAllergene = [];
        }
      },
      (error) => {
        alert(error);
      }
    );
  }

  ngOnInit(): void {
    this.updateAllergene();
  }

  selectedAllergen(event: any): void{
    this.allergen = event.target.value;
  }

  addAllergentoList(){
    if(this.allergen === ""){
      alert("ERROR: Choose something");
    }else{
      if (this.emptyAllergeneList.length == 1 && this.emptyAllergeneList[0] == null){
        this.menuItemService.changeNullValueAllergen(this.id, this.allergen).subscribe(
          (res: Message) => {
            alert(res.message);
            this.updateAllergene();
          },
          (error) => {
            alert(error);
          }
        );
      }else {
        this.menuItemService.addAllergentoMenuItem(this.id, this.allergen).subscribe(
          (res: Message) => {
            alert(res.message);
            this.updateAllergene();
          },
          (error) => {
            alert(error);
          }
        );
      }
    }
  }

  deleteAllergenFromList(){
    if(this.allergen === ""){
      alert("ERROR: Choose something");
    }else{
      if(this.selectedAllergene.length == 1){
        this.menuItemService.changeValueToNullAllergen(this.id).subscribe(
          (res:Message) => {
            alert(res.message);
            this.updateAllergene();
          },
          (error) => {
            alert(error);
          }
        );
      }else{
        this.menuItemService.deleteAllergenFromMenuItem(this.id, this.allergen).subscribe(
          (res: Message) => {
            alert(res.message);
            this.updateAllergene();
          },
          (error) => {
            alert(error);
          }
        );
      }
    }
  }

}
