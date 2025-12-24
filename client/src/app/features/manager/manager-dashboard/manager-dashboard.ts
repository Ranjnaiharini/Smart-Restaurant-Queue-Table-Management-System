import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TableService } from '../../../core/services/table.service';

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './manager-dashboard.html',
  styleUrls: ['./manager-dashboard.scss']
})
export class ManagerDashboard implements OnInit {
  protected tables = signal([] as any[]);

  constructor(private svc: TableService) {}

  ngOnInit() {
    this.svc.list().subscribe((t) => this.tables.set(t));
  }

  seat(table: any) {
    // placeholder: call API to mark occupied
  }
}
