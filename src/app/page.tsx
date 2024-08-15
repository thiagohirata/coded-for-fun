import IconGitHub from "@tabler/icons/outline/brand-github.svg";
import React from "react";
import Scoreboard from "./sections/Scoreboard";
import TileTide from "./sections/TileTide";
import Bobabibu from "./sections/Bobabibu";

const Page: React.FC = () => {
  return (
    <main className="page py-10 container">
      <h1 className="text-5xl font-bold text-center mb-4">Coded for Fun</h1>
      <p className="text-center">Some stuff I coded for fun</p>
      <div className="px-1 lg:px-0 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        <Scoreboard />
        <TileTide />
        <Bobabibu />
      </div>

      <section className="mt-10 w-full p-4">
        <div className="mt-auto flex gap-2 justify-center">
          <a href="https://github.com/thiagohirata/coded-for-fun">
            <button className="btn-icon" type="button">
              <span className="sr-only">Github</span>
              <IconGitHub height={20} width={20} />
            </button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Page;
