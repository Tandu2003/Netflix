import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    window.scroll > 100 ? handleShow(true) : handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Logo"
          className="nav__logo"
        />

        <img
          src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/348253967_926553688560335_8725147698199631235_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Uck4FZwux6QAX-8QcgB&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfDu62dC5uqFoXV_mvt9pZBVdRUy-liiOnRUNhrW87FQag&oe=65202261"
          alt="avt"
          className="nav__avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
