import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TablesService } from '../tables/tables.service';
import { Table } from '../model/table.model';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailComponent implements OnInit {
  @Input()
  table!: Table;

  qrValue!: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tableService: TablesService) { }
  
  ngOnInit(): void {
    this.getTable();
    this.qrValue= JSON.stringify(this.table);
  }

  getTable() {
    const stringid = this.route.snapshot.paramMap.get('id');
    
    if (stringid !== null){
      let id=+stringid;

      this.tableService.getTable(id)
      .subscribe(table => this.table = table[0]);
    }else{
      //TODO: id === null?
      this.tableService.getTable(1)
      .subscribe(table => this.table = table[0]);
    }
    
  }
  
  save(): void {
    this.tableService.updateTable(this.table)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
  
  onPrint() {
    window.print();
  }

}
