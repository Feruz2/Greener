import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
function ContactUs() {
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
          Contact Us
        </Typography>
      </div>
      <div className="grid grid-cols-2 flex items-center justify-center place-items-center w-[85%] mx-auto pb-8">
        <div className="flex flex-col justify-center item-center">
          <Typography className="text-5xl font-poppins font-bold pb-4 ">
            We would love to hear from you
          </Typography>
          <Typography className="text-base font-epilogue">
            Have any question in mind or want to enquire? Please feel free to
            contact us through the form or the following details.
          </Typography>
        </div>
        <div className="">
          <div className="flex-col items-center justify-center">
            <Typography
              color="black"
              className="mb-3 font-semibold font-poppins"
            >
              Contact Us
            </Typography>
            <div className="flex items-center gap-x-2 pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z"
                  fill="#A8ADB7"
                />
                <path
                  d="M11.9988 12.87C11.1588 12.87 10.3088 12.61 9.6588 12.08L6.5288 9.57997C6.2088 9.31997 6.14881 8.84997 6.4088 8.52997C6.66881 8.20997 7.13881 8.14997 7.45881 8.40997L10.5888 10.91C11.3488 11.52 12.6388 11.52 13.3988 10.91L16.5288 8.40997C16.8488 8.14997 17.3288 8.19997 17.5788 8.52997C17.8388 8.84997 17.7888 9.32997 17.4588 9.57997L14.3288 12.08C13.6888 12.61 12.8388 12.87 11.9988 12.87Z"
                  fill="#A8ADB7"
                />
              </svg>
              <Typography
                as="a"
                href="#"
                color="gray"
                className="py-1.5 font-normal transition-colors font-epilogue hover:text-blue-gray-900"
              >
                Johndoe@gmail.com
              </Typography>
            </div>
            <div className="flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                  stroke="#A8ADB7"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
              </svg>{" "}
              <Typography
                as="a"
                href="#"
                color="gray"
                className="py-1.5 font-normal transition-colors font-epilogue hover:text-blue-gray-900"
              >
                +251-912-345-678
              </Typography>
            </div>

            <div className="my-6">
              <hr className="border-t border-gray-300"></hr>
            </div>

            <Typography
              color="black"
              className="font-poppins mb-3 font-semibold "
            >
              Head Office
            </Typography>
            <Typography
              color="gray"
              className="py-1.5 font-normal font-epilogue transition-colors hover:text-blue-gray-900"
            >
              8 Brewery Drive, Addis Ababa, Ethiopia
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
