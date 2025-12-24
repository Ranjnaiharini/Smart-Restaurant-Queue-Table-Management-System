import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReservationService } from '../../../core/services/reservation.service';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule],
  templateUrl: './reservation-form.html',
  styleUrls: ['./reservation-form.scss']
})
export class ReservationForm {
  protected name = '';
  protected time = '';

  constructor(private svc: ReservationService) {}

  submit() {
    this.svc.create({ reservation_time: this.time }).subscribe(() => {
      // placeholder behavior
    });
  }
}
