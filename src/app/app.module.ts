import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TvmazeModule } from 'tvmaze';
import { TvmazeUpdateModule } from 'tvmaze-update';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TvmazeModule,
    TvmazeUpdateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
