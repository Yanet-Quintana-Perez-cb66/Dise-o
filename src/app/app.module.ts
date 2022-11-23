import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficaComponent } from './grafica/grafica.component';
import { ConsecuenciasComponent } from './consecuencias/consecuencias.component';
import { CausasComponent } from './causas/causas.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent,
    ConsecuenciasComponent,
    CausasComponent,
    LoginComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
