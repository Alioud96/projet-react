/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaUserFriends } from "react-icons/fa";

const Card = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className={props.className}>
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <div className="flex items-center justify-center">
        // eslint-disable-next-line react/prop-types, react/prop-types
        <p className="bg-white p-3 font-bold rounded-xl">{props.number}</p>
        <div className="bg-white p-3 rounded-full">
          <FaUserFriends />
        </div>
      </div>
      <h2 className="text-white text-3xl text-center">{props.text}</h2>
    </div>
  );
};

export default Card;
