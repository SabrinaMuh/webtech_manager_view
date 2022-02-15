import { Role } from "./role";

export class User{
    id: number;
    name: String;
    password: String;
    role?: String;

    constructor(id: number, name: String, password: String, role?: String){
        this.id = id;
        this.name = name;
        this.password = password;
        this.role = role;
    }
}