import { Component, OnInit } from "@angular/core";
import { ItemModel } from "../../models/item.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  item = new ItemModel();

  constructor() {}

  ngOnInit() {}

  save(form: NgForm) {
    //console.log(form);
    //console.log(this.item);
    if (form.invalid) {
      console.log("Not valid");
      return;
    }
  }
}
