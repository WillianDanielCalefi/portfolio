import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NomeFotoComponent } from './components/nome-foto/nome-foto.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ContatoPessoalComponent } from './components/contato-pessoal/contato-pessoal.component';
import { EducacaoComponent } from './components/educacao/educacao.component';


@NgModule({
  declarations: [
    AppComponent,
    NomeFotoComponent,
    ExperienciaComponent,
    ProgressBarComponent,
    ContatoPessoalComponent,
    EducacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
