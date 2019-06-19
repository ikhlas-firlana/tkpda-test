import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateMinimumComponent } from './calculate-minimum.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsService, TypeRupiah } from './forms.service';

describe('CalculateMinimumComponent', () => {
  // let fixture: ComponentFixture<CalculateMinimumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ CalculateMinimumComponent ]
    })
    .compileComponents();
  }));

  describe(':', () => {
    let formsService: FormsService;
    let fixture: ComponentFixture<CalculateMinimumComponent>;
    let app: CalculateMinimumComponent;

    beforeEach(() => {
      formsService = new FormsService();
      fixture = TestBed.createComponent(CalculateMinimumComponent);
      app = fixture.debugElement.componentInstance;
    });

    it('should create the app', async(() => {
      expect(app).toBeTruthy();
    }));

    it('should input nominal', async(() => {
      formsService.formGroup.controls.nominal.valueChanges.subscribe((resultInput: string | number) => {
        expect(resultInput).toEqual(100000);
      });
      formsService.formGroup.controls.nominal.setValue(100000);
    }));

    it('should input nominal string or number', async(() => {
      formsService.ParsingCalculateMinimum().subscribe((resultInput: TypeRupiah[]) => {
        const resultForceSet = formsService.forceSetCalculateMinimumToString(resultInput);
        if (typeof resultForceSet === 'string') {
          expect(typeof resultForceSet).toEqual('string');
          return;
        }
        if (typeof resultForceSet === 'number') {
          expect(typeof resultForceSet).toEqual('number');
          return;
        }
        expect('string number').toContain(typeof resultInput);
        return;
      });
      formsService.formGroup.controls.nominal.setValue(10000);
    }));

  });
});
