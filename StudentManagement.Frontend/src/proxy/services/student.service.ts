import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get<any>(`${this.url}/students`);
  }
}
