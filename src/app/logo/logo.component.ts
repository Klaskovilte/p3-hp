import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core'

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
      document.getElementById('Logo').style.marginTop = '-1960px';
    }
    else {
      document.getElementById('Logo').style.marginTop = '40px';
    }
  } 

}
