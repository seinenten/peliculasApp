import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  public passPattern =/(?=(.*[0-9]))(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{5,}/;
  //una letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 5 dígitos

  // /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}/
      // CARACTERES DEL 0 AL 9     EXPRESION             LETRA MINUSCULA LETRA MAYUSCULA  MINIMOS 6 CARACTERES

  camposIguales( campo1:string, campo2:string){
  
    return (formGroup: AbstractControl): ValidationErrors | null => {
    
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if ( pass1 !== pass2  ){
        
        // el formgroup se nos envia por referencia. Asi que hacemos
        // Desestructurarion para colocarle el error
        formGroup.get(campo2)?.setErrors({ noIguales: true  });
        return {  noIguales: true }
      }

      formGroup.get(campo2)?.setErrors( null );
      return null;
    }
  }








  constructor() { }
}
