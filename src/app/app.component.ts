import { Component } from '@angular/core';
import { HostListener } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p3-hp';

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
      document.getElementById('wrapper').style.backgroundAttachment = 'scroll';
      document.getElementById('wrapper').style.marginTop = '2000px';
      document.getElementById('footer_main').style.marginTop = '1085px';
    }
    else {
      document.getElementById('wrapper').style.backgroundAttachment = 'fixed';
      document.getElementById('wrapper').style.marginTop = '0px';
      document.getElementById('footer_main').style.marginTop = '3000px';
    }
  } 
}
