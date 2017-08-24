import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Foto } from "./foto";

@Component({
  selector: 'foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
  //,encapsulation: ViewEncapsulation.None
})
export class FotoComponent {
  
  foto: Foto;

  @Input()
  url = '';

}
