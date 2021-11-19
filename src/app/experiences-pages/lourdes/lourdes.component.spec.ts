import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LourdesComponent } from './lourdes.component';

describe('LourdesComponent', () => {
  let component: LourdesComponent;
  let fixture: ComponentFixture<LourdesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LourdesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LourdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
