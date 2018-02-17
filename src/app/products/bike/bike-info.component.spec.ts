import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComBikeInfo } from './bike-info.component';

describe('ComBikeInfo', () => {
  let component: ComBikeInfo;
  let fixture: ComponentFixture<ComBikeInfo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComBikeInfo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComBikeInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/*
import { BikeInfoComponent } from './bike-info.component';

describe('BikeInfoComponent', () => {
  let component: BikeInfoComponent;
  let fixture: ComponentFixture<BikeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/