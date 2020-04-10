import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assigndata } from 'src/app/modules/admin-page/models/truck';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private url = '/assets/data/truck.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<Assigndata[]> {
    return this.http.get<Assigndata[]>(this.url);
  }
}
