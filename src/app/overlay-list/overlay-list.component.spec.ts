import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayListComponent } from './overlay-list.component';

describe('OverlayListComponent', () => {
  let component: OverlayListComponent;
  let fixture: ComponentFixture<OverlayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
