import React from "react";
import "./Banner.css";

function Banner() {
  function trumcate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: `cover`,
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: `center center`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          <h1 className="banner__description">
            {trumcate(
              `This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description`,
              99
            )}
          </h1>
        </div>
      </div>

      <div className="banner--fadeButtom" />
    </header>
  );
}

export default Banner;
