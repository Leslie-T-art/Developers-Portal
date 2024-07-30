import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-custom-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  iconSizes: string[] = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'];
  featherIcons: string[] = ['activity', 'shopping-bag', 'credit-card', 'message-square', 'map-pin', 'bell', 'calendar', 'map'];

  constructor () { }

  ngOnInit(): void {
  }

}
