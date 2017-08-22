import { Component } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { Http, Headers } from "@angular/http";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FotoService } from "../foto/foto.service";

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

  foto: FotoComponent = new FotoComponent();
  service: FotoService;
  meuForm: FormGroup;
  
  constructor(service: FotoService, fb: FormBuilder) {
    this.service = service;
    this.meuForm = fb.group({titulo:["", Validators.compose(
      [Validators.required, Validators.minLength(4)])], 
      url:[""], descricao:[""]
    });
  }

  cadastrar(event: Event) {
    this.service.cadastra(this.foto)
      .subscribe(
          ()=>{ 
            console.log('OK');
            this.foto = new FotoComponent();
          }, //this.foto = new FotoComponent(),
          err=>{ console.log(err) }
        );
  }
}