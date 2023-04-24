import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import RoomCard from './RoomCard';
import { addToDb } from '../utils/fakeDb';

const MainContent = () => {
    const [rooms,setRooms] = useState([]);

    useEffect(() => {
        fetch('rooms.json')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[]);

    // console.log(rooms);
    return (
        <div className='mt-16 grid md:grid-cols-3 gap-7'>
            {
                rooms.map(room => <RoomCard key={room.roomID} room={room} ></RoomCard>)
            }
        </div>
    );
};

export default MainContent;