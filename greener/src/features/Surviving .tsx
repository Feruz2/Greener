import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
function Surviving() {
  const router = useRouter();
  return (
    <div className="container px-8 bg-gradient-to-r from-lime-50 to-white-500 w-full h-full md:h-screen">
      <div className="md:grid md:grid-cols-2 py-16 md:pt-2 md:h-full ">
        <div className="flex flex-col md:h-full justify-center w-[70%] pl-10">
          <div className="flex justify-center">
            <Typography className="text-3xl font-poppins font-bold pb-8 ">
              Surviving Covid and Political Strife
            </Typography>
          </div>
          <Typography className="text-base font-epilogue pb-4">
            Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
            in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
            tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
            accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque
            in viverra mi ut quisque.
          </Typography>
          <Typography className="text-base font-epilogue pb-4">
            Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus
            sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras
            volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim
            a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec
            arcu sed elit scelerisque tempor ornare tristique.
          </Typography>

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
        <div className=" flex items-center ">
          <img
            className="w-[70%] h-auto object-cover object-center hidden md:block"
            src="Surviving.svg"
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
}
export default Surviving;
