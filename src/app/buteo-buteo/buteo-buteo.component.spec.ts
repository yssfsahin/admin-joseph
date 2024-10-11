import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButeoButeoComponent } from './buteo-buteo.component';

describe('ButeoButeoComponent', () => {
  let component: ButeoButeoComponent;
  let fixture: ComponentFixture<ButeoButeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButeoButeoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButeoButeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
