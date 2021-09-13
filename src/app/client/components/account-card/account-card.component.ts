import { Component, Input } from '@angular/core';
import { Account } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styles: [
    `
      mat-card {
        margin-top: 20px;
      }
    `,
  ],
})
export class AccountCardComponent {
  @Input() account!: Account;
}
