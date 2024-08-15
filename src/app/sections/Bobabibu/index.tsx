import React from "react";

const Section: React.FC = () => {
  return (
    <a href="https://scoreboard.hirata.dev.br">
      <section className="h-[340px] flex flex-col ">
        <h2 className="font-semibold text-slate-200">
          Bobabibu <small className="ml-2 text-gray-500">2024</small>
        </h2>

        <p className="mt-2">An educational game</p>

        <img
          className="w-full h-[250px] object-contain bg-gray-700 rounded mt-auto"
          src={require("./icon.png")}
          alt="Icon of Bobabibu"
        />
      </section>
    </a>
  );
};

export default Section;
