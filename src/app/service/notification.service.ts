import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Notificacao } from '../interface/notificacao';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private readonly baseUrl: string;

  
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiServer + 'notificacao';
  }

  findAll(): Observable<Notificacao[]> {
    return this.http.get<Notificacao[]>(this.baseUrl);
  }

  getNotification(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getNotificationUserId(usuario_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/naolidas/${usuario_id}`);
  }

  getNotificationId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
