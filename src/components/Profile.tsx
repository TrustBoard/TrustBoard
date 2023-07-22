import React from "react";

import { RiArrowDropDownLine } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="flex flex-row items-center gap-5">
      <img
        src="/profile_placeholder.png"
        alt="profile picture"
        className="w-14 h-14"
      />
      <p className="flex flex-col gap-1 w-16">
        <span className="font-semibold">Aiden</span>
        <span className="text-thin text-black/50">Admin</span>
      </p>
      <RiArrowDropDownLine className="w-8 h-8 text-black" />
    </div>
  );
};

export default Profile;
