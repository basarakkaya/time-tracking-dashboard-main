import React from "react";

import Tabs from "./Tabs";
import UserInfo from "./UserInfo";

const UserInfoContainer = () => {
  return (
    <div className="user-info-container">
      <UserInfo />
      <Tabs />
    </div>
  );
};

export default UserInfoContainer;
