import React from "react";
function Avatar({ url }) {
  return (
    <img
      className="user-avatar"
      src={url ? url : require("../../assets/defaultavatar.png")}
      alt="useravatar"
    />
  );
}

export default Avatar;
