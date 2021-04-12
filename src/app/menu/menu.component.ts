import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
      document.getElementById('Menu').style.marginTop = '-1960px';
    }
    else {
      document.getElementById('Menu').style.marginTop = '40px';
    }
  } 

}
