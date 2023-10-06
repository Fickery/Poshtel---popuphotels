import { useState, useEffect, Suspense } from "react";
import { getHotels } from "../mirage/api";
import "../style/hotel.css";
import { Link, Await, defer, useLoaderData } from "react-router-dom";

interface HotelProps {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  location: string;
  availability: boolean;
}

export function loader() {
  return defer({ hotels: getHotels() });
}

export default function Hotel() {
  let [hotels, setHotels] = useState<HotelProps[]>([]);
  const dataPromise = useLoaderData();

  useEffect(() => {
    getHotels().then((json) => {
      setHotels(json.hotels);
    });
  }, []);

  function renderHotelElements(hotel: HotelProps) {
    return (
      <Link
        key={hotel.id}
        className={
          hotel.availability ? "hoteldetail-card" : "hoteldetail-card-disabled"
        }
        to={hotel.id}
      >
        <div className="image-container">
          {hotel.availability ? (
            <p className="availability available">Available</p>
          ) : (
            <p className="availability not-available">Not Available</p>
          )}
          <img className="hoteldetail-img" src={hotel.image} alt={hotel.name} />
        </div>
        <div className="hoteldetail-details">
          <div className="hoteldetail-details-left">
            <p className="hoteldetail-details-name">{hotel.name}</p>
            <p className="hoteldetail-details-location">{hotel.location}</p>
          </div>
          <div className="hoteldetail-details-right">
            <span className="hoteldetail-details-price">${hotel.price}</span>
            <span className="hoteldetail-details-pricepernight">
              {" "}
              per night
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="hoteldetails-cont">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={dataPromise.hotels}>
          {hotels.map((hotel) => renderHotelElements(hotel))}
        </Await>
      </Suspense>
    </div>
  );
}
