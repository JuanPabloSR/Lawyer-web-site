import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Paginación. Con `totalPages` es funcional (página actual en `page`, evento `pageChange`).
 * Sin `totalPages` muestra la maqueta estática original de la plantilla.
 */
@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styles: ``
})
export class PaginationComponent {
  @Input() totalPages?: number;
  @Input() page = 1;
  @Output() pageChange = new EventEmitter<number>();

  get pages(): number[] {
    return Array.from({ length: this.totalPages ?? 0 }, (_, i) => i + 1);
  }

  label(n: number): string {
    return n < 10 ? '0' + n : String(n);
  }

  go(n: number) {
    if (!this.totalPages || n < 1 || n > this.totalPages || n === this.page) return;
    this.pageChange.emit(n);
  }
}
