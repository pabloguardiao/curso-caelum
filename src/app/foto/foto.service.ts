import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';

@Injectable()
export class FotoService {

    http: Http;
    headers: Headers;
    url = 'http://localhost:3000/v1/fotos';

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.set('Content-Type', 'application/json');
    }

    lista(): Observable<FotoComponent[]> {

        return this.http.get(this.url).map(res => res.json());
    }

    cadastra(foto: FotoComponent): Observable<Response> {

        const headers = this.headers;

        if (foto._id) {
            return this.http.put(this.url + '/' + foto._id,
                JSON.stringify(foto), { headers });
        } else {
            return this.http.post(this.url, JSON.stringify(foto), { headers });
        }
    }

    remove(foto: FotoComponent) {
        return this.http.delete(this.url + '/' + foto._id);
    }

    buscaPorId(id: string) {
        return this.http.get(this.url + '/' + id).map(res => res.json());
    }
}
