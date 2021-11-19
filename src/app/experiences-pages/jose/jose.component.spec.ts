import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoseComponent } from './jose.component';

describe('JoseComponent', () => {
  let component: JoseComponent;
  let fixture: ComponentFixture<JoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
