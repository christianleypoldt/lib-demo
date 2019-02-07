import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvmazeUpdateComponent } from './tvmaze-update.component';

describe('TvmazeUpdateComponent', () => {
  let component: TvmazeUpdateComponent;
  let fixture: ComponentFixture<TvmazeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvmazeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvmazeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
