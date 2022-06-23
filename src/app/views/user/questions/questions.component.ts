import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}

// renomear para não ter espaços ou usar __
// prestar atenção na nomenclatura.
// nomes de variaveis em inglês.
// formulario tem que ter NAME e ID.
// campo com Require tem que ter Require.
// usar minimo e maximo nos campos.
// FrmQuestions NOME e ID.
// só se usa ID nos componentes que vão ser manipulados no js.

// tela de comfirmação de Email.
