import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { PeliculaTarjetaComponent } from './components/pelicula-tarjeta/pelicula-tarjeta.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { MaterialModule } from '../material/material.module';
import { ImagenPipe } from './pipe/imagen-peliculas.pipe';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoComponent } from './pages/listado/listado.component';
import { PeliculasRoutingModule } from './peliculas-routing.module';



@NgModule({
  declarations: [
    ConfirmarComponent,
    PeliculaTarjetaComponent,
    PeliculaComponent,
    ImagenPipe,
    BuscarComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PeliculasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PeliculasModule { }
