import { Component, Input } from '@angular/core';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { LocationInterface } from 'src/app/types/location.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() unitsList: LocationInterface[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.unitsList);
  }
}
