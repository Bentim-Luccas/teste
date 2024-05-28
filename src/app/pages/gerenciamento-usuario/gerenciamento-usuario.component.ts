import { Component } from '@angular/core';
import { PermissionamentoUsuarioComponent } from '../../components/permissionamento-usuario/permissionamento-usuario.component';
import { PerfilUsuarioComponent } from '../../components/perfil-usuario/perfil-usuario.component';

@Component({
  selector: 'app-gerenciamento-usuario',
  standalone: true,
  imports: [PerfilUsuarioComponent, PermissionamentoUsuarioComponent],
  templateUrl: './gerenciamento-usuario.component.html',
  styleUrl: './gerenciamento-usuario.component.css'
})
export class GerenciamentoUsuarioComponent {

}
