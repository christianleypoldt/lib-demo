import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvmazeComponent } from './tvmaze.component';
import { HttpClientModule } from '@angular/common/http';
import { PosterComponent } from './poster/poster.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [TvmazeComponent, PosterComponent],
  exports: [
    TvmazeComponent,
    PosterComponent
  ]
})
export class TvmazeModule { }
