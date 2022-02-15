import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemObjectComponent } from './menu-item-object.component';

describe('MenuItemObjectComponent', () => {
  let component: MenuItemObjectComponent;
  let fixture: ComponentFixture<MenuItemObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
