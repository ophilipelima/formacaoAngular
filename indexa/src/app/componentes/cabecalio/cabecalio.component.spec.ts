import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalioComponent } from './cabecalio.component';

describe('CabecalioComponent', () => {
  let component: CabecalioComponent;
  let fixture: ComponentFixture<CabecalioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecalioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabecalioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
