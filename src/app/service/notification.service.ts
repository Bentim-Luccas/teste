import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseUrl = 'http://academico3.rj.senac.br/notificacao';

  constructor(private http: HttpClient) {}

  getNotification(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getNotificationUserId(usuario_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${usuario_id}`);
  }

  getNotificationId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
