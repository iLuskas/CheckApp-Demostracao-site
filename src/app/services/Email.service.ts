import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ModeloContato } from '../models/ModeloContato';

@Injectable()
export class EmailService {
  constructor(private http: HttpClient) {}

  onSendEmail(modeloContato: ModeloContato) {
    let data = {
      service_id: 'YOUR SERVICE ID',
      template_id: 'YOUR TEMPLATE',
      user_id: 'YOUR USER ID',
      template_params: {
        name: modeloContato.nome,
        emailAddress: modeloContato.email,
        message: modeloContato.mensagem
      },
    };

    this.http
      .post('https://api.emailjs.com/api/v1.0/email/send', data, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          alert('Your message has been sent!');
        },
        (error: HttpErrorResponse) => {
          alert('Oops... ' + error.message);
        }
      );
  }
}
