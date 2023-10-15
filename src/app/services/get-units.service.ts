import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitsInterface } from '../types/unit.interface';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  readonly apiUrl =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  constructor(private http: HttpClient) {}

  getAllUnits(): Observable<UnitsInterface> {
    return this.http.get<UnitsInterface>(this.apiUrl);
  }
}
