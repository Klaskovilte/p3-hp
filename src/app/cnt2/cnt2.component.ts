import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-cnt2',
  templateUrl: './cnt2.component.html',
  styleUrls: ['./cnt2.component.css']
})
export class Cnt2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    if (document.body.scrollTop > 2150 || document.documentElement.scrollTop > 2150) {
      document.getElementById('cnt2wrap').style.position = 'absolute';
      document.getElementById('cnt2wrap').style.marginTop = '350px';
    }
    else if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
      document.getElementById('cnt2wrap').style.position = 'fixed';
      document.getElementById('cnt2wrap').style.marginTop = '-1800px';
    }
    else if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
      document.getElementById('cnt2wrap').style.position = 'fixed';
      document.getElementById('cnt2wrap').style.marginTop = '200px';
    }
    else {
      document.getElementById('cnt2wrap').style.marginTop = '1400px';
      document.getElementById('cnt2wrap').style.position = 'absolute';
    }
  } 

}
