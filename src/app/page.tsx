"use client";

import Image from "next/image";
import Login from "./login/page";
import React from "react";
import Lottie from "lottie-react";
import wavef from "@/app/assets/lottie/wavefront.json";
import waveb from "@/app/assets/lottie/waveback.json";
import travelanimation from "@/app/assets/lottie/travelb.json";

export default function Home() {
  return (
    <div className="flex w-svw h-svh justify-end items-center">
      <div className="flex-col main_logo mt-8">
        <Image
          src="/logo/futb1.png"
          width={500}
          height={300}
          alt="Picture of the logo"
        />
        <div className="landing_message_section flex items-center">
          <h3>Assisting you on your every other requirements.</h3>
        </div>
      </div>
      <Lottie animationData={wavef} loop={true} className="wavefront" />
      <Lottie
        animationData={travelanimation}
        loop={true}
        className="travellandinglottie"
      />
      <Lottie animationData={waveb} loop={true} className="waveback" />
      <Login />
    </div>
  );
}
