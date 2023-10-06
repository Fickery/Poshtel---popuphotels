import { Link, useLoaderData } from "react-router-dom";
import { getHotels } from "../mirage/api";

export function loader({ params }) {
  return getHotels(params.id);
}

export default function HotelDetail() {
  const hotel = useLoaderData();

  return (
    <>
      <Link to="/hotels" relative="path" className="back-button">
        &larr; <span>Back to all hotels</span>
      </Link>
      <h1>this is {hotel.name} detail</h1>
    </>
  );
}
