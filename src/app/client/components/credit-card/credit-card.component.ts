import { Component, Input } from '@angular/core';
import { Credit } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styles: [
    `
      mat-card {
        margin-top: 20px;
      }
    `,
  ],
})
export class CreditCardComponent {
  @Input() credit!: Credit;
}
