import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DuyuruService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000";
  getDuyuruById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/data/${id}`)
  }

  getTumDuyuru(): Observable<any> {
    return this.http.get(`${this.baseUrl}/data`);
  }

  yeniDuyuru(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/data`, data);
  }

  duyuruGuncelle(data: any, id: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/data/${id}`, data);
  }

  duyuruSil(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/data/${id}`);
  }
}
