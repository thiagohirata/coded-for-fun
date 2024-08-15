import React from "react";

const Section: React.FC = () => {
  return (
    <a href="https://tile-puzzle.hirata.dev.br">
      <section className="h-[340px] flex flex-col ">
        <h2 className="font-semibold text-slate-200">
          Tile Tide <small className="ml-2 text-gray-500">2024</small>
        </h2>

        <p className="mt-2">A logic puzzle game.</p>

        <img
          className="w-full h-[250px] object-contain bg-gray-700 rounded-xl mt-auto"
          src={require("./cover-image.png")}
          alt="Cover for Tile Tide"
        />
      </section>
    </a>
  );
};

export default Section;
