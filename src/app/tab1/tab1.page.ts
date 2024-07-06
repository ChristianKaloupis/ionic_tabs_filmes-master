import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router,
                    public alertController: AlertController,
                    public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Morbius',
      lancamento: '31/03/2022 (BR)',
      duracao: '1h45m',
      classificacao: 6,
      cartaz: 'https://pbs.twimg.com/media/FLKPHBjWUAA4cO3.jpg:large',
      generos: ['Ficção científica', 'Fantasia', 'Ação'],
      pagina: '/morbius',
      favorito: false
    },
    {
      nome: 'Homem-Aranha: Sem Volta Para Casa',
      lancamento: '16/12/2021 (BR)',
      duracao: '2h29m',
      classificacao: 8,
      cartaz: 'https://br.web.img3.acsta.net/c_310_420/pictures/21/11/08/16/02/3963914.png',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/miranha',
      favorito: false
    },
    {
      nome: 'Os Carrinhos em: A Grande Corrida',
      lancamento: '20/06/2006 (US)',
      duracao: '33m',
      classificacao: 3,
      cartaz: 'https://media.fstatic.com/NIBEplQxQFDkjX9p2DQyE56Fjw4=/290x478/smart/media/movies/covers/2013/06/None_tNone_5.jpg',
      generos: ['Animação', 'Família'],
      pagina: '/cars',
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
      message: 'Deseja realmente favoritar o filme?',
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
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
