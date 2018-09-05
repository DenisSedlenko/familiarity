// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxElectronModule } from 'ngx-electron';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

// Components
import { AppComponent } from './components/app-component/app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';


// Services
import { ElectronService } from './services/electron.service';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppLoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxElectronModule,
    MaterialModule
  ],
  providers: [
    ElectronService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
