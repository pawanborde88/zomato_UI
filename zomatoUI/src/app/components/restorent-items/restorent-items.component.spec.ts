import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorentItemsComponent } from './restorent-items.component';

describe('RestorentItemsComponent', () => {
  let component: RestorentItemsComponent;
  let fixture: ComponentFixture<RestorentItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestorentItemsComponent]
    });
    fixture = TestBed.createComponent(RestorentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
