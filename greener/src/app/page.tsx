"use client";
import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import AboutUS from "@/features/AboutUs";
import CurrentActivities from "@/features/CurrentActivities";
import HeroPage from "@/features/HeroPage";
import Surviving from "@/features/Surviving ";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <AboutUS />
      <CurrentActivities />
      <Surviving />
      <Footer />
    </>
  );
}
