import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http' 

import { AppComponent } from './app.component'
import { CartComponent } from './cart/cart.component'
import { StoreComponent } from './store/store.component'
import { TotalComponent } from './total/total.component'

@NgModule({
  declarations: [AppComponent, CartComponent, StoreComponent, TotalComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
