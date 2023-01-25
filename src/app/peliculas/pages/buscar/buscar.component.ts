import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { Pelicula } from '../../interfaces/peliculas.interfaces';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  termino:string = "";
  peliculas: Pelicula[] = [];
  peliculaSeleccionado: Pelicula | undefined;

  genero: string = "";

  constructor(
    private peliculasService: PeliculaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  buscando() {
    
    this.peliculasService.getPeliculaPorBusqueda( this.termino.trim(), this.genero )
      .subscribe( peliculas => this.peliculas = peliculas )

  }

  opcionSeleccionada( event:MatAutocompleteSelectedEvent ){
    
    if(!event.option.value){
      this.peliculaSeleccionado = undefined;
      return 
    }

    const pelicula: Pelicula = event.option.value;
    this.termino = pelicula.nombre
    
    this.peliculasService.getPeliculaPorId(pelicula.id!)
      .subscribe(pelicula => this.peliculaSeleccionado = pelicula)

      this.router.navigate(['/peliculas/'+event.option.value.id]);
  }

}
