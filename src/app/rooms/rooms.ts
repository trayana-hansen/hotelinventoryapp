export interface Room {
    totalRooms: number,
    availableRooms: number,
    bookedRooms: number

}

export interface RoomList {
    roomNumber: number;
    roomType: string;
    ameneties: string;
    price: number;
    photos: string;
    checkinTime: Date;
    rating: number;

}