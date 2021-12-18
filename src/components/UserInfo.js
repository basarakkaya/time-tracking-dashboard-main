import React from "react";

import avatar from "../assets/images/image-jeremy.png";

const UserInfo = () => {
  return (
    <div>
      <img src={avatar} alt="user avatar" />
      <p>Report for</p>
      <p>Jeremy Robson</p>
    </div>
  );
};

export default UserInfo;
