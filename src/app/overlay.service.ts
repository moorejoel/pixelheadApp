import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  baseUrl = "http://10.10.15.79";

  constructor(private http: HttpClient) { }

  getOverlays(): Observable<any[]> {
    const observable = this.http
      .get<any[]>(`${this.baseUrl}/api/overlays/models`);
    return observable;
  }
}
