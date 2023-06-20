import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderComponent } from './components/order/order.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
