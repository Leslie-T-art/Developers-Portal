import { Component, OnInit } from '@angular/core';

// types
import { Variant } from '../../shared/docs.model';

@Component({
  selector: 'app-bootstrap-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  alertVariants1: Variant[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
  alertVariants2: Variant[] = ['primary', 'secondary', 'success',];
  alertVariants3: Variant[] = ['danger', 'warning', 'info'];

  constructor () { }

  ngOnInit(): void {
  }

  /**
  * closes alert
  * @param alert alert
  */
  closeAlert(alert: Variant): void {
    this.alertVariants1.splice(this.alertVariants1.indexOf(alert), 1);
  }

  /**
   * closes filled alert
   * @param alert alert
   */
  closeFilledAlert(alert: Variant): void {
    this.alertVariants3.splice(this.alertVariants3.indexOf(alert), 1);
  }

}
