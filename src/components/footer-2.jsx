import footerlogo from "../../public/footerlogo.svg";
import whatsapp from "../../public/whatsapp.svg";
import yt from "../../public/yt.svg";
import fb from "../../public/fb.svg";
import printer from "../../public/printer.svg";
import location from "../../public/location.svg";
import phone from "../../public/phone.svg";
import email from "../../public/email.svg";

export default function Footer2() {
  return (
    <div className="relative h-[80vh]">
      <div className="h-[.5rem] w-[100%] bg-[#09C27E] "></div>
      <div className="h-[100%] bg-black flex flex-col  ">
        <div className="flex flex-col items-center justify-center gap-8 mt-[8%] ">
          <img src={footerlogo} alt=".." />
          <p className="text-[white] w-[50%] text-center font-thin ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
            voluptate enim commodi natus sunt. Provident nulla rem veritatis
            voluptates aspernatur....
            <a href="#">
              <span className="font-bold">Read more</span>
            </a>
          </p>
        </div>
        <div className="flex gap-5 justify-center mt-[3%] ">
          <a href="#">
            <img src={whatsapp} alt=".." />
          </a>
          <a href="#">
            <img src={yt} alt=".." />
          </a>
          <a href="#">
            <img src={fb} alt=".." />
          </a>
        </div>
        <div className="text-[white] flex gap-[10%] items-center justify-center mt-[3%] ">
          <div className="grid grid-rows-3 grid-flow-col">
            <img
              src={phone}
              alt=".."
              className="row-span-3 mr-[10px] pt-[5px]"
            />
            <span className="col-span-2 font-thin ">Tele</span>
            <p className="row-span-2 col-span-2">310-437-2766</p>
          </div>
          <div className="grid grid-rows-3 grid-flow-col">
            <img
              src={email}
              alt=".."
              className="row-span-3 mr-[10px] pt-[5px]"
            />
            <span className="col-span-2 font-thin ">Mail</span>
            <p className="row-span-2 col-span-2">unreal@outlook.com</p>
          </div>
          <div className="grid grid-rows-3 grid-flow-col ">
            <img
              src={location}
              alt=".."
              className="row-span-3 mr-[10px] pt-[5px]"
            />
            <span className="col-span-2 font-thin ">Address</span>
            <p className="row-span-2 col-span-2">
              706 Campfire Ave. Meriden, CT 06450
            </p>
          </div>
          <div className="grid grid-rows-3 grid-flow-col ">
            <img
              src={printer}
              alt=".."
              className="row-span-3 mr-[10px] pt-[5px]"
            />
            <span className="col-span-2 font-thin ">Fax</span>
            <p className="row-span-2 col-span-2">+1-212-9876543</p>
          </div>
        </div>
        <div></div>
        <div className="flex gap-[23%] justify-center mt-[5%] font-thin text-[grey] text-[15px] ">
          <div className="text-white flex gap-20">
            <a href="#">
              <span>About Us</span>
            </a>
            <a href="#">
              <span>Contact</span>
            </a>
            <a href="#">
              <span>Privicy Policy</span>
            </a>
            <a href="#">
              <span>Sitemap</span>
            </a>
            <a href="#">
              <span>Terms of Use</span>
            </a>
          </div>
          <div className="text-white">
            <span>© 2000-2021, All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}
