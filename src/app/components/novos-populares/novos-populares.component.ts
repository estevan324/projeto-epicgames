import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novos-populares',
  templateUrl: './novos-populares.component.html',
  styleUrls: ['./novos-populares.component.css']
})
export class NovosPopularesComponent implements OnInit {

  jogosLancamento = [
    {
      id: 0,
      capa:'assets/populares/n1.jpeg',
      nome: 'Chivalry 2',
      preco: 'R$ 75,99',
    },
    {
      id: 1,
      capa:'assets/populares/n2.jpeg',
      nome:'Open Country',
      preco:'R$ 56,99',
    },
    {
      id: 2,
      capa:'assets/populares/n3.jpeg',
      nome:'Chicory: A Colorful Tale',
      preco:'R$ 37,99',
    },
    {
      id: 3,
      capa:'assets/populares/n4.jpeg',
      nome:'Galactic Civilizations IV',
      preco:'R$ 75,49',
    },
    {
      id: 4,
      capa:'assets/populares/n5.jpeg',
      nome:'Edge of Eternity',
      desconto: '-15%',
      precoAntigo:'R$ 63,99',
      preco:'R$ 54,39'
    }
  ]

  jogosVendidos = [
    {
      id: 0,
      capa:'assets/populares/p1.jpeg',
      nome: 'Chivalry 2',
      preco: 'R$ 75,99',
    },
    {
      id: 1,
      capa:'assets/populares/p2.jpg',
      nome:'Red Dead Redemption 2',
      desconto:'-33%',
      precoAntigo: 'R$ 239',
      preco:'R$ 160,13',
    },
    {
      id: 2,
      capa:'assets/populares/p3.webp',
      nome:"Assassin's Creed: Vanhalla",
      desconto:'-25%',
      precoAntigo: 'R$ 119,99',
      preco:'R$ 149,99',
    },
    {
      id: 3,
      capa:'assets/populares/p4.jpeg',
      nome:'NBA 2K21',
      desconto:'-74%',
      precoAntigo: 'R$ 249,90',
      preco:'R$ 64,97',
    },
    {
      id: 4,
      capa:'assets/populares/p5.webp',
      nome:'Grand Theft Auto V: Premium Edition',
      desconto:'-45%',
      precoAntigo: 'R$ 69,99',
      preco:'R$ 38,49'
    }
  ]

  jogosEmBreve = [
    {
      id: 0,
      capa:'assets/populares/b1.jpeg',
      nome: 'Jurassic World Evolution 2',
      preco: 'Em breve',
    },
    {
      id: 1,
      capa:'assets/populares/b2.jpeg',
      nome:"Tiny Tina's Wonderlands",
      preco:'Em breve',
    },
    {
      id: 2,
      capa:'assets/populares/b3.webp',
      nome:'Disciples: Liberation',
      desconto: '-10%',
      precoAntigo: 'R$ 79',
      preco:'R$ 71,10',
    },
    {
      id: 3,
      capa:'assets/populares/b4.jpeg',
      nome:'Pathfinder: Wrath of Righteous',
      preco:'Em breve',
    },
    {
      id: 4,
      capa:'assets/populares/b5.jpeg',
      nome:'Yakuza Empire',
      preco:'Em breve'
    }
  ]

  jogosNovos = [
    {
      id: 0,
      capa:'assets/populares/novosPopulares/novo1.jpeg',
      nome:'WE ARE FOOTBALL',
      desenvolvedor: 'THQ Nordic GmbH',
      preco:'R$ 59,39'
    },
    {
      id: 1,
      capa:'assets/populares/novosPopulares/novo2.jpeg',
      nome:"Sid Meier's Civilization VI",
      desenvolvedor: 'Firaxis games',
      desconto: '-50%',
      precoAntigo: 'R$ 279',
      preco:'R$ 139,50'
    },
    {
      id: 2,
      capa:'assets/populares/novosPopulares/novo3.jpeg',
      nome:'Genshin Impact',
      desenvolvedor: 'miHoYo Limited',
      preco:'Gratuito'
    },
    {
      id: 3,
      capa:'assets/populares/novosPopulares/novo4.jpeg',
      nome:'Edge Of Eternity',
      desenvolvedor: 'Plug In Digital SAS',
      preco:'R$ 63,99'
    },
    {
      id: 4,
      capa:'assets/populares/novosPopulares/novo5.jpeg',
      nome:'Frostpunk',
      desenvolvedor: '11 bit studios',
      preco:'R$ 19,37'
    }
  ]

  jogosPopulares = [
    {
      id: 0,
      capa:'assets/populares/novosPopulares/popular1.jpeg',
      nome:'Fortnite',
      desenvolvedor: 'Epic Games',
      preco:'Gratuito'
    },
    {
      id: 1,
      capa:'assets/populares/novosPopulares/popular2.jpg',
      nome:"Rocket League®",
      desenvolvedor: 'Psyonix LLC',
      preco:'Gratuito'
    },
    {
      id: 2,
      capa:'assets/populares/novosPopulares/popular3.webp',
      nome:'Grand Theft Auto V',
      desenvolvedor: 'Rockstar Games',
      preco:'R$ 69,99'
    },
    {
      id: 3,
      capa:'assets/populares/novosPopulares/popular4.jpeg',
      nome:'Control',
      desenvolvedor: 'Remedy Entertainment',
      preco:'R$ 113,99'
    },
    {
      id: 4,
      capa:'assets/populares/novosPopulares/popular5.jpeg',
      nome:'Among Us',
      desenvolvedor: 'Innersloth | Innersloth',
      preco:'R$ 7,99'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
