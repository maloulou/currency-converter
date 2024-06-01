import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'app-exchange-input',
  templateUrl: './exchange-input.component.html',
  styleUrls: ['./exchange-input.component.scss'],
})
export class ExchangeInputComponent implements OnInit {
  amount: number = 0;
  result: number = 0;
  currency: 'EUR' | 'USD' = 'EUR';

  constructor(private exchangeService: ExchangeService) {}

  ngOnInit(): void {
    this.exchangeService.rate$.subscribe(() => this.convert());
  }

  switchCurrency() {
    this.currency = this.currency === 'EUR' ? 'USD' : 'EUR';
    const temp = parseFloat(this.result.toFixed(2));
    this.result = this.amount;
    this.amount = temp;
    this.convert();
  }

  convert() {
    const rate = this.exchangeService.currentRate;
    if (this.currency === 'EUR') {
      this.result = this.amount * rate;
    } else {
      this.result = this.amount / rate;
    }
    this.exchangeService.addToHistory({
      realRate: rate,
      fixedRate: this.exchangeService.fixedRate,
      from: { amount: this.amount, currency: this.currency },
      to: {
        amount: this.result,
        currency: this.currency === 'EUR' ? 'USD' : 'EUR',
      },
    });
  }
}
