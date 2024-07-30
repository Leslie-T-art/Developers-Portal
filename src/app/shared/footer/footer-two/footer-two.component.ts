import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-2',
  templateUrl: './footer-two.component.html',
  styleUrls: ['./footer-two.component.scss']
})
export class FooterTwoComponent implements OnInit {

  today: Date = new Date();

  constructor () { }

  ngOnInit(): void {
  }

}
