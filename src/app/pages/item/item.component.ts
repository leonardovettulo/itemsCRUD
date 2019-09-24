import { Component, OnInit } from "@angular/core";
import { ItemModel } from "../../models/item.model";
import { NgForm } from "@angular/forms";
import { ItemsService } from "../../services/items.service";
import swal from "sweetalert2";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

//Sweet Alert package

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  item: ItemModel = new ItemModel();

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    if (id !== "new") {
      this.itemsService.getItem(id).subscribe((reply: ItemModel) => {
        this.item = reply;
        this.item.id = id;
      });
    }
  }

  save(form: NgForm) {
    //console.log(form);
    //console.log(this.item);

    swal.fire({
      title: "Wait",
      text: "Saving Info",
      type: "info",
      allowOutsideClick: false
    });
    swal.showLoading();

    let petition: Observable<any>;

    if (this.item.id) {
      petition = this.itemsService.updateItem(this.item);
    } else {
      petition = this.itemsService.createItem(this.item);
    }

    petition.subscribe(reply => {
      swal.fire({
        title: this.item.name,
        text: "Updated correctly",
        type: "success"
      });
    });
  }
}
