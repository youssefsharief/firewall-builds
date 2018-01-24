import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { IconTypeComponent } from './components/icon-type/icon-type.component';
import { MerticsBoxComponent } from './components/mertics-box/mertics-box.component';
import { BuildBoxComponent } from './components/build-box/build-box.component';
import { BoxLayoutComponent } from './components/box-layout/box-layout.component';
import { StateColorMapperService } from './services/state-color-mapper.service';
import { DataService } from './services/data.service';
import { ChartsBoxComponent } from './components/charts-box/charts-box.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ResultBoxComponent } from './components/result-box/result-box.component';
import { BuildTypeComponent } from './components/build-type/build-type.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { DataAnalyzerService } from './services/data-analyzer.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TableHeadingComponent } from './components/table-heading/table-heading.component';
import { TableListItemComponent } from './components/spinner/table-list-item/table-list-item.component';
import { ExtendedTableListItemComponent } from './components/extended-table-list-item/extended-table-list-item.component';

@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        IconTypeComponent,
        MerticsBoxComponent,
        BuildBoxComponent,
        BoxLayoutComponent,
        ChartsBoxComponent,
        PieChartComponent,
        ResultBoxComponent,
        BuildTypeComponent,
        ProgressBarComponent,
        SpinnerComponent,
        CapitalizeFirstPipe,
        TableHeadingComponent,
        TableListItemComponent,
        ExtendedTableListItemComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        PopoverModule.forRoot()
    ],
    providers: [
        DataService,
        StateColorMapperService,
        DataAnalyzerService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
