import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Foto } from "../foto/foto";

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

  private foto: Foto = new Foto();
  // service: FotoService;
  private meuForm: FormGroup;
  // route: ActivatedRoute;
  mensagem = '';
  // router: Router;
  
  constructor(private service: FotoService, private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router) {
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
            this.foto = new Foto();
            if (!res.inclusao) {
              this.router.navigate(['']);

            };
          }, //this.foto = new Foto(),
          err => { console.log(err); }
        );
  }
}
