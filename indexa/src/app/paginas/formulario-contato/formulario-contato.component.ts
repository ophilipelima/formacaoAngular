import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {
  contatoForm!: FormGroup

  constructor() {
        this.contatoForm = new FormGroup({
          nome: new FormControl('Philipe'),
          telefone: new FormControl('99 99999-9999'),
          email: new FormControl('philipe@gmail.com'),
          aniversario: new FormControl(''),
          redes: new FormControl(''),
          observacoes: new FormControl('')
    })
  }

  salvarContato(){
    console.log(this.contatoForm.value);
  }
}
