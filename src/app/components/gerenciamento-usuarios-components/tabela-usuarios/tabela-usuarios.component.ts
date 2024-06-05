import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../interface/usuario';
import { UsuarioService } from '../../../service/usuario.service';

@Component({
  selector: 'app-tabela-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './tabela-usuarios.component.html',
  styleUrl: './tabela-usuarios.component.css'
})
export class TabelaUsuariosComponent implements OnInit {

  listaUsuarios: Usuario[] = []

  constructor (private usuarioService : UsuarioService){}

  ngOnInit(): void {
    this.getUsuariosAdminEmpresa(4);
  }
  getUsuariosAdminEmpresa(idEmpresa: number):void{
    this.usuarioService.getUsuariosPorEmpresaId(idEmpresa).subscribe({
      next: (response)=> {
        response && (this.listaUsuarios = response);
      },
      error: (error) => console.log(error),
    });
  }

}
