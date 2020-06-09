import React from "react";
import "./infobar.styles.scss";

const InfoBar = ({ name, roomName }) => {
  return (
    <div className="info-bar">
      <div className="user-info">
        <p>
          Room: <span className="title">{roomName}</span> SignedIn as:
          <span className="title">{name}</span>{" "}
        </p>
      </div>
      <div className="exit">
        <a href="/" className="go-back">
          X
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
