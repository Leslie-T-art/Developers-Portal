import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-1',
  templateUrl: './footer-one.component.html',
  styleUrls: ['./footer-one.component.scss']
})
export class FooterOneComponent implements OnInit {

  today: Date = new Date();

  constructor () { }

  ngOnInit(): void {
  }

}
