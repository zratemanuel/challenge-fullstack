import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CurrencyPipe  } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { transformToPoundsPipe } from './pipes/transform-to-pounds.pipe';
import { nullResultPipe } from './pipes/null-result.pipe';

@NgModule({
  declarations: [
    AppComponent,
    transformToPoundsPipe,
    nullResultPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    transformToPoundsPipe,
    nullResultPipe
  ],
  providers: [
    CurrencyPipe,
    transformToPoundsPipe,
    nullResultPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
