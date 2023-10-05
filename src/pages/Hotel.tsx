import { useState, useEffect } from "react";
import { getHotels } from "../mirage/api";

import "../style/hotel.css";
import { Link } from "react-router-dom";

interface HotelProps {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  location: string;
  availability: boolean;
}

export default function Hotel() {
  let [hotels, setHotels] = useState<HotelProps[]>([]);

  useEffect(() => {
    getHotels().then((json) => {
      setHotels(json.hotels);
    });
  }, []);

  return (
    <div className="hoteldetails-cont">
      {hotels.map((hotel) => (
        <Link
          key={hotel.id}
          className={
            hotel.availability
              ? "hoteldetail-card"
              : "hoteldetail-card-disabled"
          }
          to={hotel.id}
        >
          <div className="image-container">
            {hotel.availability ? (
              <p className="availability available">Available</p>
            ) : (
              <p className="availability not-available">Not Available</p>
            )}
            <img
              className="hoteldetail-img"
              src={hotel.image}
              alt={hotel.name}
            />
          </div>
          <div className="hoteldetail-details">
            <div className="hoteldetail-details-left">
              <p className="hoteldetail-details-name">{hotel.name}</p>
              <p className="hoteldetail-details-location">{hotel.location}</p>
            </div>
            <div className="hoteldetail-details-right">
              <span className="hoteldetail-details-price">${hotel.price}</span>
              <span className="hoteldetail-details-pricepernight">night</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
