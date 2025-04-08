import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IDrink {
  idDrink: string,
  strDrink: string,
  strGlass: string,
  strDrinkThumb: string,
  strInstructions: string,
  strIngredient1: string,
  strIngredient2: string,
  strIngredient3: string,
  strIngredient4: string,
  strIngredient5: string,
  strIngredient6: string,
  strIngredient7: string,
  strIngredient8: string,
  strIngredient9: string,
  strIngredient10: string,
  strIngredient11: string,
  strIngredient12: string,
  strIngredient13: string,
  strIngredient14: string,
  strIngredient15: string,
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
