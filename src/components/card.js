import coder from "./components/coder.jpg";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./components/card.css";
import name_list from "./components/name_list";

function Card() {
  Aos.init({ duration: 2000, offset: 200 });
  {
    function This_card(props) {
      return (
        <div class="flip-card-container-main" data-aos="fade-up">
          <div class="flip-card">
            <div class="flip-card-front">
              <img src={props.img} alt="" class="fm" />
            </div>
            <div class="flip-card-back">
              <div class="name">
                <h3>{props.Name}</h3>
              </div>
              <div class="Position">
                <h3>{props.Position}</h3>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="repeat">
        <div className="heading" data-aos="zoom-in">
          <center>
            <h1>Our Team</h1>
          </center>
        </div>

        {<div className="whole">{detail_array.map(This_card)};</div>}
      </div>
    );
  }
}

export default Card;
