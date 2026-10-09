import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { ContactFormService } from '@core/services/contact-form.service';

@Component({
  selector: 'app-contact',
  imports: [PageHeaderComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styles: ``
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactFormService);

  form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    apellido: [''],
    telefono: ['', [Validators.required, Validators.pattern(/^[+\d][\d\s()-]{6,19}$/)]],
    correo: ['', [Validators.required, Validators.email]],
    servicio: ['', [Validators.required]],
    mensaje: [''],
    autorizacion: [false, [Validators.requiredTrue]],
    // Trampa para bots: un usuario real nunca ve ni llena este campo.
    sitioWeb: [''],
  });

  estado = signal<'inactivo' | 'enviando' | 'enviado' | 'error'>('inactivo');

  invalido(campo: string): boolean {
    const control = this.form.get(campo);
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  async enviar() {
    if (this.estado() === 'enviando') return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { sitioWeb, autorizacion, ...datos } = this.form.getRawValue();

    // Si el campo trampa viene lleno es un bot: se simula éxito sin enviar nada.
    if (sitioWeb) {
      this.estado.set('enviado');
      return;
    }

    this.estado.set('enviando');
    try {
      await this.contactService.send(datos);
      this.estado.set('enviado');
      this.form.reset();
    } catch {
      this.estado.set('error');
    }
  }
}
