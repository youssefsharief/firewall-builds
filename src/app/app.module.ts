import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgProgressModule } from '@ngx-progressbar/core';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DataService } from './shared/services/data.service';
import { TableComponent } from './table/table.component';
import { ItemRowComponent } from './item-row/item-row.component';
import { IconTypeComponent } from './icon-type/icon-type.component';
import { StateColorMapperService } from './shared/services/state-color-mapper.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ItemRowComponent,
    IconTypeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgProgressModule.forRoot(),
    BrowserModule,
    ChartsModule
  ],
  providers: [
    DataService,
    StateColorMapperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
