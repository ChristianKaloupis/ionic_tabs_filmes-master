import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

listaFilmes: IFilme[] = [
{
nome: 'Cavaleiro da Lua (2022)',
lancamento: '30/05/2022',
duracao: '47m',
classificacao: 8,
cartaz: 'https://lumiere-a.akamaihd.net/v1/images/d_moon_knight_-_poster_3_bpo_ec2d9dfd.png',
generos: ['Ação', 'Fantasia', 'Mistério'],
pagina: '/moonkinight',
favorito: false
},
{
nome: 'The Boys (2019)',
lancamento: '26/07/2019',
duracao: '1h',
classificacao: 8,
cartaz: 'https://rotacult.com.br/wp-content/uploads/2020/08/The-Boys-ganha-trailer-e-cartazes-oficiais-da-segunda-temporada-2.jpg',
generos: ['Aventura', 'Fantasia', 'Ação'],
pagina: '/boys',
favorito: false
},
{
nome: 'Pantanal (2022)',
lancamento: '28/03/2022',
duracao: '1h30m',
classificacao: 4,
cartaz: 'https://upload.wikimedia.org/wikipedia/pt/b/ba/Logotipo_de_Pantanal_%282022%29.jpg',
generos: ['Drama', 'Soap'],
pagina: '/pantanal',
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
message: 'Deseja realmente favoritar a série?',
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
message: 'Série adicionada aos favoritos...',
duration: 2000,
color: 'success',
position: 'top'
});
toast.present();
}

}
