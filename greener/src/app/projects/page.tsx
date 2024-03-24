"use client";
import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import AboutUS from "@/features/AboutUs";
import HeroPage from "@/features/HeroPage";
import OurProject from "@/features/ourProject";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <OurProject />
      <Footer />
    </>
  );
}
