import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../../services/items.service";
import { ItemModel } from "../../models/item.model";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
  items: ItemModel[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.itemsService.getItems().subscribe(reply => {
      this.items = reply;
    });
  }
}
