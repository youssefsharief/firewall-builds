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
        CapitalizeFirstPipe
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
    ],
    providers: [
        DataService,
        StateColorMapperService,
        DataAnalyzerService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
