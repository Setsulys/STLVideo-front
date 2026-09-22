import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDetailComponent } from './serie-detail-component';

describe('SerieDetailComponent', () => {
  let component: SerieDetailComponent;
  let fixture: ComponentFixture<SerieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerieDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SerieDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
