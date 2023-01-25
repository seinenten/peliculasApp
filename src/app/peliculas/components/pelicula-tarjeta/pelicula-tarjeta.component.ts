import { Component, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/peliculas.interfaces';

@Component({
  selector: 'app-pelicula-tarjeta',
  templateUrl: './pelicula-tarjeta.component.html'
})
export class PeliculaTarjetaComponent {

  @Input()  pelicula!: Pelicula;

}
