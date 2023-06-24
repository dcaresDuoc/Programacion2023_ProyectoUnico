import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './home/components/carousel/carousel.component';
import { SeccionofertasComponent } from './home/components/seccionofertas/seccionofertas.component';
import { ImagenIntermediaComponent } from './home/components/imagen-intermedia/imagen-intermedia.component';
import { MenuIntermedioComponent } from './home/components/menu-intermedio/menu-intermedio.component';
import { OfertasMacComponent } from './home/components/ofertas-mac/ofertas-mac.component';
import { OfertasDePcComponent } from './home/components/ofertas-de-pc/ofertas-de-pc.component';
import { MarcasComponent } from './home/components/marcas/marcas.component';
import { HelpToolbarComponent } from './home/components/help-toolbar/help-toolbar.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos/quienes-somos.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TiendaComponent } from './tienda/tienda/tienda.component';
import { ProductoComponent } from './tienda/producto/producto.component';
import { CrudProductosComponent } from './tienda/crud-productos/crud-productos.component';
import { UpdateProductoComponent } from './tienda/update-producto/update-producto.component';
import { CrearProductoComponent } from './tienda/crear-producto/crear-producto.component';
import { FormatPricePipe } from './pipes/format-price.pipe';
import { CarritoComponent } from './tienda/carrito/carrito.component';
import { CarritoGrandeComponent } from './tienda/carrito-grande/carrito-grande.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { MarcaFilterPipe } from './pipes/marca-filter.pipe';
import { CategoriaFilterPipe } from './pipes/categoria-filter.pipe';
import { OrderByPricePipe } from './pipes/order-by-price.pipe';
import { FiltrarPrecioPipe } from './pipes/filtrar-precio.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    SeccionofertasComponent,
    ImagenIntermediaComponent,
    MenuIntermedioComponent,
    OfertasMacComponent,
    OfertasDePcComponent,
    MarcasComponent,
    HelpToolbarComponent,
    QuienesSomosComponent,
    LoginComponent,
    RegisterComponent,
    TiendaComponent,
    ProductoComponent,
    CrudProductosComponent,
    UpdateProductoComponent,
    CrearProductoComponent,
    FormatPricePipe,
    CarritoComponent,
    CarritoGrandeComponent,
    UnauthorizedComponent,
    ProductFilterPipe,
    MarcaFilterPipe,
    CategoriaFilterPipe,
    OrderByPricePipe,
    FiltrarPrecioPipe,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
