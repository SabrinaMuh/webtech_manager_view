import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryObjectComponent } from './category-object.component';

describe('CategoryObjectComponent', () => {
  let component: CategoryObjectComponent;
  let fixture: ComponentFixture<CategoryObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
