import { Category } from "./category";

export class MenuItem{
    id: number;
    title: String;
    description: String;
    price: number;
    likes: number;
    dislikes: number;
    status: String;
    allergene: String[];
    categories_id?: number[];
    categories?: Category[];

    constructor(id: number, title: String, description: String, price: number, likes: number, dislikes: number, status: String, allergene: String[], categories_id?: number[], categories?: Category[]){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.likes = likes;
        this.dislikes = dislikes;
        this.status = status;
        this.allergene = allergene;
        this.categories_id = categories_id;
        this.categories = categories;
    }
}