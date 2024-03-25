import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
function HeroPage() {
  return (
    <div className="container px-8 bg-gradient-to-r from-lime-50 to-white-500  w-full h-full md:h-screen">
      <div className="md:grid md:grid-cols-3 py-16 md:pt-2 md:h-full ">
        <div className="md:col-span-1 flex flex-col  justify-center md:h-full mx-auto">
          <Typography className="text-[#5cb25d] font-epilogue text-5xl lg:text-7xl font-bold pb-4">
            Built with us a better world
          </Typography>
          <div className="flex items-start justify-start pb-6 ">
            <Typography className=" text-[#484847] text-xl">
              <span className="block font-poppins">
                Our mission is to help{" "}
              </span>
              <span className="block font-poppins">promote and protect</span>
              <span className="block font-poppins">
                human rights around the
              </span>
              <span className="block font-poppins">world.</span>
            </Typography>
          </div>
          <div className="">
            <Button
              variant="gradient"
              color="amber"
              className=" text-black w-[70%] font-poppins font-bold text-sm"
            >
              Join Us
            </Button>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <img
            className="w-3/4 h-auto object-cover object-center hidden md:block"
            src="img.svg"
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
}
export default HeroPage;
