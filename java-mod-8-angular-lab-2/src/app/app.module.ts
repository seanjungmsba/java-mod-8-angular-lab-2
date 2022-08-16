import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AthleteListComponent } from './athlete-list/athlete-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AthleteListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
