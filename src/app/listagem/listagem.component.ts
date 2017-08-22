import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from "../foto/foto.component";

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {
  
  title = 'Caelum Pic';
  fotos: Object[] = [];
  service: FotoService;
  mensagem: string = '';
  
  constructor(service: FotoService) {
    this.service = service;
    this.service.lista().subscribe(fotos => { this.fotos = fotos; });
  }

  remove(foto: FotoComponent) {
    // alert(foto.titulo);
    this.service.remove(foto).subscribe(
      ()=> { 
        console.log('Removido'); 
        let novasFotos = this.fotos.slice(0);
        let index = novasFotos.indexOf(foto);
        novasFotos.splice(index, 1);
        this.fotos = novasFotos;
        this.mensagem = 'Foto removida com sucesso!';
      },
      err=>{ console.log(err); }
    );
  }
}
