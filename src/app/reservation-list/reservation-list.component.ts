import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css'],
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }

  constructor(private reservationService: ReservationService) {}

  deleteReservation(id: string): void {
    this.reservationService.deleteReservation(id);
  }
}
