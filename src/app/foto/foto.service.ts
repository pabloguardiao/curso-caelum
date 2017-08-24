import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';
import { Foto } from "./foto";

@Injectable()
export class FotoService {

    private headers: Headers;
    private url = 'http://localhost:3000/v1/fotos';
    // a: Foto;
    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.set('Content-Type', 'application/json');
    }

    lista(): Observable<Foto[]> {

        return this.http.get(this.url).map(res => res.json());
    }

    cadastra(foto: Foto): Observable<MensagemCadastro> {

        const headers = this.headers;
        if (foto._id) {
            return this.http.put(this.url + '/' + foto._id,
                JSON.stringify(foto), { headers })
                .map(() => new MensagemCadastro('Foto alterada'));
        } else {
            return this.http.post(this.url, JSON.stringify(foto), { headers })
                .map(() => new MensagemCadastro('Foto Incluida', true));
        }
    }

    remove(foto: Foto) {
        return this.http.delete(this.url + '/' + foto._id);
    }

    buscaPorId(id: string) {
        return this.http.get(this.url + '/' + id).map(res => res.json());
    }
}

export class MensagemCadastro {

    constructor(private _mensagem: string, private _inclusao: boolean = false) { }

    get mensagem() {
        return this._mensagem;
    }
    get inclusao() {
        return this._inclusao;
    }
    // set inclusao(value:boolean) {
    //     this._inclusao = value;
    // }
}