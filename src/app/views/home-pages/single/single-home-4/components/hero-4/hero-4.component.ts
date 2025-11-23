import { Component, inject, ViewChild, type TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hero-4',
  imports: [NgbModalModule,RouterLink],
  templateUrl: './hero-4.component.html',
  styles: ``
})
export class Hero4Component {
    @ViewChild('videoModal') videoModalRef!: TemplateRef<any>;

    private modalService = inject(NgbModal)

    openVideoModal() {
        this.modalService.open(this.videoModalRef, { centered: true, size: 'lg' });
    }
}
