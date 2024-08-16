import IconGitHub from "@tabler/icons/outline/brand-github.svg";
import React from "react";
import Scoreboard from "./sections/2024-Scoreboard";
import TileTide from "./sections/2024-TileTide";
import Bobabibu from "./sections/2024-Bobabibu";
import EscapeTheMageTower from "./sections/2020-Escape the Mage Tower";
import RGB from "./sections/2020-RGB";

export type Section = {
  title: string;
  subtitle: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
  badge: string;
  sourceUrl?: string;
};

const CONTENT: Section[] = [
  Scoreboard,
  TileTide,
  Bobabibu,
  EscapeTheMageTower,
  RGB,
] as const;

const Page: React.FC = () => {
  return (
    <main className="page py-10 container">
      <h1 className="text-5xl font-bold text-center mb-4">Coded for Fun</h1>
      <p className="text-center">Some stuff I coded for fun</p>
      <div className="px-1 lg:px-0 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        {CONTENT?.map((section, idx) => (
          <a href={section?.href} key={idx}>
            <section className="h-[340px] flex flex-col ">
              <div className="flex">
                <h2 className="font-semibold text-slate-200 mr-auto">
                  {section?.title}{" "}
                  <small className="ml-2 text-gray-500">{section?.badge}</small>
                </h2>
                {section.sourceUrl && (
                  <a href={section.sourceUrl}>
                    <button className="btn-icon text-gray-400" type="button">
                      <span className="sr-only">Github</span>
                      <IconGitHub height={20} width={20} />
                    </button>
                  </a>
                )}
              </div>

              <p className="mt-2">{section?.subtitle}</p>

              <img
                className="w-full h-[250px] object-cover bg-gray-700 rounded-xl mt-auto hover:scale-105 transition"
                src={section?.imgSrc}
                alt={section?.imgAlt}
              />
            </section>
          </a>
        ))}
      </div>

      <section className="mt-20 w-full p-4">
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
