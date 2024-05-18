import { Component, OnInit, inject } from '@angular/core';
import { NotificationService } from '../../service/notification.service';
import { initFlowbite } from 'flowbite';
import { Notificacao } from '../../interface/notificacao';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {

  constructor(private notificationService: NotificationService){}

 notificacoes: Notificacao[] = [];

  ngOnInit(): void {
    this.notificationService.findAll().subscribe((notifica) => {
      this.notificacoes = notifica;
    });
  }

  
  
}
