import { Pipe, PipeTransform } from '@angular/core';
import { Pelicula } from '../interfaces/peliculas.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(pelicula: Pelicula): string {


    if( !pelicula.id  && !pelicula.alt_img){
      return 'assets/no-image.png';
    } else if (pelicula.alt_img){
      return  pelicula.alt_img;
    }else {
      return  `assets/peliculas/${pelicula.id}.jpg`;
    }
  }

}
