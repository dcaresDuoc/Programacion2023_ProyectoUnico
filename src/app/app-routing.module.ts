import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos/quienes-somos.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { TiendaComponent } from './tienda/tienda/tienda.component';
import { ProductoComponent } from './tienda/producto/producto.component';
import { CrudProductosComponent } from './tienda/crud-productos/crud-productos.component';
import { UpdateProductoComponent } from './tienda/update-producto/update-producto.component';
import { CrearProductoComponent } from './tienda/crear-producto/crear-producto.component';
import { CarritoComponent } from './tienda/carrito/carrito.component';
import { CarritoGrandeComponent } from './tienda/carrito-grande/carrito-grande.component';
import { HasRoleGuard } from './guards/has-role.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'quienes-somos', component:QuienesSomosComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path: 'tienda', component:TiendaComponent},
  {path: 'producto', component:ProductoComponent},
  {path: 'producto/:id', component:ProductoComponent},
  {path: 'crud-producto', component:CrudProductosComponent, canActivate: [HasRoleGuard]},
  {path: 'update-producto/:id', component:UpdateProductoComponent},
  {path: 'update-producto', component:UpdateProductoComponent, canActivate: [HasRoleGuard]}, 
  {path: 'crear-producto', component:CrearProductoComponent, canActivate: [HasRoleGuard]},
  {path: 'carrito', component:CarritoComponent},
  {path: 'carritoGrande', component:CarritoGrandeComponent},
  {path: 'unauthorized', component:UnauthorizedComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

