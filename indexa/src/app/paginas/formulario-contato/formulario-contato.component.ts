import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContatoService } from '../../services/contato.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})

export class FormularioContatoComponent implements OnInit{
  contatoForm!: FormGroup

  ngOnInit() {
    this.inicializarFormulario();
    this.carregarContato();
  }

  constructor(private contatoService: ContatoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  inicializarFormulario() {
        this.contatoForm = new FormGroup({
          nome: new FormControl('', Validators.required),
          avatar: new FormControl('', Validators.required),
          telefone: new FormControl('', Validators.required),
          email: new FormControl('', [Validators.required, Validators.email]),
          aniversario: new FormControl(''),
          redes: new FormControl(''),
          observacoes: new FormControl('')
    })
  }

  carregarContato(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) => {
        this.contatoForm.patchValue(contato)
      })
    }
  }

  salvarContato(){
    const novoContato = this.contatoForm.value;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    novoContato.id = id ? parseInt(id) : null 

    this.contatoService.editarOuSalvarContato(novoContato).subscribe(() => {
      this.contatoForm.reset();
      this.router.navigateByUrl('/lista-contatos')
      //O subscribe está sendo utilizado para executar ações após a conclusão bem-sucedida da requisição.
    })
  }

  aoSelecionarArquivo(event: any){
    const file: File = event.target.files[0]
    if(file){
      this.lerArquivo(file)
    }
  }

  lerArquivo(file: File){
    const reader = new FileReader();
    reader.onload = () => {
       this.contatoForm.get('avatar')?.setValue(reader.result)
    }

    reader.readAsDataURL(file)
  }
  cancelar() {
    this.contatoForm.reset();
    this.router.navigateByUrl('/lista-contatos');
  }

}


