import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './master/item/item.component';
import { CustomerComponent } from './master/customer/customer.component';
import { TaxComponent } from './master/tax/tax.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CustomerComponent,
    TaxComponent,
    MainComponent
],    
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
