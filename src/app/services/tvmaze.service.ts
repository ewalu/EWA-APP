import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show, Episode } from './tv.models';
import { ShowResponse } from './tv.models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TvmazeService {

  private readonly baseUrl = 'http://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  pobierz(szukany: string): Array<Show>{
    const url = `${this.baseUrl}/search/shows?q=${szukany}`;
    const result: Array<Show> = [];
    this.http.get<ShowResponse[]>(url).subscribe(
      item => {
        item.forEach(film => result.push(film.show))
      }
    )
    console.log(result);
    return result;
  }
  /*odcinki(id: any): Array<Episode>{
    const url = `${this.baseUrl}/shows/${id}/episodes`;
    const result: Array<Episode> = [];
    this.http.get<Episode[]>(url).subscribe(item => {
      console.log(item);
        item.forEach(odcinek => result.push(odcinek));
      }
    )
    return result;
  }*/

  odcinki(id: any): Observable<Episode[]>{
    const url = `${this.baseUrl}/shows/${id}/episodes`;
    return this.http.get<Episode[]>(url);
  }

}
