import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UnitsInterface } from '../types/unit.interface';
import { LocationInterface } from '../types/location.interface';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  private allUnitsSubject: BehaviorSubject<LocationInterface[]> =
    new BehaviorSubject<LocationInterface[]>([]);

  private allUnits$: Observable<LocationInterface[]> =
    this.allUnitsSubject.asObservable();

  private filteredUnits: LocationInterface[] = [];

  readonly apiUrl =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  constructor(private http: HttpClient) {
    this.http.get<UnitsInterface>(this.apiUrl).subscribe((data) => {
      this.allUnitsSubject.next(data.locations);
      this.filteredUnits = data.locations;
    });
  }

  getAllUnits(): Observable<LocationInterface[]> {
    return this.allUnits$;
  }

  getFilteredUnits() {
    return this.filteredUnits;
  }

  setFilteredUnits(value: LocationInterface[]) {
    this.filteredUnits = value;
  }
}
