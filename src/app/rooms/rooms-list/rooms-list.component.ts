import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnInit(): void {

  }
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

}
