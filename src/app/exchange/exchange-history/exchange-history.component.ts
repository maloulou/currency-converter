import { Component } from '@angular/core';
import { ExchangeHistory, ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'app-exchange-history',
  templateUrl: './exchange-history.component.html',
  styleUrls: ['./exchange-history.component.scss'],
})
export class ExchangeHistoryComponent {
  constructor(private exchangeService: ExchangeService) {}
  historyList: ExchangeHistory[] = this.exchangeService.history;
}
