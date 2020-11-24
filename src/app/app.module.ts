import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarMascotaComponent } from './components/agregar-mascota/agregar-mascota.component';
import { ListarMascotasComponent } from './components/listar-mascotas/listar-mascotas.component';
import { EditarMascotaComponent } from './components/editar-mascota/editar-mascota.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarMascotaComponent,
    ListarMascotasComponent,
    EditarMascotaComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
