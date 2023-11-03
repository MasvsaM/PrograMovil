import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Teacher } from '../models/profesores';
import { curso } from '../models/cursos';

@Injectable({
 providedIn: 'root'
})
export class TeacherService {
   /* httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) } */
 private apiUrl = 'http://127.0.0.1:5000/api/profesores';

 constructor(private http: HttpClient) { }

 getTeachers(): Observable<Teacher[]> {
   const url = `http://127.0.0.1:5000/api/profesores`;
   return this.http.get(this.apiUrl).pipe(map(res => res as Teacher[]));
 }

 getCursos(): Observable<curso[]>  
 {
   const url = `http://127.0.0.1:5000/api/cursos`; // Ajusta la URL según tu API
   return this.http.get<curso[]>(url); // Nota el uso de <curso[]>
 }


}