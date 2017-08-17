import { Component } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { Http, Headers } from "@angular/http";

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

  foto: FotoComponent = new FotoComponent();
  http: Http;
  constructor(http: Http) {
    this.http = http;
  }

  cadastrar(event: Event) {
    // event.preventDefault();
    // alert(JSON.stringify(this.foto));
    let headers = new Headers();
    headers.append("content-type","application/json");
    this.http.post("http://localhost:3000/v1/fotos",
      JSON.stringify(this.foto), {headers})
      .subscribe(
          ()=>this.foto = new FotoComponent(),
          err=>console.log(err));
  }
}