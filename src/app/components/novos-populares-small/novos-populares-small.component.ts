import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novos-populares-small',
  templateUrl: './novos-populares-small.component.html',
  styleUrls: ['./novos-populares-small.component.css']
})
export class NovosPopularesSmallComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
