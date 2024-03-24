import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
function KnowAboutUs() {
  return (
    <div className="container p-8 bg-gradient-to-r from-lime-50 to-white-500  w-full ">
      <div className="flex items-center">
        <svg
          width="40"
          height="3"
          viewBox="0 0 72 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1.50003H72" stroke="#1D2130" stroke-width="2" />
        </svg>

        <Typography className="font-poppins pl-2 font-medium">
          Know about us
        </Typography>
      </div>
      <div className="grid grid-cols-3 flex items-center justify-center place-items-center w-[85%] mx-auto pb-8">
        <div className="col-span-2 flex justify-center item-center">
          <Typography className="text-5xl font-poppins font-bold ">
            We are a non-governmental organization
          </Typography>
        </div>
        <div className="col-span-1">
          <Typography className="text-xl font-poppins font-semibold pb-4">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere.
          </Typography>
          <Typography className="text-base font-epilogue">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Suspendisse varius enim elementum tristique.
          </Typography>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto pb-8">
        <img
          className="w-[90%] h-auto object-cover object-center hidden md:block mx-auto"
          src="knowAboutUs.svg"
          alt="hero image"
        />
      </div>
      <div className="grid grid-cols-2 flex items-center justify-center place-items-center w-[85%] mx-auto pb-8">
        <div className="flex flex-col w-[80%]">
          <Typography className="font-poppins font-medium">
            Our Mission
          </Typography>
          <Typography className="text-xl font-poppins font-semibold pb-4">
            We make sure to provide inclusive care for children with special
            needs
          </Typography>
          <Typography className="text-base font-epilogue">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Suspendisse varius enim elementum tristique.
          </Typography>
        </div>
        <div className="flex flex-col w-[80%]">
          <Typography className="font-poppins font-medium">
            Our Vision
          </Typography>
          <Typography className="text-xl font-poppins font-semibold pb-4">
            Provide more inclusive care to children around the world
          </Typography>
          <Typography className="text-base font-epilogue">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Suspendisse varius enim elementum tristique.
          </Typography>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto pb-8">
        <img
          className="w-[90%] h-auto object-cover object-center hidden md:block mx-auto"
          src="knowAboutUs2.svg"
          alt="hero image"
        />
      </div>
    </div>
  );
}
export default KnowAboutUs;
