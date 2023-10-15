import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  results = [];
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitsService: GetUnitsService
  ) {}

  ngOnInit(): void {
    this.getUnits();

    this.form = this.formBuilder.group({
      hour: '',
      showClosed: false,
    });
  }

  getUnits() {
    this.unitsService.getAllUnits().subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onClear() {
    this.form.reset();
    console.log(this.form.value);
  }
}
