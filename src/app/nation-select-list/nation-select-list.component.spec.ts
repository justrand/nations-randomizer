import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationSelectListComponent } from './nation-select-list.component';

describe('NationSelectListComponent', () => {
  let component: NationSelectListComponent;
  let fixture: ComponentFixture<NationSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
