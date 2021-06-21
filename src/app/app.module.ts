import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestaquesComponent } from './components/destaques/destaques.component';
import { FooterComponent } from './components/footer/footer.component';
import { GratisComponent } from './components/gratis/gratis.component';
import { NovosPopularesComponent } from './components/novos-populares/novos-populares.component';
import { PromocoesComponent } from './components/promocoes/promocoes.component';
import { TopoComponent } from './components/topo/topo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule} from '@angular/material/menu';
import { NovosPopularesSmallComponent } from './components/novos-populares-small/novos-populares-small.component';
import { FooterSmallComponent } from './components/footer-small/footer-small.component';


@NgModule({
  declarations: [
    AppComponent,
    DestaquesComponent,
    FooterComponent,
    GratisComponent,
    NovosPopularesComponent,
    PromocoesComponent,
    TopoComponent,
    NovosPopularesSmallComponent,
    FooterSmallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
