import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DuyuruService {

  constructor(private http: HttpClient) { }

  getDuyuruById(id: any): Observable<any> {
    return this.http.get(`http://localhost:3000/data/${id}`)
  }

  getTumDuyuru(): Observable<any> {
    return this.http.get(`http://localhost:3000/data`);
  }

  yeniDuyuru(data: any): Observable<any> {
    return this.http.post(`http://localhost:3000/data`, data);
  }

  duyuruGuncelle(data: any, id: any): Observable<any> {
    return this.http.put(`http://localhost:3000/data/${id}`, data);
  }

  duyuruSil(id: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/data/${id}`);
  }
}
