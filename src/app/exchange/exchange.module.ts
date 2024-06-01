import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExchangeHistoryComponent } from './exchange-history/exchange-history.component';
import { ExchangeInputComponent } from './exchange-input/exchange-input.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';

@NgModule({
  declarations: [
    ExchangeHistoryComponent,
    ExchangeInputComponent,
    ExchangeRateComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ExchangeHistoryComponent,
    ExchangeInputComponent,
    ExchangeRateComponent,
  ],
})
export class ExchangeModule {}
