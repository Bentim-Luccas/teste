import { Component } from '@angular/core';
import { ChangeAccessComponent } from './change-access/change-access.component'

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [ChangeAccessComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {

}
