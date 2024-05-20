  import { Component } from '@angular/core';
  import { FormsModule, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { Router } from '@angular/router';
  import { AuthService } from '../../service/auth.service';
  import { Email } from '../../interface/email';
import { EmailTokenRecebido } from '../../interface/emailtoken_recebido';
import { catchError, throwError } from 'rxjs';

  @Component({
    selector: 'app-loginemail',
    standalone: true,
    imports: [FormsModule, CommonModule, ReactiveFormsModule, ReactiveFormsModule],
    templateUrl: './loginemail.component.html',
    styleUrls: ['./loginemail.component.css']
  })
  export class LoginemailComponent {
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    credencias = false;
    msgErro='ola '
  
    constructor(private router: Router, private authservice: AuthService) { }
  
    submitApp() {

      console.log('Email FormControl:', this.emailFormControl.value);
      console.log('Touched:', this.emailFormControl.touched);
      console.log('Invalid:', this.emailFormControl.invalid);

      this.emailFormControl.markAsTouched();
      if (this.emailFormControl.valid) {
        this.msgErro=''
        this.emailFormControl.setErrors({
          credenciais:false
        })
        const email = new Email(this.emailFormControl.value);
        this.authservice.loginEmail(email).subscribe({
          next:(email: EmailTokenRecebido) => {
            if (email) {
              console.log(email);
              if(email.usuario_email && email.usuario_token){
                sessionStorage.setItem('email', email.usuario_email);
                sessionStorage.setItem('token', email.usuario_token);
                this.router.navigate(['logintoken']);
              }
              
            }
            
          },error:(error) => {                              
            this.msgErro = error.error.message
            this.emailFormControl.setErrors({
              credenciais:true
            })

          }
      })
      }
    }
  }





  
  

