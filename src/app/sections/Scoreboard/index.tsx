import React from "react";

const Section: React.FC = () => {
  return (
    <a href="https://scoreboard.hirata.dev.br">
      <section className="h-[340px] flex flex-col ">
        <h2 className="font-semibold text-slate-200">Scoreboard</h2>
        <p className="mt-2">A simple scoreboard for playing board games.</p>

        <img
          className="w-full h-[250px] object-contain bg-gray-700 rounded mt-auto"
          src={require("./screenshot-01.jpg")}
          alt="screenshot of scoreboard"
        />
      </section>
    </a>
  );
};

export default Section;
