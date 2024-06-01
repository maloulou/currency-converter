import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss'],
})
export class ExchangeRateComponent implements OnInit {
  rate: number = 1.1;

  constructor(private exchangeService: ExchangeService) {}

  ngOnInit(): void {
    this.exchangeService.rate$.subscribe((rate) => (this.rate = rate));
  }

  setFixedRate(rate: string) {
    this.exchangeService.setFixedRate(parseFloat(rate));
  }
}
