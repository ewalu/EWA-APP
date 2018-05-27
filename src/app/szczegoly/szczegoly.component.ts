import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../services/tv.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-szczegoly',
  templateUrl: './szczegoly.component.html',
  styleUrls: ['./szczegoly.component.css']
})
export class SzczegolyComponent implements OnInit {

  @Input() film: Show;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  odcinki(){
    const id = btoa(String(this.film.id));
    this.router.navigate(['/odcinki', id]);
    /*const tmp = JSON.stringify({
      id: String(this.film.id),
      name: String(this.film.name)
    })
    this.router.navigate(['/odcinki', tmp]);*/
  }

}
