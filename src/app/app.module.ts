import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent, FooterComponent } from './components';
import { OfferComponent } from './components/offer/offer.component';
import { ImgIntermedioComponent } from './components/img-intermedio/img-intermedio.component';
import { HelpToolbarComponent } from './components/help-toolbar/help-toolbar.component';
import { MenuIntermedioComponent } from './components/menu-intermedio/menu-intermedio.component';
import { OfferPcsComponent } from './components/offer-pcs/offer-pcs.component';
import { OfferMacComponent } from './components/offer-mac/offer-mac.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarcasComponent } from './components/marcas/marcas.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OfferComponent,
    ImgIntermedioComponent,
    HelpToolbarComponent,
    MenuIntermedioComponent,
    OfferPcsComponent,
    OfferMacComponent,
    MarcasComponent,
  ],
  imports: [
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselComponent,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
