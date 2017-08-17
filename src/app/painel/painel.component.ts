import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "painel",
    templateUrl: "./painel.component.html"
})
export class PainelComponent implements OnInit {
    @Input()
    titulo: string;

    constructor() {
       
    }

    ngOnInit(): void {
        if (this.titulo) {
            this.titulo = (this.titulo.length > 7 ? this.titulo.substr(0,7) + "..." : this.titulo)
        }
    }
}
