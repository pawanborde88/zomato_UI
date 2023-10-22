import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogariesComponent } from './catogaries.component';

describe('CatogariesComponent', () => {
  let component: CatogariesComponent;
  let fixture: ComponentFixture<CatogariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatogariesComponent]
    });
    fixture = TestBed.createComponent(CatogariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
