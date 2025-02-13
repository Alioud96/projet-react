// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaBell } from "react-icons/fa6";
import imgUser from "../../assets/user.png";
import SecondCard from "../../composants/SecondCard";

export const Accueils = () => {
  const table = [
    {
      classess: "bg-sky-600 p-8 rounded-xl",
      numberss: "102",
      textess: "listes patients",
    },
    {
      classess: "bg-green-600 p-8 rounded-xl",
      numberss: "98",
      textess: "listes rendez-vous",
    },
    {
      classess: "bg-pink-600 p-8 rounded-xl",
      numberss: "48",
      textess: "listes personnels",
    },
    {
      classess: "bg-yellow-600 p-8 rounded-xl",
      numberss: "39",
      textess: "listes frais",
    },
  ];

  return (
    <div className="p-10">
      <div className="flex justify-between items-start py-5 ">
        <div className="w-2/4">
          <h2 className="text-sky-600 text-3xl font-bold">
            Bienvenue ! Docteur
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            explicabo, voluptates nostrum corporis illo voluptate assumenda
            officiis, ut sapiente facilis, officia quae quas!
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <FaBell className="text-2xl" />
          <img src={imgUser} className="w-10" alt="" />
        </div>
      </div>
      <h2 className="text-7xl">Rendez-vous</h2>
      <div className="grid grid-cols-2 gap-5 my-5">
        {table.map((aliou) => (
          // eslint-disable-next-line react/jsx-key
          <SecondCard
            classe={aliou.classess}
            number={aliou.numberss}
            texte={aliou.textess}
          />
        ))}
      </div>
    </div>
  );
};