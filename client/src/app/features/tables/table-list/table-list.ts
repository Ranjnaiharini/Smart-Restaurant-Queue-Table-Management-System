import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TableService, TableModel } from '../../../core/services/table.service';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './table-list.html',
  styleUrls: ['./table-list.scss']
})
export class TableList implements OnInit {
  protected tables = signal<TableModel[]>([]);

  constructor(private svc: TableService) {}

  ngOnInit() {
    this.svc.list().subscribe((t) => this.tables.set(t));
  }
}

