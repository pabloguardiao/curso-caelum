import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
  //,encapsulation: ViewEncapsulation.None
})
export class FotoComponent {

  _id = '';

  @Input()
  titulo = '';

  @Input()
  url = '';

  descricao = '';
}
