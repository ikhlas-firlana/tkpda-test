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
      title: 'Rp2000',
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
  remains: TypeRupiah = null;
  holdResultParsing: string = null;
  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      nominal: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ParsingCalculateMinimum(): Observable<TypeRupiah[]> {

    return this.formGroup.controls.nominal.valueChanges.pipe(
      flatMap((resultChange: any) => {
        let collectionRupiahWithCount: TypeRupiah[] = this.collectionRupiah.map((value: any) => {
          value.count = 0;
          return value;
        });
        collectionRupiahWithCount = this.calculateCount(collectionRupiahWithCount, resultChange);
        this.holdResultParsing = this.forceSetCalculateMinimumToString(collectionRupiahWithCount);
        return of(collectionRupiahWithCount);
      })
    );
  }
  forceSetCalculateMinimumToString(objectTypeRupiah: TypeRupiah[]): string {
    let result = objectTypeRupiah.map((value: TypeRupiah) => {
      const forceSet: any = value.count + 'x ' + value.title;
      return forceSet;
    }).join(', ');
    if (this.remains) {
      result += ',left ' + this.remains.title;
    }
    return result;
  }

  calculateCount(objectRupiah: TypeRupiah[], dividen: number): TypeRupiah[] {
    objectRupiah = objectRupiah
    .filter((value: TypeRupiah) => {
      return dividen / value.nominal > 1;
    }).map((value: TypeRupiah) => {
      value.count = Math.floor(dividen / value.nominal);
      if (value.count > 0) {
        dividen = Math.floor(dividen % value.nominal);
      }
      console.log('>', value);
      return value;
    }).filter((value: TypeRupiah) => {
      return value.count > 0;
    });
    this.remains = null;
    if (dividen > 0) {
      this.remains = {
        nominal: dividen,
        title: 'Rp' + dividen,
      };
    }

    return objectRupiah;
  }
  filterConditionRupiah(inputParameter: string | number): number {
    let resultClean = null;
    if (typeof inputParameter === 'string') {
      resultClean = inputParameter.replace(/\./g, '');
      resultClean = resultClean.split('').filter((value) => {
        if (value === ' ') {
          return false;
        }
        return true;
      }).join('');
      if (resultClean.indexOf('Rp') > 0) {
        return null;
      }
      if (resultClean.split('Rp').length > 0) {
        resultClean = resultClean.split('Rp').filter((value: any) => {
          return value !== 'Rp';
        }).join('');
      }
      resultClean = typeof resultClean === 'string' ? parseInt(resultClean, null) : resultClean;
    }
    if (typeof inputParameter === 'number') {
      resultClean = Math.floor(inputParameter);
    }
    return resultClean;
  }
}

export class TypeRupiah {
  nominal: number;
  title: string;
  count?: number;
}
