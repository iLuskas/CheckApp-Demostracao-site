import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ModeloContato } from '../models/ModeloContato';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class EmailService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }


  onSendEmail(modeloContato: ModeloContato): boolean {
    const data = {
      service_id: 'smtp_server',
      template_id: 'template_IN7l7MUh',
      user_id: 'user_uNaXe90qNESZPTgAylkUE',
      template_params: {
        nome: modeloContato.nome,
        email: modeloContato.email,
        telefone: modeloContato.telefone,
        mensagem: modeloContato.mensagem
      },
    };

    this.http
      .post('https://api.emailjs.com/api/v1.0/email/send', data, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
            this.showMessage('Mensagem enviada com sucesso!');
            return true;
        },
        (error: HttpErrorResponse) => {
            this.showMessage('Oops... ' + error.message, true);
            return false;
        }
      );
    return false;
  }
}
