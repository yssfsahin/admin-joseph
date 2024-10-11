import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaynaklarComponent } from './kaynaklar.component';

describe('KaynaklarComponent', () => {
  let component: KaynaklarComponent;
  let fixture: ComponentFixture<KaynaklarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KaynaklarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KaynaklarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
