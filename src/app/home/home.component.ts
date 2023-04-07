import { Component } from '@angular/core';
import { coin } from '../models/coins.model';
import { CoinsService } from './coins.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  coins: coin[] = [];
  numbers = Array.from({length: 11}, (_, i) => i);

  constructor(private coinsService: CoinsService) {}

  ngOnInit(): void {
    this.loadCoins(1)
  }

  loadCoins(page : number){
    this.coinsService.getAllcoins(page).subscribe((responseData) => {
      this.coins = responseData;
    });
  }
}
