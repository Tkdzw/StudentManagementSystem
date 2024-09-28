import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

const headers: HttpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json, charset=utf-8');

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get<any>(`${this.url}/students`, {headers});
  }
}
