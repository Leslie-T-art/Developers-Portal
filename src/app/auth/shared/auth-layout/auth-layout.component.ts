import { Component, Input, OnInit } from '@angular/core';
import feather from 'feather-icons';

// types
import { AuthSlider } from 'src/app/shared/widgets/slider/slider.model';

// data
import { SLIDES1 } from 'src/app/shared/widgets/slider/data';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  @Input() hasSlider?: boolean = false;
  sliderItems: AuthSlider[] = SLIDES1;

  constructor () { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // feather icon
    feather.replace();
  }


}
