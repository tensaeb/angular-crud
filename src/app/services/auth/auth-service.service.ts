import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private _http: HttpClient) {}

  register(data: any): Observable<any> {
    return this._http.post(
      'https://6530cf4a6c756603295f140b.mockapi.io/users',
      data
    );
  }

  login(data: any): Observable<any> {
    return this._http.post(
      'https://6530cf4a6c756603295f140b.mockapi.io/users',
      data
    );
  }
}
