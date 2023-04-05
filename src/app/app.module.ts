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




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OfferComponent,
    ImgIntermedioComponent,
    HelpToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
