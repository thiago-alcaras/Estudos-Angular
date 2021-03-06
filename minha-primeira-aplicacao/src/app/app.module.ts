import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OlaMundoComponent } from './ola-mundo/ola-mundo.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';
import { RevistaComponent } from './revista/revista.component';
import { LivroComponent } from './livro/livro.component';
import { FilmeComponent } from './filme/filme.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    OlaMundoComponent,
    ContadorComponent,
    ListaLivrosComponent,
    RevistaComponent,
    LivroComponent,
    FilmeComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }