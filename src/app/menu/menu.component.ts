import { Component, OnInit } from '@angular/core';
import { UlubioneService } from '../ulubione.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  liczbaulubionych = 0;

  constructor(private ulubione: UlubioneService) { 
    ulubione.data$.subscribe(value => this.liczbaulubionych = value)
  }

  ngOnInit() {
  }

}
