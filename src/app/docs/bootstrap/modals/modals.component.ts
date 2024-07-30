import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import feather from 'feather-icons';

@Component({
  selector: 'app-bootstrap-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  constructor (private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  /**
   * opens modal
   * @param content modal content
   */
  open(content: TemplateRef<NgbModal>): void {
    this.modalService.open(content);
  }

  /**
   * opens different size modals
   * @param content modal content
   * @param size size of modal
   */
  openModalWithSize(content: TemplateRef<NgbModal>, size: string): void {
    this.modalService.open(content, { size: size });
  }

  /**
   * opens scrollable modal for long content
   * @param content modal content
   */
  openScrollableModal(content: TemplateRef<NgbModal>): void {
    this.modalService.open(content, { scrollable: true });
  }

  /**
   * Opens the modal vertically centered
   * @param content modal content
   */
  openVerticallyCentered(content: TemplateRef<NgbModal>): void {
    this.modalService.open(content, { centered: true });
  }

  /**
 * opens modal based Alerts
 * @param content modal content
 */
  openAlertModal(content: TemplateRef<NgbModal>): void {
    this.modalService.open(content, { size: 'sm', centered: true });
    // feather icons
    feather.replace();
  }
}
