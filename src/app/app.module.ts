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
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'quienes-somos', component:QuienesSomosComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}

];


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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
