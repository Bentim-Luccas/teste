import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit  {
  open = false;
  dropdown_open = false;
  
  ngOnInit(): void {
  }

  toggleDropdown(): void {
    this.dropdown_open = !this.dropdown_open;
  }
}
