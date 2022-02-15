import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuItemAllergenelistComponent } from './edit-menu-item-allergenelist.component';

describe('EditMenuItemAllergenelistComponent', () => {
  let component: EditMenuItemAllergenelistComponent;
  let fixture: ComponentFixture<EditMenuItemAllergenelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMenuItemAllergenelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuItemAllergenelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
