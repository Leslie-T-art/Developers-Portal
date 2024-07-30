import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-3',
  templateUrl: './footer-three.component.html',
  styleUrls: ['./footer-three.component.scss']
})
export class FooterThreeComponent implements OnInit {

  today: Date = new Date();

  constructor () { }

  ngOnInit(): void {
  }

}
