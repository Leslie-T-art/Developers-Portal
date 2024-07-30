import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from "feather-icons";

// types
import { FAQItem } from 'src/app/shared/widgets/faq/faq.model';
import { HelpLink } from './help.model';

// data
import { FAQS } from 'src/app/shared/widgets/faq/data';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  faqs: FAQItem[] = [];
  helpLinks: HelpLink[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Prompt - Angular | Get all Help");
    this._fetchData();
  }

  ngAfterViewInit(): void {
    feather.replace();
  }

  _fetchData(): void {
    this.faqs = FAQS;
    this.helpLinks = [
      {
        icon: 'terminal',
        title: 'Getting started',
        links: ['General information', 'Signup help', 'Preparing the documents'],
      },
      {
        icon: 'user',
        title: 'Managing my account',
        links: ['Account information', 'Identity verification', 'Linking a paymeny method'],
      },
      {
        icon: 'git-merge',
        title: 'API & Integrations',
        links: ['Rest API Integrations', 'API SDKs', 'Embed scripts'],
      },
    ];
  }


}
