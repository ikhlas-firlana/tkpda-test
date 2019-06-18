import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsService } from './forms.service';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculate-minimum',
  templateUrl: './calculate-minimum.component.html',
  styleUrls: ['./calculate-minimum.component.scss']
})
export class CalculateMinimumComponent implements OnInit, OnDestroy {

  subcriber: Subscription;
  formGroup: FormGroup;
  tmp: any;

  constructor(private formService: FormsService) {
    this.formGroup = this.formService.formGroup;
   }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onEnter(event: any): void {
    if (event.keyCode === 13) {
      this.tmp = this.formGroup.controls.nominal.value;
    }
  }
}
