import { Component } from '@angular/core';
import { coin } from '../../models/coins.model';
import { CoinsService } from './coins.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  coins: coin[] = [];
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  nums: number[] = [1, 2, 3, 4, 5, 6];
  error: string = '';
  isLoading: boolean = false;

  constructor(private coinsService: CoinsService) {}

  ngOnInit(): void {
    this.loadCoins(1);
  }

  loadCoins(page: number) {
    this.isLoading = true;
    this.coinsService.getAllcoins(page).subscribe({
      next: (responseData) => {
        this.coins = responseData;
        this.nums = [];
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Try again later.';
        this.nums = [];
        this.isLoading = false;
        console.log(err);
      },
    });
  }
}
