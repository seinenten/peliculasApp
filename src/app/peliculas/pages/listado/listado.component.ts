import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/peliculas.interfaces';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(
    private peliculasService: PeliculaService  
  ) { }

  ngOnInit(): void {

    this.peliculasService.getPeliculas().subscribe(
      peliculas => this.peliculas = peliculas  
      
    )

  }

}
