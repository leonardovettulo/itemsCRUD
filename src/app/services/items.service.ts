import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ItemModel } from "../models/item.model";
import { map, delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ItemsService {
  private url = "https://crud-5ba35.firebaseio.com";
  constructor(private http: HttpClient) {}

  createItem(item: ItemModel) {
    return this.http.post(`${this.url}/items.json`, item).pipe(
      map((reply: any) => {
        item.id = reply.name;
        return item;
      })
    );
  }

  updateItem(item: ItemModel) {
    const itemTemp = {
      ...item
    };
    delete itemTemp.id;
    return this.http.put(`${this.url}/items/${item.id}.json`, itemTemp);
  }

  getItems() {
    return this.http.get(`${this.url}/items.json`).pipe(
      map(this.createArray) //,
      //delay(1500) //Testing for delay
    );
  }

  getItem(id: string) {
    return this.http.get(`${this.url}/items/${id}.json`);
  }

  deleteItem(id: string) {
    return this.http.delete(`${this.url}/items/${id}.json`);
  }

  private createArray(obj: object) {
    const items: ItemModel[] = [];

    if (obj === null) {
      return [];
    }

    Object.keys(obj).forEach(key => {
      const item: ItemModel = obj[key];
      item.id = key;
      items.push(item);
    });

    return items;
  }
}
