"use client";

import Image from "next/image";
import React from "react";

import RegSign from "@/app/components/RegSign";
import Footer from "@/app/components/static/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-svw h-svh justify-center items-center landing_page">
      <div className="flex flex-col sm:flex-row h-3/4 w-full justify-center items-center ">
        <div className="flex flex-col w-full sm:w-[65%] h-[100px] sm:h-full justify-center items-center ">
          <Image
            src="/logo/futb1.png"
            width={500}
            height={300}
            alt="Picture of the logo"
            className="mainlogoImg"
            priority
          />
          <h3 className="landing_msg">
            Assisting you on your every other requirements.
          </h3>
        </div>
        <div className="flex w-full sm:w-[35%] h-full justify-center items-center">
          <RegSign />
        </div>
      </div>

      <div className="flex h-[150px] sm:h-1/4 w-full justify-end items-center">
        <Footer />
      </div>
    </div>
  );
}
