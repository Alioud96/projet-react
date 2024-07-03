/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaListAlt } from "react-icons/fa";

const SecondCard = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className={props.classe}>
      <div className="flex items-center justify-center">
        <span className="bg-white p-3 translate-x-2 font-bold rounded-xl">{props.number}</span>
        <span className="bg-white p-3 rounded-full">
          <FaListAlt />
        </span>
      </div>
      <h2 className="text-center text-2xl font-bold text-white">{props.texte}</h2>
    </div>
  );
};

export default SecondCard;
