import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    htpp: Http;

    constructor(http: Http) {
        this.htpp = http;
    }

    cadastrar($event) {
        event.preventDefault();
        console.log(this.foto);

        let header = new Headers();
        header.append('Content-type', 'aplication/json');
        this.htpp
            .post('v1/fotos', JSON.stringify(this.foto), { headers: header })
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log("Foto salva com sucesso!");
            }, erro => 
                console.log(erro)
            );
    }
}