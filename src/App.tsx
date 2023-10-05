import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Hotels from "./pages/Hotel";
import HotelDetail from "./pages/HotelDetail";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="hotels" element={<Hotels />} />
      <Route path="hotels/:id" element={<HotelDetail />} />
      <Route path="locations" element={<Locations />} />
      <Route path="contact" element={<Contact />} />
      <Route path="members" element={<Members />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
