import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { PrecioComponent } from './precio/precio.component';
import { ImagenComponent } from './imagen/imagen.component';
import { CardComponent } from './card/card.component';
import { CountComponent } from './count/count.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    PrecioComponent,
    ImagenComponent,
    CardComponent,
    CountComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
