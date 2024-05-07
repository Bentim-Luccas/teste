import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private http = inject(HttpClient);

  constructor() { }

  findAll() {
    return this.http.get('http://localhost:3000/comentario');
  }

  findOne(id: number) {
    return this.http.get(`http://localhost:3000/comentario/${id}`);
  }

  remove(id: number) {
    return this.http.delete(`http://localhost:3000/comentario/${id}`);
  }

  findOneWithChildren(id: number) {
    return this.http.get(`http://localhost:3000/comentario/${id}/children`);
  }
}
