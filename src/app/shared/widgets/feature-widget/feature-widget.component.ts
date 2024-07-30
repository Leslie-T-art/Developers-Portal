import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-feature-widget',
  templateUrl: './feature-widget.component.html',
  styleUrls: ['./feature-widget.component.scss']
})
export class FeatureWidgetComponent implements OnInit {


  @Input() icon: string = '';
  @Input() iconBg: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() descrpClasses?: string = '';

  constructor (private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  /**
   * returns the safe content which can be rendered
   * @param content string
   */
  getRenderedIconContent(path: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(path);
  }

}
