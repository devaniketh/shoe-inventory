"use client";
import React from "react";
import { BackgroundGradient } from "./components/ui/background-gradient";
import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "./components/background-beams-with-collision";

export default function BackgroundGradientCard() {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen flex flex-col justify-center items-center" >
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className=""></span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className=""></span>
          </div>
        </div>
      </h2>
      <div className="flex flex-row justify-center items-center gap-4 mt-10">
        <BackgroundGradient className="rounded-xl w-72 p-4 bg-gray-100 dark:bg-zinc-800 shadow-lg">
          <div className="flex flex-col items-center">
            <Image src={`/nike.jpg`} alt="jordans" height={300} width={170} className=" w-[170px] h-[200px] object-contain" />
            <p className="text-base font-semibold text-black mt-3 dark:text-white text-center">
              Air Jordan 4 Retro Reimagined.
            </p>
            <p className="text-xs text-gray-600 text-center dark:text-gray-400 mt-2">
              The Air Jordan 4 Retro Reimagined Bred will release on February 17, 2025.
            </p>
            <button className="mt-4 flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-red-500">
              <IconShoppingCart size={16} /> Buy Now <span className="bg-white text-red-600 px-2 py-0.5 rounded-full text-xs">$100</span>
            </button>
          </div>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-2xl w-72 p-4 bg-gray-100 dark:bg-zinc-800 shadow-lg">
          <div className="flex flex-col items-center">
            <Image src={`/puma.jpg`} alt="puma" height={200} width={170} className=" w-[170px] h-[200px] object-contain" />
            <p className="text-base font-semibold text-black mt-3 dark:text-white text-center">
              Puma RS-X Reinvented.
            </p>
            <p className="text-xs text-gray-600 text-center dark:text-gray-400 mt-2">
              The Puma RS-X Reinvented features a bold, futuristic design with retro influences.
            </p>
            <button className="mt-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-blue-500">
              <IconShoppingCart size={16} /> Buy Now <span className="bg-white text-blue-600 px-2 py-0.5 rounded-full text-xs">$90</span>
            </button>
          </div>
        </BackgroundGradient>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
