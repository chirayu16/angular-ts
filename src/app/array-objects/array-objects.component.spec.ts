import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayObjectsComponent } from './array-objects.component';

describe('ArrayObjectsComponent', () => {
  let component: ArrayObjectsComponent;
  let fixture: ComponentFixture<ArrayObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayObjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
