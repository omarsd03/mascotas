import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { AgregarMascotaComponent } from './components/agregar-mascota/agregar-mascota.component';
import { EditarMascotaComponent } from './components/editar-mascota/editar-mascota.component';
import { ListarMascotasComponent } from './components/listar-mascotas/listar-mascotas.component';

const routes: Routes = [
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'mascotas', component: ListarMascotasComponent },
  { path: 'mascotas/agregar', component: AgregarMascotaComponent },
  { path: 'mascotas/editar/:id', component: EditarMascotaComponent },
  { path: '', redirectTo: '/mascotas', pathMatch: 'full' },
  { path: '***', redirectTo: '/mascotas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
