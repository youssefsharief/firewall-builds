import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';
import { NgProgressModule } from '@ngx-progressbar/core';
import { AppComponent } from './app.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ArrowComponent } from './arrow/arrow.component';
import { BuildStaticComponent } from './build-static/build-static.component';


@NgModule({
  declarations: [
    AppComponent,
    ArrowComponent,
    BuildStaticComponent
  ],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatRippleModule,
    BrowserAnimationsModule,
    NgProgressModule.forRoot(),
    CdkTableModule,
    OverlayModule,
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
