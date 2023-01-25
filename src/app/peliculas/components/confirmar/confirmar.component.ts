import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pelicula } from '../../interfaces/peliculas.interfaces';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html'
})
export class ConfirmarComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pelicula  
  ) { }

  ngOnInit(): void {
    
  }

  borrar(){
    this.dialogRef.close(true);
  }

  cerrar(){
    this.dialogRef.close();
  }

}
