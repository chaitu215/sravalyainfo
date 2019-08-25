import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

//import {DropdownModule} from 'primeng/dropdown';
//import {DemoMaterialModule} from './material-module';
//import {MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent
  //  DemoMaterialModule
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
