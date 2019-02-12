import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GlobalModule} from "./utils/modules/global.module";
import {HomeComponent} from "./views/home/home.component";
import {GithubRibbonComponent} from "./utils/github-ribbon/github-ribbon.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubRibbonComponent
  ],
  imports: [
    GlobalModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
