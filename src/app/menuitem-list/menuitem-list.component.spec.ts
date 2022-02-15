import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuitemListComponent } from './menuitem-list.component';

describe('MenuitemListComponent', () => {
  let component: MenuitemListComponent;
  let fixture: ComponentFixture<MenuitemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuitemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuitemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
