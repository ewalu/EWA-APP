import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Show } from './services/tv.models';

@Injectable()
export class UlubioneService {

  private ulubione: Array<Show> = [];

  private subject = new Subject<number>();

  data$ = this.subject.asObservable();

  constructor() { }

  dodajDoUlubionych(ulubiony: Show){
    this.ulubione.push(ulubiony);
    this.subject.next(this.ulubione.length);
  }

}
