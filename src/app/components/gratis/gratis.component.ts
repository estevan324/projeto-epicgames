import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gratis',
  templateUrl: './gratis.component.html',
  styleUrls: ['./gratis.component.css']
})
export class GratisComponent implements OnInit {

  gratis = [
    {
      id: 0,
      capa: 'assets/gratis/gratis1.jpeg',
      status: 'GRÁTIS',
      nome: 'Genshin Impact',
      tempo: 'Grátis - 17 de jun. às 12:00'
    },
    {
      id: 1,
      capa: 'assets/gratis/gratis2.jpeg',
      status: 'GRÁTIS',
      nome: 'Control',
      tempo: 'Grátis - 17 de jun. às 12:00'
    },
    {
      id: 2,
      capa: 'assets/gratis/gratis3.jpeg',
      status: 'EM BREVE',
      nome: 'Hell is the other demons',
      tempo: 'Grátis - 17 de jun. - 24 de jun.'
    },
    {
      id: 3,
      capa: 'assets/gratis/gratis4.jpeg',
      status: 'EM BREVE',
      nome: 'Overcooked! 2',
      tempo: 'Grátis - 17 de jun. - 24 de jun.'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
