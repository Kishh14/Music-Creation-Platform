import React from "react";

/**
 * @type { React.FC<import('../../types/user').User> }
 */

const Avatar = ({ profile_img, username, isMicOn }) => {
  return (
    <div className="flex-shrink-0 flex flex-col items-center">
      <div className="relative">
        <img src={profile_img} alt="Avatar" className="size-12 rounded-full" />
        <div
          className={
            "size-3 rounded-full border-2 absolute bottom-0 right-0 " +
            (isMicOn ? "bg-green-500" : "bg-red-500")
          }
        ></div>
      </div>

      <p className="mt-1 text-sm font-semibold">{username}</p>
    </div>
  );
};

export default Avatar;