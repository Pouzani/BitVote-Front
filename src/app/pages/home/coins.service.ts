import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { coin } from '../../models/coins.model';
import { coinApiUrl } from '../../environement/api';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  constructor(private http: HttpClient) {}

  getAllcoins(page: number): Observable<coin[]> {
    let coinsParams = new HttpParams();
    coinsParams = coinsParams.append('vs_currency', 'usd');
    coinsParams = coinsParams.append('order', 'market_cap_desc');
    coinsParams = coinsParams.append('per_page', '6');
    coinsParams = coinsParams.append('page', page.toString());
    coinsParams = coinsParams.append('sparkline', 'false');
    return this.http.get<coin[]>(`${coinApiUrl}/coins/markets`, {
      params: coinsParams,
    });
  }
}
