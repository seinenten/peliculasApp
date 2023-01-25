import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/peliculas.interfaces';
import { switchMap, tap } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
    `
    img {
      width: 100%;
      border-radius: 5px;
    }
    `] 
})
export class PeliculaComponent implements OnInit {

  pelicula!: Pelicula;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private peliculaService: PeliculaService,
    private router: Router  
    
  ) { }

  ngOnInit(): void {

    this.ActivatedRoute.params
    .pipe(
      switchMap( ( { id } ) => this.peliculaService.getPeliculaPorId( id ) )
    )
    .subscribe( pelicula => this.pelicula = pelicula);

  }

  regresar(){
    this.router.navigate(['/peliculas/listado']);
  }

}
