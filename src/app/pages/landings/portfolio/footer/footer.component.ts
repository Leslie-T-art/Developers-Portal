import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  today: Date = new Date();

  constructor () { }

  ngOnInit(): void {
  }

}
