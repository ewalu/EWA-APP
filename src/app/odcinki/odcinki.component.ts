import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/';
import { TvmazeService } from '../services/tvmaze.service';
import { Episode, Show } from '../services/tv.models';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { PodsumowanieComponent } from './podsumowanie/podsumowanie.component';

@Component({
  selector: 'app-odcinki',
  templateUrl: './odcinki.component.html',
  styleUrls: ['./odcinki.component.css'],
  providers: [TvmazeService]
})
export class OdcinkiComponent implements OnInit {

  id: String;
  name: String;
  odcinki: Observable<Episode[]>;
  displayedColumns = ['sezon', 'nazwa', 'data','podsumowanie'];

  constructor(private route: ActivatedRoute, 
    private service: TvmazeService,
  public dialog: MatDialog) { }

  ngOnInit() {
    this.id = atob(this.route.snapshot.params['id']);
    this.odcinki = this.service.odcinki(this.id);
  }

  summary(odcinek: Episode){
    let dialogRef = this.dialog.open(PodsumowanieComponent,{
      width: '250px',
      data: odcinek
    });
  }

}
