import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
function CurrentActivities() {
  return (
    <div
      id="currentactivites"
      className="container px-8 bg-gradient-to-r from-lime-50 to-white-500 py-8  w-full h-full"
    >
      <div className="flex justify-center">
        <Typography className="text-3xl font-poppins font-bold pb-8 ">
          Current Activities
        </Typography>
      </div>
      <div className="flex space-x-6 mx-auto ">
        <div className="flex flex-col">
          <img className="w-80 pb-2 " src="project3.svg" alt="project 1" />
          <Typography className="text-xl font-poppins font-bold pb-2">
            Climate Change
          </Typography>
          <Typography className="text-base font-epilogue pb-4">
            Indonesian pollster Indikator Politik Indonesia and climate policy
          </Typography>
          <a
            href={"/projects"}
            className="font-normal text-[#F3851D] font-epilogue hover:text-blue-300  "
          >
            Read more
          </a>
        </div>
        <div className="flex flex-col">
          <img className="w-80 pb-2 " src="project.svg" alt="project 1" />
          <Typography className="text-xl font-poppins font-bold pb-2">
            Climate Change
          </Typography>
          <Typography className="text-base font-epilogue pb-4">
            Indonesian pollster Indikator Politik Indonesia and climate policy
          </Typography>
          <a
            href={"/projects"}
            className="font-normal text-[#F3851D] font-epilogue hover:text-blue-300  "
          >
            Read more
          </a>
        </div>
        <div className="flex flex-col">
          <img className="w-80 pb-2 " src="project3.svg" alt="project 1" />
          <Typography className="text-xl font-poppins font-bold pb-2">
            Climate Change
          </Typography>
          <Typography className="text-base font-epilogue pb-4">
            Indonesian pollster Indikator Politik Indonesia and climate policy
          </Typography>
          <a
            href={"/projects"}
            className="font-normal text-[#F3851D] font-epilogue hover:text-blue-300  "
          >
            Read more
          </a>
        </div>
        <div className="flex flex-col">
          <img className="w-80 pb-2 " src="project.svg" alt="project 1" />
          <Typography className="text-xl font-poppins font-bold pb-2">
            Climate Change
          </Typography>
          <Typography className="text-base font-epilogue pb-4">
            Indonesian pollster Indikator Politik Indonesia and climate policy
          </Typography>
          <a
            href={"/projects"}
            className="font-normal text-[#F3851D] font-epilogue hover:text-blue-300  "
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
export default CurrentActivities;
