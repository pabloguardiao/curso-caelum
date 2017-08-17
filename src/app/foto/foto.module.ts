import { NgModule } from '@angular/core';

import { FotoComponent } from './foto.component';
import { FotoPipe } from './foto.pipe';

@NgModule({
  declarations: [ FotoComponent, FotoPipe ],
  exports: [ FotoComponent ]
})
export class FotoModule { }
