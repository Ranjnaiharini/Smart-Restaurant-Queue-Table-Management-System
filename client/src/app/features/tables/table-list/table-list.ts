import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TableService, TableModel } from '../../../core/services/table.service';
import { QueueService } from '../../../core/services/queue.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './table-list.html',
  styleUrls: ['./table-list.scss']
})
export class TableList implements OnInit {
  protected tables = signal<TableModel[]>([]);

  constructor(private svc: TableService, private queueSvc: QueueService, private notify: NotificationService) {}

  ngOnInit() {
    this.svc.list().subscribe((t) => this.tables.set(t));
  }

  joinQueue(table: TableModel) {
    // join with table capacity and type preference
    const payload = { capacity_needed: table.capacity, type_preference: table.type };
    this.queueSvc.join(payload).subscribe({
      next: (res: any) => {
        this.notify.success('Joined queue. Position: ' + (res.data?.queue_position ?? res.queue_position ?? '?'));
      },
      error: (err: any) => this.notify.error(err?.message || 'Failed to join queue')
    });
  }
}

