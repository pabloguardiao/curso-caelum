import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
    //,encapsulation: ViewEncapsulation.None
})
export class PainelComponent implements OnInit {
    @Input()
    titulo: string;

    constructor() {

    }

    ngOnInit(): void {
        if (this.titulo) {
            this.titulo = (this.titulo.length > 7 ? this.titulo.substr(0, 7) + '...' : this.titulo);
        }
    }
}
