import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetallesProductosComponent } from './pages/detalles-productos/detalles-productos.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'productos', component:ProductosComponent},
    {path:'contactos', component:ContactosComponent},

    {path:'detalles-juegos/:idJuegos', component:DetallesProductosComponent},
    //redirecciona las rutas en blanco a home
    {path:'', redirectTo:'home',pathMatch:'full'},
     //redirecciona las rutas inexistentes
    {path:'**', component:Error404Component}
];
