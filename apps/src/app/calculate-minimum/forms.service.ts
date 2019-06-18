import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  collectionRupiah: TypeRupiah[] = [
    {
      nominal: 100000,
      title: 'Rp100000',
    },
    {
      nominal: 50000,
      title: 'Rp50000',
    },
    {
      nominal: 20000,
      title: 'Rp20000',
    },
    {
      nominal: 10000,
      title: 'Rp10000',
    },
    {
      nominal: 5000,
      title: 'Rp5000',
    },
    {
      nominal: 2000,
      title: 'Rp1000',
    },
    {
      nominal: 1000,
      title: 'Rp1000',
    },
    {
      nominal: 500,
      title: 'Rp500',
    },
    {
      nominal: 100,
      title: 'Rp100',
    },
    {
      nominal: 50,
      title: 'Rp50',
    },
  ];

  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      nominal: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ParsingCalculateMinimum(): Observable<string> {
    const collectionRupiahWithCount: TypeRupiah[] = this.collectionRupiah.map((value: any) => {
      value.count = 0;
      return value;
    });
    return this.formGroup.controls.nominal.valueChanges.pipe(
      flatMap((resultChange: any) => {
        return of(resultChange);
      })
    );
  }
  // Case 1
  // 15000 check -> 10000, 5000, 2000, 1000, 500, 100, 50
  // 15000 / 10000 = 1
  // count = 1
  // 15000 mod 10000 = 5000
  // 5000 / 5000 = 1
  // count = 1

  // Case 2
  // 3900 check -> 2000, 1000, 500, 100, 50
  // 3900 / 2000 = 1
  // 3900 mod 2000 = 1900
  // 1900 / 1000 = 1
  // 1900 mod 1000 = 900
  // 900 / 500 = 1
  // 900 mod 500 = 400
  // 400 / 100 = 4
  // 400 mod 100 = 0;

  // Case 3
  // 12510 check -> 10000, 5000, 2000, 1000, 500, 100, 50
  // 12510 / 10000 = 1
  // 12510 mod 10000 = 2510
  // 2510 / 5000 = 0 -> next
  // 2510 / 2000 = 1
  // 2510 mod 2000 = 510
  // 510 / 1000 = 0 -> next
  // 510 / 500 = 1
  // 510 mod 500 = 10
  // 10 / 100 = 0 -> next
  // 10 / 50 = 0 -> next
}

export class TypeRupiah {
  nominal: number;
  title: string;
  count?: number;
}
