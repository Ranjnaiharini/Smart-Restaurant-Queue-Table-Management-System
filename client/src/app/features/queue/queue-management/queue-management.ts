import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { QueueService } from '../../../core/services/queue.service';

@Component({
  selector: 'app-queue-management',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule],
  templateUrl: './queue-management.html',
  styleUrls: ['./queue-management.scss']
})
export class QueueManagement implements OnInit {
  protected name = '';
  protected position = signal<number | null>(null);

  constructor(private svc: QueueService) {}

  ngOnInit() {}

  join() {
    this.svc.join({ name: this.name }).subscribe((res: any) => {
      this.position.set(res.position ?? null);
    });
  }

  refreshPosition() {
    // placeholder: call position API when user is known
  }
}

