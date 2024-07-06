import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

listaFilmes: IFilme[] = [
{
nome: 'Tom Holland',
lancamento: 'Thomas "Tom" Holland é um ator e dançarino inglês, mais conhecido por interpretar o papel principal em Billy Elliot the Musical no Victoria Palace Theatre',
duracao: '',
classificacao: 26,
cartaz: 'https://br.web.img3.acsta.net/pictures/19/07/01/23/18/1152169.jpg',
generos: ['Homem-Aranha: Sem Volta Para Casa', 'Venom: Tempo de Carnificina', 'Vingadores: Ultimato', 'Vingadores: Guerra Infinita'],
pagina: '/tomrola',
favorito: false
},
{
nome: 'Andrew Garfield',
lancamento: 'Andrew Russell Garfield (Los Angeles, 20 de agosto de 1983) é um ator anglo-americano. Nascido em Los Angeles, mudou-se a Epsom, no Reino Unido, quando tinha três anos.',
duracao: '',
classificacao: 38,
cartaz: 'https://br.web.img3.acsta.net/pictures/16/09/05/17/16/068414.jpg',
generos: ['Homem-Aranha: Sem Volta Para Casa', 'O Espetacular Homem-Aranha', 'O Espetacular Homem-Aranha 2: A Ameaça de Electro'],
pagina: '/andregarfo',
favorito: false
},
{
nome: 'Tobey Maguire',
lancamento: 'Tobias Vincent Maguire (nascido em 27 de junho de 1975) é um ator e produtor de cinema americano. Ele é mais conhecido por interpretar o personagem-título da trilogia Spider-Man',
duracao: '',
classificacao: 46,
cartaz: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Tobey_Maguire_2014.jpg',
generos: ['Homem-Aranha', 'Homem-Aranha 2', 'Homem-Aranha 3'],
pagina: '/tobey',
favorito: false
}
];
exibirFilme(filme: IFilme){
const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
this.router.navigate(['filme-detalhe'],navigationExtras);
}

async exibirAlertaFavorito(filme: IFilme) {
const alert = await this.alertController.create({

header: 'Meus Favoritos',
message: 'Deseja realmente favoritar o Autor?',
buttons: [
{
text: 'Não',
role: 'cancel',
handler: () => {
filme.favorito=false;
}
}, {
text: 'Sim, favoritar.',
handler: () => {
filme.favorito=true;
this.apresentarToast();
}
}
]
});
await alert.present();
}

async apresentarToast() {
const toast = await this.toastController.create({
message: 'Autor adicionado aos favoritos...',
duration: 2000,
color: 'success',
position: 'top'
});
toast.present();
}

}
