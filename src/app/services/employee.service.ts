import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}
  addEmployee(data: any): Observable<any> {
    return this._http.post(
      'https://vercel-json-nine.vercel.app/employees',
      data
    );
  }
  getEmployeeList(): Observable<any> {
    return this._http.get('https://vercel-json-nine.vercel.app/employees');
  }
  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(
      `https://vercel-json-nine.vercel.app/employees/${id}`
    );
  }
  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(
      `https://vercel-json-nine.vercel.app/employees/${id}`,
      data
    );
  }
}
