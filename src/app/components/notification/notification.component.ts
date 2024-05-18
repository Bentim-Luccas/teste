import { Component, OnInit, inject } from '@angular/core';
import { NotificationService } from '../../service/notification.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {
  CardResponse!: any;
  private CardService = inject(NotificationService)
  ngOnInit(): void {
    initFlowbite();
    this.getMessage();
  }

  getMessage():void{
    this.CardService.getNotification().subscribe({
      next:(response: any)=> {
        response && (this.CardResponse = response);
        console.log(this.CardResponse);
      },
      error: (error: any)=> console.log(error),
    })
  }
}
