import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterUnitsService } from 'src/app/services/filter-units.service';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { LocationInterface } from 'src/app/types/location.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  @Output() submitEvent = new EventEmitter();

  results: LocationInterface[] = [];
  filteredResults: LocationInterface[] = [];
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitsService: GetUnitsService,
    private filerUnitsService: FilterUnitsService
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
      this.results = data;
      this.filteredResults = data;
    });
  }

  onSubmit() {
    this.filteredResults = this.filerUnitsService.filter(
      this.results,
      this.form.value.showClosed,
      this.form.value.hour
    );
    this.unitsService.setFilteredUnits(this.filteredResults);

    this.submitEvent.emit();
  }

  onClear() {
    this.form.reset();
    console.log(this.form.value);
  }
}
