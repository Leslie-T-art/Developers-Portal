import { Component, Input, OnInit } from '@angular/core';

// types
import { FAQItem } from 'src/app/shared/widgets/faq/faq.model';

@Component({
  selector: 'app-help-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  @Input() faqs: FAQItem[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
