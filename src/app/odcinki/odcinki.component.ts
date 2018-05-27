import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/';
import { TvmazeService } from '../services/tvmaze.service';
import { Episode } from '../services/tv.models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-odcinki',
  templateUrl: './odcinki.component.html',
  styleUrls: ['./odcinki.component.css'],
  providers: [TvmazeService]
})
export class OdcinkiComponent implements OnInit {

  id: String;
  odcinki: Observable<Episode[]>;
  displayedColumns = ['sezon', 'nazwa', 'data'];

  constructor(private route: ActivatedRoute, private service: TvmazeService) { }

  ngOnInit() {
    this.id = atob(this.route.snapshot.params['id']);
    this.odcinki = this.service.odcinki(this.id);
  }

}
