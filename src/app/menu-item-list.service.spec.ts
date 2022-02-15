import { TestBed } from '@angular/core/testing';

import { MenuItemListService } from './menu-item-list.service';

describe('MenuItemListService', () => {
  let service: MenuItemListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuItemListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
