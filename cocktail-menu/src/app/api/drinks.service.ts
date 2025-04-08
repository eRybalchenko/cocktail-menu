import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IDrink {
  idDrink: string,
  strDrink: string,
  strGlass: string,
  strDrinkThumb: string,
  strInstructions: string,
}

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  private http = inject(HttpClient);

  public getAll(): Observable<any> {
    const params = { f: 'a' };

    return this.http.get('https://thecocktaildb.com/api/json/v1/1/search.php', { params });
  }

  public search(query: string): Observable<any> {
    const params = { s: query };

    return this.http.get('https://thecocktaildb.com/api/json/v1/1/search.php', { params });
  }

  public getById(id: string): Observable<any> {
    const params = { i: id };

    return this.http.get('https://thecocktaildb.com/api/json/v1/1/lookup.php?', { params });
  }

  public getRandom(): Observable<any> {
    return this.http.get('https://thecocktaildb.com/api/json/v1/1/random.php');
  }
}
