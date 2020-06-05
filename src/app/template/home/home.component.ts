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
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  cards: {title: string, img: string, text: string}[] = [
    {title: '1. Cadastro | Inventário', img: 'fundo-funcionalidade-item1.png', text: 'Cadastrando todos os equipamentos contra incêndio você terá criado automaticamente o inventário dos equipamentos, melhorando assim sua gestão.'},
    {title: '2. Gestão', img: 'fundo-funcionalidade-item2.png', text: 'Garante a gestão mensal e periódica dos equipamentos contra incêndio e emergência conforme normas vigentes.'},
    {title: '3. Check List', img: 'fundo-funcionalidade-item3.png', text: 'Permite a realização de check list conforme requisitos da NBR 12962:2016 item 5.1.1.'},
    {title: '4. Inspeção Garantida', img: 'fundo-funcionalidade-item4.png', text: 'Garante a inspeção por equipamento, com leitura de QRCode e selo do Inmetro nos extintores com inclusão obrigatória de foto de cada equipamento inspecionado com data e horário.'},
    {title: '5. Ocorrência com fotos', img: 'fundo-funcionalidade-item5.png', text: 'Garante o registro de ocorrências constatadas em inspeção mensal, com inclusão de fotos com data e horário.'},
    {title: '6. Entrada e Saída de equipamentos em Manutenção/Recargas e Testes', img: 'fundo-funcionalidade-item6.png', text: 'Automação e gerenciamento de equipamentos que vão e voltam da manutenção anual obrigatória, facilitando e aumentando a produtividade da equipe de trabalho.'},
    {title: '7. Relatórios Gerenciais', img: 'fundo-funcionalidade-item7.png', text: 'Com vários modelos de relatórios, com data, horários e responsávels pela inspeção mensal conforme NBR 12962:2016 item 5.3.'},
    {title: '8. Alertas Automáticos', img: 'fundo-funcionalidade-item8.png', text: 'Alertas automáticos de equipamentos vencendo o período de inspeção, manutenção ou recargas.'},
  ];
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
