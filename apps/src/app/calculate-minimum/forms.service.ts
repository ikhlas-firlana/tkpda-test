import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      nominal: new FormControl([
        Validators.required,
      ]),
    });
  }

  onParsingResultCalculateMinimum(): Observable<string> {
    return this.formGroup.controls.nominal.valueChanges;
  }
}
