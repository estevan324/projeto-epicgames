import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.css']
})
export class PromocoesComponent implements OnInit {

  jogos = [
    {
      id: 0,
      imagem: 'assets/promo/p1.jpg',
      nome: 'Hitman 3',
      descricao: 'A morte à espreita. O Agente 47 retorna em HITMAN 3, o emocionante desfrecho da triologia World of Assassination',
      empresa: 'IQ Interactive A/S',
      desconto: '-35%',
      precoAntigo: 'R$ 113,99',
      preco: 'R$ 74,09'
    },
    {
      id: 1,
      imagem: 'assets/promo/p2.jpg',
      nome: 'Red Dead Redemption 2',
      descricao: 'Estados Unidos, 1899. Estados Unidos, 1899. Arthur Morgan e a gangue Van der Linde são forçados a fugir. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões internas profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que o criou.',
      empresa: 'Rockstar Games',
      desconto: '-33%',
      precoAntigo: 'R$ 239',
      preco: 'R$ 160,13'
    },
    {
      id: 2,
      imagem: 'assets/promo/p3.jpg',
      nome: 'Grand Theft Auto V',
      descricao: 'Quando um malandro de rua, um ladrão de bancos aposentado e um psicopata aterrorizante se veem encrencados, eles precisam realizar uma série de golpes ousados para sobreviver em uma cidade onde não podem confiar em ninguém, nem mesmo um no outro.',
      empresa: "Rockstar Games",
      desconto: '-45%',
      precoAntigo: 'R$ 69,99',
      preco: 'R$ 38,49'
    },
    {
      id: 3,
      imagem: 'assets/promo/p4.jpeg',
      nome: "Assassin's Creed: Valhalla",
      descricao: "Em Assassin's Creed Valhalla, parta numa missão épica em busca de glória na pele de Eivor, uma lenda viking. Explore a Inglaterra durante a Idade das Trevas e ataque seus inimigos, crie seu povoado e aumente seu poder político.",
      empresa: 'Ubisoft',
      desconto: '-25%',
      precoAntigo: 'R$ 199,99',
      preco: 'R$ 149,99'
    },
    {
      id: 4,
      imagem: 'assets/promo/p5.webp',
      nome: 'World War Z - GOTY Edition',
      descricao: 'A humanidade está à beira da extinção. De Nova York a Moscou, passando por Jerusalém, Tóquio e Marselha, o apocalipse zumbi continua se espalhando. Com o fim se aproximando, alguns corajosos se reúnem para derrotar a horda e sobreviver.',
      empresa: 'Saber Interactive',
      desconto: '-66%',
      precoAntigo: 'R$ 89,99',
      preco: 'R$ 29,23'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
