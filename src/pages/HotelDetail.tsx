import { getHotels } from "../mirage/api";
import { Link, Search } from "react-router-dom";

export default function HotelDetail() {
  return (
    <>
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>
      <h1>this is hotel detail</h1>
    </>
  );
}
