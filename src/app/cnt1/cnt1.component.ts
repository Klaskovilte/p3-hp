import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-cnt1',
  templateUrl: './cnt1.component.html',
  styleUrls: ['./cnt1.component.css']
})
export class Cnt1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      document.getElementById('cnt1wrap').style.marginTop = '-600px';
    }
    else {
      document.getElementById('cnt1wrap').style.marginTop = '400px';
    }
  } 

}
