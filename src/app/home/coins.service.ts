import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { coin } from '../models/coins.model';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  private apiURL: string = 'https://api.coingecko.com/api/v3';
  constructor(private http: HttpClient) {}

  getAllcoins(page: number): Observable<coin[]> {
    let coinsParams = new HttpParams();
    coinsParams = coinsParams.append('vs_currency', 'usd');
    coinsParams = coinsParams.append('order', 'market_cap_desc');
    coinsParams = coinsParams.append('per_page', '7');
    coinsParams = coinsParams.append('page', page.toString());
    coinsParams = coinsParams.append('sparkline', 'false');
    return this.http.get<coin[]>(`${this.apiURL}/coins/markets`, {
      params: coinsParams,
    });
  }
}
