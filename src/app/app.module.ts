import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule, MatGridListModule } from '@angular/material';
import { NgProgressModule } from '@ngx-progressbar/core';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatGridListModule,
    NoopAnimationsModule,
    NgProgressModule.forRoot(),
    MatTableModule,
    CdkTableModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
