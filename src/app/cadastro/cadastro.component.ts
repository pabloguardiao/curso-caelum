import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

  foto: FotoComponent = new FotoComponent();
  service: FotoService;
  meuForm: FormGroup;
  route: ActivatedRoute;
  mensagem = '';
  router: Router;
  
  constructor(service: FotoService, fb: FormBuilder,
  route: ActivatedRoute, router: Router) {
    this.service = service;
    this.meuForm = fb.group({titulo: ['', Validators.compose(
      [Validators.required, Validators.minLength(4)])],
      url: [''], descricao: ['']
    });
    this.route = route;
    this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.service.buscaPorId(id).subscribe(
          foto => { this.foto = foto; }
        );
      }
    });
    this.router = router;
  }
  
  cadastrar(event: Event) {
    this.service.cadastra(this.foto)
      .subscribe(
          res => {
            this.mensagem = res.mensagem;
            // console.log(res.mensagem);
            this.foto = new FotoComponent();
            if (!res.inclusao) {
              this.router.navigate(['']);

            };
          }, //this.foto = new FotoComponent(),
          err => { console.log(err); }
        );
  }
}
