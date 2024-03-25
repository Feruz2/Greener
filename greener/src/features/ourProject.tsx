import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
function OurProject() {
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
          Our Project
        </Typography>
      </div>
      <div className="flex flex-col items-center justify-center w-[70%] mx-auto pb-8">
        <Typography className="text-5xl font-poppins font-bold pb-8">
          Mission Smile 1k: Outdoor charity outreach
        </Typography>
        <Typography className="text-base font-epilogue pb-4">
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
          in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
          tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
          accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in
          viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
          vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum
          amet, nisi eu id.
        </Typography>
        <Typography className="text-base font-epilogue pb-4">
          Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus
          sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras
          volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim a
          in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec
          arcu sed elit scelerisque tempor ornare tristique. Integer faucibus
          duis praesent tempor feugiat ornare in. Erat libero egestas porttitor
          nunc pellentesque mauris et pulvinar eget.
        </Typography>
        <Typography className="text-base font-epilogue pb-4">
          Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus
          libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et
          consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl
          pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu
          rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel
          nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus
          pellentesque risus duis est.
        </Typography>
      </div>
      <div className="flex items-center justify-center mx-auto pb-8">
        <img
          className="w-[80%] h-auto object-cover object-center hidden md:block mx-auto"
          src="knowAboutUs.svg"
          alt="hero image"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-[70%] mx-auto pb-8">
        <Typography className="text-5xl font-poppins font-bold pb-8">
          Achievements
        </Typography>

        <Typography className="text-base font-epilogue pb-4">
          Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at
          sit convallis blandit blandit in. Maecenas odio orci lectus urna ante
          consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper
          sit tellus adipiscing. Est sapien rhoncus sit vestibulum sollicitudin.
          Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum
          felis interdum pharetra. Diam fermentum in lectus morbi at eget sit et
          quisque. Semper commodo viverra donec magna egestas nibh. Condimentum
          pellentesque auctor ornare at at tellus nunc cras eu. Velit dignissim
          penatibus faucibus tempus. Arcu pharetra morbi bibendum et dolor
          volutpat amet. Sed mauris amet mi sed purus vitae odio. Mi eu lectus
          suscipit sagittis, ultrices ut dui.
        </Typography>
        <Typography className="text-base font-epilogue pb-4">
          Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at
          sit convallis blandit blandit in. Maecenas odio orci lectus urna ante
          consequat erat non morbi.
        </Typography>
      </div>
      <div className="flex flex-col ">
        <div className="flex items-center pb-8">
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
            More Projects
          </Typography>
        </div>
        <div className="flex space-x-6 w-[90%] mx-auto">
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
        </div>
      </div>
    </div>
  );
}
export default OurProject;
