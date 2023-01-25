import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map,delay } from 'rxjs/operators';
import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient  
  ) { }





  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    
    const email = control.value;
    return this.http.get<Auth[]>(`${ this.baseUrl }/usuarios?q=${ email  }` )
                    .pipe(
                      delay(3000),
                      map( resp => {
                        return ( resp.length === 0 )
                            ? null
                            :  {  emailTomado: true }
                      } )
                    )


  }


}
