import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculoHorasComponent } from './pages/calculo-horas/calculo-horas.component';
import { ServicioTecnicoComponent } from './pages/servicio-tecnico/servicio-tecnico.component';

const routes: Routes = [
  { path: 'servicio-tecnico', component: ServicioTecnicoComponent },
  { path: 'calculo-horas', component: CalculoHorasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
