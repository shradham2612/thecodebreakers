import team from "./components/team.gif";
import "./components/head.css";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Head() {
  Aos.init({ duration: 2000, offset: 200 });
  return (
    <div>
      <div className="heading" data-aos="zoom-in">
        <center>
          <h1>About Us</h1>
        </center>
      </div>

      <div className="us" data-aos="fade-up">
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quaerat sapiente qui laboriosam officia impedit dolore quasi tenetur
            quas, accusantium enim corporis atque officiis pariatur! Minus
            perspiciatis porro mollitia enim delectus consequatur doloremque
            tempore laborum excepturi voluptatibus vel, magnam aliquid vitae
            officiis quidem aperiam nesciunt, repudiandae quasi nemo nihil
            impedit quam. Ullam officiis vel amet quo, repudiandae saepe
            accusamus ipsa voluptatibus doloremque dolores eveniet
            exercitationem quas adipisci? Repellat recusandae quo ullam itaque
            quis eum blanditiis beatae expedita distinctio veritatis quos, sit
            delectus? Quis nostrum culpa aperiam perspiciatis minima eaque
            officiis alias architecto, ratione molestiae nulla et pariatur est
            voluptatum doloremque!
          </p>
        </div>
        <div className="ani">
          <img src={team} alt="team" className="anig" data-aos="zoom-in-left" />
        </div>
      </div>
    </div>
  );
}

export default Head;
