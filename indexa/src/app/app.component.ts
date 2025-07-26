import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalioComponent } from './componentes/cabecalio/cabecalio.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';

interface Contato{
  id: number;
  nome: string;
  telefone: string;
}

import agenda from './agenda.json'
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    ContainerComponent, 
    CabecalioComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    FormularioContatoComponent
  ],


  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;

  filtroPorTexto: string = '';

  removerAcentos(nome: string): string{
    return nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  filtrarContatosPorTexto (): Contato []{
    if(!this.filtroPorTexto){
      return this.contatos;
    }
    return this.contatos.filter(contato => {
      return this.removerAcentos(contato.nome).toLowerCase().includes(this.filtroPorTexto);
    })
  }

  filtrarContatosPorLetraInicial(letra:string) : Contato[] {
        return this.filtrarContatosPorTexto().filter( contato => { //Essa função será executada para cada elemento (contato) no array this.contatos.
            return this.removerAcentos(contato.nome).toLowerCase().startsWith(letra)
        })
  
  }
}
