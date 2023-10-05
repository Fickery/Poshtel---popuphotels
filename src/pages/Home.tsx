import "../style/home.css";
import SimpleSlider from "../components/SimpleSlider";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="home-main">
      <h1 className="home-main_title">Welcome to Stendans</h1>
      <img
        src="https://plus.unsplash.com/premium_photo-1685133856065-a32643cc56d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt=""
        width="70%"
      />

      <div className="home-concept">
        <h2 className="home-concept_title">The Concept</h2>
        <p>
          Become a 2nd home member in all of our pristine and remote places on
          the Earth. You get a tiny designer villa. Full service. A community.
          Nature.
        </p>
      </div>
      <button className="home-signup_btn">Become a member</button>
      <div className="home-concept_img">
        <div className="home-concept_Limg">
          <img
            className="b1"
            src="https://images.unsplash.com/photo-1605998362954-923edb783cd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="home"
            width="350px"
            height="100%"
          />
        </div>
        <div className="home-concept_Rimg">
          <img
            className="b2"
            src="https://images.unsplash.com/photo-1599232789123-93ba2f3bc28e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="home"
            width="250px"
          />
          <img
            className="b2"
            src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
            alt="home"
            width="200px"
          />
        </div>
      </div>

      <section className="home-mainvilla">
        <img
          src="https://images.unsplash.com/photo-1571414151261-3763986bab19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt=""
          width="40%"
        />

        <div className="home-mainvilla_text">
          <div className="home-mainvilla_title">
            <h1>
              The
              <br />
              Villa
            </h1>
            <p className="home-mainvilla_ptext">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              voluptates in numquam a assumenda rerum fugit. earum.
            </p>
          </div>

          <ul className="home-mainvilla_specs">
            <li>
              <h2>35m2</h2>
              <p>Size</p>
            </li>
            <li>
              <h2>2</h2>
              <p>Guests</p>
            </li>
            <li>
              <h2>1</h2>
              <p>Bathroom</p>
            </li>
            <li>
              <h2>1</h2>
              <p>Bedroom</p>
            </li>
          </ul>
          <div>
            <button onClick={handleOpen} className="home-btn">
              Get Spec Sheet
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Box id="modal-modal-description" sx={{ mt: 2 }}>
                  <img
                    src="https://www.pdffiller.com/preview/47/326/47326091/large.png"
                    alt=""
                    width="100%"
                  />
                </Box>
              </Box>
            </Modal>
          </div>
        </div>
      </section>

      <SimpleSlider />

      <section className="home-partner">
        <div className="home-partner_text">
          <div className="home-partner_toptext">
            <h1 className="home-partner_title">The Service</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              maxime fugit recusandae consequatur id provident! Et quidem.
              <br />
              <br />
              Ducimus consequuntur aliquam neque vitae animi harum accusamus!
              Corrupti, quasi. Magni, labore asperiores.
            </p>
          </div>
          <div className="home-partner_bottomtext">
            <p>Partner</p>
            <h2>Wessel INC & GOCO</h2>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1613560137150-5c20f1fb0fbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
          alt=""
          width="40%"
        />
      </section>

      <div className="home-main testimonial_header">
        <h1>"I can't imagine a life without the Poshtel community."</h1>
        <p>Lucile Perry</p>
        <p>Stayed in Stendans for 3 weeks</p>
      </div>

      <section className="home-testimonial">
        <img
          src="https://images.unsplash.com/photo-1541976844346-f18aeac57b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
          alt=""
          width="40%"
        />
        <div className="home-testimonial_text">
          <div className="home-testimonial_toptext">
            <h1 className="home-testimonial_title">Community</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              maxime fugit recusandae consequatur id provident! Et quidem.
              <br />
              <br />
              Ducimus consequuntur aliquam neque vitae animi harum accusamus!
              Corrupti, quasi. Magni, labore asperiores.
            </p>
          </div>
          <div className="home-testimonial_bottomtext">
            <p className="quote">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, tempora ipsa! Perferendis hic quod veritatis."
            </p>
            <article>
              <h2>Lucile Perry</h2>
              <p>Stayed in Stendans for 3 weeks</p>
            </article>
          </div>
        </div>
      </section>

      <div className="home-members">
        <h1>Community members</h1>

        <div className="home-members_list">
          <div className="home-member1">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
              alt=""
              width="90%"
            />
            <p className="home-member_name">Isabelle Reynolds</p>
          </div>
          <div className="home-member2">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
              alt=""
              width="90%"
            />
            <p className="home-member_name">Brett Patterson</p>
          </div>
          <div className="home-member3">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
              alt=""
              width="90%"
            />
            <p className="home-member_name">Lillie Jackson</p>
          </div>
        </div>
        <Link className="home-btn" to="/members">
          See all members
        </Link>
      </div>

      <img
        src="https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
        alt=""
        width="100%"
      />

      <section className="home-nature">
        <div className="home-nature_text">
          <div className="home-nature_toptext">
            <h1 className="home-nature_title">Nature</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              aut libero sunt quia cumque suscipit velit. Sunt, eius ex! Ipsam,
              iste tempore blanditiis quasi perferendis harum fugiat quidem
              facere vitae!
              <br />
              <br />
              Amet consectetur adipisicing elit. Maiores, aut libero sunt quia
              cumque suscipit velit. Sunt, eius ex! Ipsam, iste tempore
              blanditiis quasi perferendis harum fugiat quidem facere
              vitae!Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maiores.
            </p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1951&q=80"
          alt=""
          width="40%"
        />
      </section>

      <div className="home-reserve">
        <div className="home-reserve_text">
          <h1>
            Reserve
            <br />
            your spot
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni id
            dolor repellat sit. Animi aperiam sed, harum quaerat eligendi quis
            doloremque quas culpa autem, et dolor dignissimos similique, porro
            ea.
          </p>
        </div>

        <section className="home-reserveblk">
          <div className="home-reserveblk_box">
            <span className="bold">$10,-</span>
            <span>/ a month</span>

            <div className="home-reserveblk-maintexts">
              <h1 className="home-reserveblk-title">Join the waiting list</h1>
              <ul className="home-reserveblk-ul">
                <li className="home-reserveblk-li">Get a priority to join</li>
                <li className="home-reserveblk-li">Co-create with us</li>
                <li className="home-reserveblk-li">Insider news</li>
              </ul>
            </div>

            <button className="home-btn">apply</button>
          </div>

          <div className="home-reserveblk_box">
            <span className="bold">$44,-</span>
            <span>/ a month</span>

            <div className="home-reserveblk-maintexts">
              <h1 className="home-reserveblk-title">
                A bed 14
                <br />
                days a Year
              </h1>
              <ul className="home-reserveblk-ul">
                <li className="home-reserveblk-li">Bunkbed in paradise</li>
                <li className="home-reserveblk-li">1 SDG Course</li>
                <li className="home-reserveblk-li">Pledge to be active</li>
              </ul>
            </div>

            <button className="home-btn">apply</button>
          </div>

          <div className="home-reserveblk_box1">
            <span className="bold">$444,-</span>
            <span>/ a month</span>
            <h1 className="home-reserveblk-title">
              Designer Villa 3 Weeks Per Year
            </h1>

            <div className="home-reserveblk-maintexts">
              <ul className="home-reserveblk-ul">
                <li className="home-reserveblk-li">Villa in Paradise</li>
                <li className="home-reserveblk-li">Sleeps up to 6 people</li>
                <li className="home-reserveblk-li">1x massage per day</li>
                <li className="home-reserveblk-li">1x speed cleaning</li>
                <li className="home-reserveblk-li">1x functional workout</li>
              </ul>
            </div>

            <button className="home-btn" id="home-btn_1">
              apply
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
