import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Token } from '../../interface/token';
import { CommonModule} from '@angular/common';
import { JWT_Token } from '../../interface/jwt_token';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../interface/usuario';

@Component({
  selector: 'app-logintoken',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './logintoken.component.html',
  styleUrl: './logintoken.component.css'
})
export class LogintokenComponent {
  tokenFormControl = new FormControl('', [Validators.required]);
  formEnviado = false;
  processado = false;


  constructor(private router:Router, private authservice:AuthService, private usuarioService:UsuarioService){}


  submitToken(){
    this.formEnviado = true;
    if(this.tokenFormControl.value){
      // this.authservice.getTokenByEmail(sessionStorage.getItem("email")).subscribe((token:TokenProjeto)=>{
        //   if(this.tokenFormControl.value === token[0].token){
          //     sessionStorage.setItem("logado","true")
          //     this.router.navigate(['inicial'])
          //   }
          // })
          this.tokenFormControl.setErrors(null)

          const token = new Token(sessionStorage.getItem('email'),this.tokenFormControl.value)
          this.processado = true;
          this.authservice.loginToken(token).subscribe({
            next:(jwt:JWT_Token)=>{
              if(jwt){
                console.log(jwt.accessToken)
                sessionStorage.setItem("logado","true");
                sessionStorage.setItem('jwt',jwt.accessToken);
                sessionStorage.removeItem('token');
                let email = sessionStorage.getItem('email');
                this.usuarioService.getUsuarioPorEmail(email).subscribe({
                  next: (response)=>{
                    this.usuarioService.setUsuarioAutenticado(response);
                  }
                })
                this.router.navigate(['']);
              }
            },
            error:(erro)=>{
              this.processado = false;
              this.tokenFormControl.setErrors({tokeninvalido:true})
            }
          })

   }
  }
}


