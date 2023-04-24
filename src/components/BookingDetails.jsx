import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { getStoredCart } from "../utils/fakeDb";

const BookingDetails = () => {
  const [bookingData,setBookingData] = useState({})
  const data = useLoaderData();

    const dynamicId = useParams();
    const newId = Number(dynamicId.bookingID);

    useEffect(() => {
      const newData = data.find(dt => dt.roomID === newId);

      setBookingData(newData)
    },[])

    const {image,ratings} = bookingData;
    console.log(bookingData);
    
  return (
    <div className="card md:card-side bg-base-100 my-20">
      <figure>
        <img
          src={image}
          alt="room"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">This is your Booked room,, <br />
        for more details contact Us via phone or email</h2>
        <div className="card-actions justify-end mt-14">
          <button className="btn btn-ghost"><Link to="/">back to home</Link></button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
