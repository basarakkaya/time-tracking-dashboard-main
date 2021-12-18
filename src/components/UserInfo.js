import React from "react";

import avatar from "../assets/images/image-jeremy.png";

const UserInfo = () => {
  return (
    <div className="user-info">
      <img src={avatar} alt="user avatar" className="avatar" />
      <div className="user-name-container">
        <p className="report-for">Report for</p>
        <p className="user-name">Jeremy Robson</p>
      </div>
    </div>
  );
};

export default UserInfo;
