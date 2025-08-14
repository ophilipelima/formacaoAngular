import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { FormsModule } from '@angular/forms';
import { CabecalioComponent } from '../../componentes/cabecalio/cabecalio.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';

import agenda from '../../agenda.json'
import { RouterLink } from '@angular/router';
interface Contato{
  id: number;
  nome: string;
  telefone: string;
}

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
      ContainerComponent, 
      CabecalioComponent,
      SeparadorComponent,
      ContatoComponent,
      FormsModule,
      FormularioContatoComponent,
      RouterLink
    ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})

export class ListaContatosComponent {
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
