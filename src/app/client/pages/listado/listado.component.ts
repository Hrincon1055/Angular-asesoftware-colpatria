import { Component, OnInit } from '@angular/core';
import { Account, Credit } from '../../interfaces/cliente.interface';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {
  public accounts!: Account[];
  public credits!: Credit[];
  constructor(private clientService: ClientsService) {}

  ngOnInit(): void {
    this.clientService
      .getAccount()
      .subscribe((accounts) => (this.accounts = accounts));

    this.clientService
      .getCreditCard()
      .subscribe((credits) => (this.credits = credits));
  }
}
// console.log(client[0].accounts)
