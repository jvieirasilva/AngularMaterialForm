import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVAlidationComponent } from './form-validation.component';

describe('FormVAlidationComponent', () => {
  let component: FormVAlidationComponent;
  let fixture: ComponentFixture<FormVAlidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVAlidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVAlidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
