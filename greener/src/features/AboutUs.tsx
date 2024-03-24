import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
function AboutUS() {
  const router = useRouter();
  return (
    <div className="container px-8 bg-gradient-to-r from-lime-50 to-white-500 w-full h-full md:h-screen">
      <div className="md:grid md:grid-cols-2 py-16 md:pt-2 md:h-full ">
        <div className=" flex items-center  ">
          <img
            className="w-[90%] h-auto object-cover object-center hidden md:block"
            src="aboutUS.svg"
            alt="hero image"
          />
        </div>
        <div className="flex flex-col md:h-full justify-center w-[70%] pl-10">
          <div className="flex flex-col justify-center ">
            <Typography className="font-poppins text-xl font-semibold text-[#484847]">
              Who we are?
            </Typography>
            <Typography className="font-epilogue">
              We connect ideas and resources with other NGOs to build a better
              world for everyone.
            </Typography>
            <div className="my-6">
              <hr className="border-t border-gray-300"></hr>
            </div>
            <Typography className="font-poppins text-xl font-semibold text-[#484847]">
              What we do?
            </Typography>
            <Typography className="font-epilogue">
              We protect and promote the protection of the planet and human
              dignity, we encourage awareness of the climate, the environment,
              data and technology, human rights, among other related issues.
            </Typography>
            <div className="my-6">
              <hr className="border-t border-gray-300"></hr>
            </div>
            <Typography className="font-poppins text-xl font-semibold text-[#484847]">
              Where we work?
            </Typography>
            <Typography className="font-epilogue">
              We connect ideas and resources with other NGOs to build a better
              world for everyone.
            </Typography>
          </div>
          <div className="pt-8">
            <Button
              variant="gradient"
              color="amber"
              className=" text-black w-[70%] font-poppins font-bold text-sm"
              onClick={() => router.push("/about-us")}
            >
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUS;
