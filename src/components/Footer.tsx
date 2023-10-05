import "../style/footer.css";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted email", email);
    alert("Thank you for subscribing!");
    setEmail("");
  };

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
          <form onSubmit={handleSubmit}>
            <div className="footer-input_container">
              <input
                name="email"
                type="email"
                placeholder={isFocused ? "" : "Your email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <IoArrowForwardOutline className="arrow-icon" />
            </div>
          </form>
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
