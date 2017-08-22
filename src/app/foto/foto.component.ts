import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'foto',
  templateUrl: './foto.component.html',
  styleUrls: ["./foto.component.css"]
  //,encapsulation: ViewEncapsulation.None
})
export class FotoComponent {

  _id: string = "";
  
  @Input()
  titulo: string = "";

  @Input()
  url: string = "";

  descricao: string = "";
}
