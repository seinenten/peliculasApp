import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { EmailValidatorService } from '../../services/email-validator.service';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre:      [ '' ,   [Validators.required, Validators.minLength(3)]  ],
    pass:        [ '' ,   [Validators.required, Validators.pattern( this.vS.passPattern ) ]  ],
    pass2:       [ '' ,   [Validators.required ]        ],
    correo:      [ '' ,   [Validators.required, Validators.pattern( this.vS.emailPattern ) ] , [ this.emailValidator ]  ], 
    condiciones: [ false , Validators.requiredTrue]
  }, { 
  
    //Para realizar estas validaciones
    //Se necesita leer a tiempo real los campos a utilizar
    validators: [   this.vS.camposIguales('pass', 'pass2') ]
  
  });

  inicializador = {
    nombre:      '',
    pass:        '',
    pass2:       '',
    correo:      '',
    condiciones: false
  }

  constructor(
    private fb: FormBuilder,
    private usuariosService: AuthService,
    private snackbar: MatSnackBar,
    //SERVICIO DE VALIDACIONES
    private vS: ValidatorService,
    //SERVICIO PARA VALIDAR EL EMAIL DE LA BD
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset( {  ...this.inicializador  } );
  }


  get emailErrorMsg(): string {
    
    const errors = this.miFormulario.get('correo')?.errors;
    if( errors?.['required']  ){
      return 'El correo es obligatorio';
    }else if( errors?.['pattern'] ){
      return 'El valor no tiene formato de correo';
    }else if( errors?.['emailTomado'] ){
      return 'El correo electronico ya existe';
    }

    return '';
  
  }

  get passErrorMsg(): string {
    
    const errors = this.miFormulario.get('pass')?.errors;
    if( errors?.['required']  ){
      return 'La contraseña es obligatoria';
    }else if( errors?.['pattern'] ){
      return 'La contraseña debe de ser mayor a 5 caracteres. tener mayusculas, minusculas y numeros';
    }

    return '';
  
  }




  campoNoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched 
  }


  guardar(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }

      //Desestructuro el objeto para quitarle el pass2 y mandarlo
      const formValue = { ...this.miFormulario.value }
      delete formValue.pass2;
      delete formValue.condiciones;
      //Eliminado lo mando
    this.usuariosService.agregarUsuarios(formValue)
      .subscribe(usuario => {
        this.mostrarSnackbar('Usuario Creado');
      })


    this.miFormulario.reset();
  }

  mostrarSnackbar(mensaje: string){
    
    this.snackbar.open(mensaje, 'ok!',  {
      duration: 5000,
      panelClass: ['blue-snackbar']
    });

  }




}
