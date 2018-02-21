import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComTitleComponent } from './com-title.component';

describe('ComTitleComponent', () => {
  let component: ComTitleComponent;
  let fixture: ComponentFixture<ComTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
