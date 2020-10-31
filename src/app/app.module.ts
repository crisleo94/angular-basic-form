import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicioTecnicoComponent } from './pages/servicio-tecnico/servicio-tecnico.component';
import { CalculoHorasComponent } from './pages/calculo-horas/calculo-horas.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicioTecnicoComponent,
    CalculoHorasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
