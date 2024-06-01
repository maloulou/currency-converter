import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExchangeModule } from './exchange/exchange.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExchangeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'currency-converter';
}
