import { NgModule } from '@angular/core';

import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipe';
import { FotoService } from './foto.service';
import { Foto } from "./foto";

@NgModule({
  declarations: [ FotoComponent, FiltroPorTitulo ],
  exports: [ FotoComponent, FiltroPorTitulo ],
  providers: [ FotoService, Foto ]
})
export class FotoModule { }
