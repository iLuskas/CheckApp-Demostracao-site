import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/Email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formContato: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) { }

  ngOnInit(): void {
    this.createFormContato();
  }

  createFormContato() {
    this.formContato = this.fb.group({
      nome: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      telefone: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
      mensagem: ['', Validators.compose([Validators.required])],
    });
  }

  enviarEmail() {
    console.log('EMAILMODELO', this.formContato.value);
    if (this.emailService.onSendEmail(this.formContato.value)) {
      this.formContato.reset();
    }
  }

  isFieldInvalid(field: string) {
    return (
      (!this.formContato.get(field).valid &&
        this.formContato.get(field).touched) ||
      (this.formContato.get(field).untouched)
    );
  }

 public hasError = (field: string, errorName: string) => {
    return this.formContato.controls[field].hasError(errorName);
  }

}
