import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../../services/items.service";
import { ItemModel } from "../../models/item.model";
import swal from "sweetalert2";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
  items: ItemModel[] = [];
  loading = false;

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.loading = true;
    this.itemsService.getItems().subscribe(reply => {
      this.items = reply;
      this.loading = false;
    });
  }

  deleteItem(item: ItemModel, i: number) {
    swal
      .fire({
        title: "Are you sure?",
        text: `Are you sure you want to delete ${item.name}`,
        type: "question",
        showConfirmButton: true,
        showCancelButton: true
      })
      .then(reply => {
        if (reply.value) {
          this.items.splice(i, 1);
          this.itemsService.deleteItem(item.id).subscribe();
        }
      });
  }
}
