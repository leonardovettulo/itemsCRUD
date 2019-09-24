import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemComponent } from "./pages/item/item.component";
import { ItemsComponent } from "./pages/items/items.component";
//import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

//Forms
import { FormsModule } from "@angular/forms";

//Http module for service
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, ItemComponent, ItemsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    //SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
