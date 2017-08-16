import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {
  title: string = 'Caelum Pic';
  fotos: Object[] = [];
  
  constructor(http: Http) {
    http.get("http://localhost:3000/v1/fotos")
      .map(res => res.json())
      .subscribe(fotos => { this.fotos = fotos }); 
  }
}
