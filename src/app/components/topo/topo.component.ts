import { MatMenuModule } from '@angular/material/menu';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  ngDoCheck(){
    let widthButton = document.getElementById('button')?.offsetWidth;

    let elems = document.getElementsByClassName('mat-menu-panel') as HTMLCollectionOf<HTMLElement>;
    for(let i = 0; i < elems.length; i++) {
      elems[i].style.width = widthButton+"px";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
