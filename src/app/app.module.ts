// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxElectronModule } from 'ngx-electron';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';

// Components
import { AppComponent } from './components/app-component/app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { TrademarksGridComponent } from './components/trademarks-grid/trademarks-grid.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

// Directives
import { HeightContainerDirective } from './directives/height-contanier.directive';

// Services
import { ElectronService } from './services/electron.service';
import { RospatentService } from './services/rospatent.service';
import { TrademarksService } from './services/trademarks.service';
import { CellRendererLogoComponent } from './components/trademarks-grid/cell-renderers-components/cell-renderer-logo.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppLoaderComponent,
    TrademarksGridComponent,
    CellRendererLogoComponent,
    MenuBarComponent,
    HeightContainerDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxElectronModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([CellRendererLogoComponent])
  ],
  providers: [
    ElectronService,
    RospatentService,
    TrademarksService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
