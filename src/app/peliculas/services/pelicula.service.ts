import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pelicula } from '../interfaces/peliculas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private baseUrl: string = environment.baseUrl;


  constructor(private http: HttpClient) { }

  getPeliculas():Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(`${ this.baseUrl }/peliculas`);
  }

  getPeliculaPorId(id: string):Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.baseUrl}/peliculas/${ id }`);
  }

  getPeliculaPorBusqueda(termino: string, termino2: string, termino3: string):Observable<Pelicula[]>{
    
    if (termino3 !== '' && termino2 !== '' ){
      return this.http.get<Pelicula[]>(`${ this.baseUrl }/peliculas?q=${ termino }&_limit=6&Genero=${termino2}&Pais=${termino3}`);

    }else if (termino3 !== '' && termino2 === '' ){
      return this.http.get<Pelicula[]>(`${ this.baseUrl }/peliculas?q=${ termino }&_limit=6&Pais=${termino3}`);

    }else if (termino3 === '' && termino2 !== '')
      return this.http.get<Pelicula[]>(`${ this.baseUrl }/peliculas?q=${ termino }&_limit=6&Genero=${termino2}`);

    return this.http.get<Pelicula[]>(`${ this.baseUrl }/peliculas?q=${ termino }&_limit=6`);
  }

  agregarPelicula( pelicula: Pelicula):Observable<Pelicula>  {
    return this.http.post<Pelicula>(`${ this.baseUrl }/peliculas`, pelicula);
  }

  actualizarPelicula(pelicula: Pelicula): Observable<Pelicula>{
    return this.http.put<Pelicula>(`${ this.baseUrl }/peliculas/${ pelicula.id }`, pelicula);
  }

  borrarPelicula(id: string): Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl }/peliculas/${ id }`);
  }




}
