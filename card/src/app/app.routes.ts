import { Routes } from '@angular/router';
import { EditarComponent } from './vistas/editar/editar.component';
import { AgregarComponent } from './vistas/agregar/agregar.component';
import { InicioComponent } from './vistas/inicio/inicio.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'editar/:id', component: EditarComponent},
    { path: 'agregar', component: AgregarComponent}
];