import { TestBed } from '@angular/core/testing';

import { FormsService } from './forms.service';

describe('FormsService', () => {
  let service: FormsService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(FormsService);
  });

  it('should be created', () => {
    service = TestBed.get(FormsService);
    expect(service).toBeTruthy();
  });
  it('should be 18215 from 18.215', () => {
    const result = service.filterConditionRupiah('18.215');
    expect(result).toEqual(18215);
  });
  it('should be 17500 from Rp17500', () => {
    const result = service.filterConditionRupiah('Rp17500');
    expect(result).toEqual(17500);
  });
  it('should be 17500 from Rp17.500,00', () => {});
  it('should be 120325 from Rp 120.325', () => {});
  it('should be 5000 from 005.000', () => {});
  it('should be 1000 from 001000', () => {
    const result = service.filterConditionRupiah('001000');
    expect(result).toEqual(1000);
  });
  it('should be invalid 17,500 invalid separator', () => {});
  it('should be 2 500 invalid separator', () => {});
  it('should be 3000 Rp valid character in wrong position', () => {
    const result = service.filterConditionRupiah('3000 Rp');
    expect(result).toEqual(null);
  });
  it('should be Rp missing value', () => {});
});
