import { Component, OnInit } from '@angular/core';

import { Table } from '../model/table.model';
import { TablesService } from './tables.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables: Table[] = [];

  constructor(private tableService: TablesService) { }

  ngOnInit(): void {
    this.getTables();
  }

  getTables(): void {
    this.tableService.getTables()
    .subscribe(tables => this.tables = tables);
  }

  add(tablenumber: number, capacity: number, desc: string): void {
    if (!tablenumber || !capacity) { return; }
    let id = this.createId();
    this.tableService.addTable({ id, tablenumber, capacity, desc } as Table)
      .subscribe(table => {
        this.tables.push(table);
      });
  }

  delete(table: Table): void {
    this.tables = this.tables.filter(h => h !== table);
    this.tableService.deleteTable(table).subscribe();
  }

  createId(): number {
    return this.tables.length > 0 ? Math.max(...this.tables.map(table => table.id)) + 1 : 1;
  }

}
