import "../style/footer.css";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer>
      <div className="footer-subscribe">
        <div className="footer-slogan">
          <h1>Poshtel</h1>
          <p>Your second home around the world</p>
        </div>

        <div className="footer-cta_sub">
          <p>
            Stay in the loop,
            <br />
            subscribe to our newsletter
          </p>
          <div className="footer-input_container">
            <input type="text" placeholder="Your email" />
            <IoArrowForwardOutline className="arrow-icon" />
          </div>
        </div>
      </div>

      <div className="footer-trail">
        <p>© Poshtel 2020</p>
        <ul>
          <li>Pricing</li>
          <li>The popup Hotels</li>
          <li>Locations</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
}
