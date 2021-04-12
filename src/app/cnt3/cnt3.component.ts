import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-cnt3',
  templateUrl: './cnt3.component.html',
  styleUrls: ['./cnt3.component.css']
})
export class Cnt3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
      document.getElementById('cnt3wrap').style.marginTop = '500px';
    }
    else {
      document.getElementById('cnt3wrap').style.marginTop = '2500px';
    }
  } 

}
