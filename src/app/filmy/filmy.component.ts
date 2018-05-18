import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../services/tv.models';
import { ByloSzukanieService } from '../services/bylo-szukanie.service';

@Component({
  selector: 'app-filmy',
  templateUrl: './filmy.component.html',
  styleUrls: ['./filmy.component.css']
})
export class FilmyComponent implements OnInit {

  @Input() wyszukaneFilmy: Array<Show>;
  wybranyFilm: Show;

  @Output() selected = new EventEmitter();

  constructor(private szukanie: ByloSzukanieService) {
    szukanie.data$.subscribe(item => {
      console.log(item);
      this.wybranyFilm = null;
    })
   }

  ngOnInit() {
  }

  czyRozwiniety(): boolean {
    return this.wyszukaneFilmy.length > 0 ? true : false;
  }
  wybierz(film: Show){
    this.wybranyFilm = film;
    this.selected.emit(this.wybranyFilm);
  }

}
