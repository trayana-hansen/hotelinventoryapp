import { Component, OnInit, reflectComponentType } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { checkPrime } from 'crypto';
import { log } from 'console';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  imports: [
    CommonModule,
    RoomsListComponent
  ]
})
export class RoomsComponent implements OnInit {

  hotelName: string = "Hotel Hilton";
  numberOfRooms: number = 10;
  hideRooms: boolean = false;
  rooms: Room =
    {
      totalRooms: 20,
      availableRooms: 10,
      bookedRooms: 5
    };
  roomList: RoomList[] = [];





  ngOnInit(): void {
    this.roomList = [{
      roomNumber: 101,
      roomType: "Single",
      ameneties: "Free Wi-Fi, TV, AC, Breakfast",
      price: 100,
      photos: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      checkinTime: new Date("2021-07-01"),
      rating: 4.5
    },
    {
      roomNumber: 102,
      roomType: "Double",
      ameneties: "Free Wi-Fi, TV, AC, Breakfast",
      price: 200,
      photos: "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp",
      checkinTime: new Date("2021-07-01"),
      rating: 4.0
    },
    {
      roomNumber: 103,
      roomType: "Suite",
      ameneties: "Free Wi-Fi, TV, AC, Breakfast, Mini Bar",
      price: 300,
      photos: "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp",
      checkinTime: new Date("2021-07-01"),
      rating: 4.5
    }
    ]

  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectRoom(room: RoomList) {
    console.log(room);
  }

}
