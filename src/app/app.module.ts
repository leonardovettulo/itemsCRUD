import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemComponent } from "./pages/item/item.component";
import { ItemsComponent } from "./pages/items/items.component";

//Forms
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ItemComponent, ItemsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
