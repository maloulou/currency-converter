import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

export interface ExchangeHistory {
  realRate: number;
  fixedRate: number | null;
  from: { amount: number; currency: string };
  to: { amount: number; currency: string };
}

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  private rateSubject = new BehaviorSubject<number>(1.1);
  rate$ = this.rateSubject.asObservable();
  fixedRate: number | null = null;
  realRate: number = 1.1;
  history: ExchangeHistory[] = [];

  constructor() {
    interval(3000).subscribe(() => {
      if (this.fixedRate) {
        this.checkFixedRate();
      }
      this.updateRate();
    });
  }

  private updateRate() {
    const variation = (Math.random() - 0.5) * 0.1;
    const newRate = this.currentRate + variation;
    this.realRate = newRate; // The real rate should always be updated

    if (this.fixedRate) {
      this.rateSubject.next(this.fixedRate);
    } else {
      this.rateSubject.next(newRate);
    }
  }

  setFixedRate(rate: number) {
    this.fixedRate = rate;
    this.rateSubject.next(rate);
  }

  disableFixedRate() {
    this.fixedRate = null;
  }

  private checkFixedRate() {
    const percentageChange =
      Math.abs((this.currentRate - this.realRate) / this.currentRate) * 100;
    if (percentageChange > 2) {
      this.disableFixedRate();
      this.rateSubject.next(this.realRate); // reset to real rate
    }
  }

  addToHistory(history: ExchangeHistory) {
    if (this.history.length >= 5) {
      this.history.shift();
    }
    this.history.push(history);
  }

  getHistory() {
    return this.history;
  }

  get currentRate() {
    return this.rateSubject.value;
  }
}
