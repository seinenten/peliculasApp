import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from '../shared/pages/nav-bar/nav-bar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';

const routes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: ':id',
        component: PeliculaComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      },

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PeliculasRoutingModule { }
