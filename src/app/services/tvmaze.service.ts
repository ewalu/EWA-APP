import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from './tv.models';
import { ShowResponse } from './tv.models';

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

}
