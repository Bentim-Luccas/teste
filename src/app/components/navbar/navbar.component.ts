import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NotificationComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit  {
  router: any;
  relatorio(){
    this.router.navigate(['/relatorio'])
  }
  open = false;
  dropdown_open = false;

  ngOnInit(): void {
  }

  toggleDropdown(): void {
    this.dropdown_open = !this.dropdown_open;
  }
}

