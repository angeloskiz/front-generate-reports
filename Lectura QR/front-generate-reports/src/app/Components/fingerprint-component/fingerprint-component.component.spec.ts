import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerprintComponentComponent } from './fingerprint-component.component';

describe('FingerprintComponentComponent', () => {
  let component: FingerprintComponentComponent;
  let fixture: ComponentFixture<FingerprintComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FingerprintComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FingerprintComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
