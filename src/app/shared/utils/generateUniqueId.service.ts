import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class GenerateUniqueId {
  getId() {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 10);
    const id = +`${timestamp}${randomNum}`;
    return id;
  }
}
