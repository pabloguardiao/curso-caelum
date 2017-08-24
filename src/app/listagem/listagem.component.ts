import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { Foto } from "../foto/foto";

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {

  title = 'Caelum Pic';
  fotos: Foto[] = [];
  service: FotoService;
  mensagem = '';

  constructor(service: FotoService) {
    this.service = service;
    this.service.lista().subscribe(fotos => { this.fotos = fotos; });
  }

  remove(foto: Foto) {
    // alert(foto.titulo);
    this.service.remove(foto).subscribe(
      () => {
        console.log('Removido');
        const novasFotos = this.fotos.slice(0);
        const index = novasFotos.indexOf(foto);
        novasFotos.splice(index, 1);
        this.fotos = novasFotos;
        this.mensagem = 'Foto removida com sucesso!';
      },
      err => { console.log(err); }
    );
  }
}
