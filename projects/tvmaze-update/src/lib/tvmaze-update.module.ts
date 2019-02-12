import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvmazeUpdateComponent } from './tvmaze-update.component';
import { HttpClientModule } from '@angular/common/http';
import { PosterComponent } from './poster/poster.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [TvmazeUpdateComponent, PosterComponent],
  exports: [
    TvmazeUpdateComponent,
    PosterComponent
  ]
})
export class TvmazeUpdateModule { 

  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: TvmazeUpdateModule,
  //     providers: [ ]
  //   };
  // }

  // breaking-change
  static configure(): ModuleWithProviders {
    return {
      ngModule: TvmazeUpdateModule,
      providers: [ ]
    };
  }
}
