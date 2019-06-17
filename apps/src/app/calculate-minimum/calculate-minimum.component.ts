import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsService } from './forms.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calculate-minimum',
  templateUrl: './calculate-minimum.component.html',
  styleUrls: ['./calculate-minimum.component.scss']
})
export class CalculateMinimumComponent implements OnInit, OnDestroy {

  subcriber: Subscription;

  constructor(private formService: FormsService) { }

  ngOnInit(): void {
    this.subcriber = this.formService.onParsingResultCalculateMinimum().subscribe();
  }

  ngOnDestroy(): void {
    if (this.subcriber) {
      this.subcriber.unsubscribe();
    }
  }
}
