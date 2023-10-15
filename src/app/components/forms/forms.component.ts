import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { LocationInterface } from 'src/app/types/location.interface';
import { UnitsInterface } from 'src/app/types/unit.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  results: LocationInterface[] = [];
  filteredResults: LocationInterface[] = [];
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitsService: GetUnitsService
  ) {}

  ngOnInit(): void {
    this.getUnits();

    this.form = this.formBuilder.group({
      hour: '',
      showClosed: true,
    });
  }

  getUnits() {
    this.unitsService.getAllUnits().subscribe((data) => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });
  }

  onSubmit() {
    const showClosed = this.form.value.showClosed;

    if (!showClosed) {
      this.filteredResults = this.results.filter(
        (location) => location.opened === true
      );
    } else {
      this.filteredResults = this.results;
    }
  }

  onClear() {
    this.form.reset();
    console.log(this.form.value);
  }
}
