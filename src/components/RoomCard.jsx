import React from "react";
import { Link } from "react-router-dom";

const RoomCard = ({room}) => {
    const {description,image,price,ratings,roomID} = room;
    
    // console.log(room);
  return (
    <div className="card w-[100%] bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="room"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Luxury Room</h2>
        <p>{description}</p>

        <p className="mt-3">per night rent = $<span className="text-red-700">{price}</span></p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"><Link to={`/bookingDetails/${roomID}`}>Book Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
