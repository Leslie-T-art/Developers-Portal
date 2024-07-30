import { Component, Input, OnInit } from '@angular/core';

// types
import { Coin } from '../crypto.model';

@Component({
  selector: 'app-crypto-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {

  @Input() coins: Coin[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
