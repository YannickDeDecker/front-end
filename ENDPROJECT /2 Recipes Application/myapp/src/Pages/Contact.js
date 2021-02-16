import React from "react";
import "./Contact.css";
import Facebook from "../Images/facebook-brands.svg";
import LinkedIn from "../Images/linkedin-in-brands.svg";
import Instagram from "../Images/instagram-brands.svg";
import Github from "../Images/github-brands.svg";
import Mobile from "../Images/phone-alt-solid.svg";
import Website from "../Images/laptop-solid.svg";

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>bel me, mail me</h1>
              <h2>Of laat gewoon een berichtje achter! Your choice.</h2>
              <ul>
                <li>
                  <img src={Facebook}></img>www.facebook.com/yannick.dedecker
                </li>
                <li>
                  <img src={LinkedIn}></img>www.linkedin.com/in/yannickdedecker
                </li>
                <li>
                  <img src={Instagram}></img>www.instagram.com/iamyannickdd
                </li>
                <li>
                  <img src={Github}></img>github.com/YannickDeDecker
                </li>
                <li>
                  <img src={Mobile}></img>0487 14 09 39
                </li>
                <li>
                  <img src={Website}></img>www.facebook.com/yannick.dedecker
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="">Voornaam:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                ></input>
                <label for="">Achternaam:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                ></input>
                <label for="">Bedrijf:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                ></input>
                <label for="">E-mail:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                ></input>
                <label for="">GSM:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                ></input>
                <label for="">Bericht:</label>
                <textarea name="" id=""></textarea>
                <button type="submit">Verzenden</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
