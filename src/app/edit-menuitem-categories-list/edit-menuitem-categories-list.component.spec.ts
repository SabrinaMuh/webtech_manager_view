import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuitemCategoriesListComponent } from './edit-menuitem-categories-list.component';

describe('EditMenuitemCategoriesListComponent', () => {
  let component: EditMenuitemCategoriesListComponent;
  let fixture: ComponentFixture<EditMenuitemCategoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMenuitemCategoriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuitemCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
