import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalioComponent } from './componentes/cabecalio/cabecalio.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';

interface Contato{
  id: number;
  nome: string;
  telefone: string;
}

import agenda from './agenda.json'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    ContainerComponent, 
    CabecalioComponent,
    SeparadorComponent,
    ContatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;

  filtrarContatosPorLetraInicial(letra:string) : Contato[] {
        return this.contatos.filter( contato => { //Essa função será executada para cada elemento (contato) no array this.contatos.
            return contato.nome.toLowerCase().startsWith(letra)
        })
  
  }
}
