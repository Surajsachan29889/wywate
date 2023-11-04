import midbackground from "../../public/mid-Background3.png";
import oval from "../../public/oval.svg";
import handmobile from "../../public/handmobile.svg";
import gym from "../../public/gym.svg";
import salon from "../../public/salon.svg";
import tatto from "../../public/tatto.svg";
import music from "../../public/music.svg";
import takeaway from "../../public/takeaway.svg";
import offer from "../../public/offer.svg";
import bakery from "../../public/bakery.svg";
import foodcourt from "../../public/foodcourt.svg";
import dance from "../../public/dance.svg";
import arrow2 from "../../public/arrow2.svg";
import line from "../../public/line.svg";
import mobilelogo from "../../public/mobilelogo.svg";
import midllogo2 from "../../public/midlogo2.svg";
import smartphone from "../../public/Smartphone.svg";
import calender from "../../public/Calendar.svg";
import widget from "../../public/Widget Add.svg";
import applelogo from "../../public/apple logo.svg";
import playstorelogo from "../../public/Google Play LOGO.svg";

export default function Midsec2() {
  return (
    <div className="midcontainer2 h-[100vh] relative mb-[10%] ">
      <hr className="w-[85%] h-[20px] absolute right-0 line" />
      <div>
        <img src={oval} alt=".." className="top-[5%] absolute right-[20%]" />
        <img src={oval} alt=".." className="top-[-2%] absolute right-[10%]" />
        <img
          src={midbackground}
          alt=".."
          className=" absolute right-0 top-[0%] z-[-1000] "
        />
      </div>
      <div>
        <img
          src={line}
          alt=".."
          className="absolute top-[29%] left-[25%] rotate-5 "
        />
        <img
          src={line}
          alt=".."
          className="absolute top-[30%] left-[26%] rotate-[96deg] "
        />
        <img
          src={line}
          alt=".."
          className="absolute top-[37%] left-[32%] rotate-[109deg] "
        />
        <img
          src={line}
          alt=".."
          className="absolute top-[46%] left-[31%] rotate-[140deg] "
        />
        <img
          src={line}
          alt=".."
          className="absolute top-[54%] left-[31%] rotate-[173deg] "
        />
        <img
          src={line}
          alt=".."
          className="absolute top-[65%] left-[26%] rotate-[190deg] "
        />
        <img
          src={line}
          alt=".."
          className="absolute top-[40%] left-[20%] rotate-[-3deg] "
        />
        <img
          src={line}
          alt=".."
          className="absolute top-[46%] left-[19%] rotate-[319deg] "
        />
        <img
          src={line}
          alt=".."
          className="absolute top-[51%] left-[17%] rotate-[281deg] "
        />
        <img
          src={gym}
          alt=".."
          className="absolute top-[85%] left-[35%] h-[15%] "
        />
        <img
          src={salon}
          alt=".."
          className="absolute top-[14%] left-[35%] h-[15%] "
        />
        <img
          src={tatto}
          alt=".."
          className="absolute top-[70%] left-[9%] h-[15%] "
        />
        <img src={music} alt=".." className="absolute top-[12%] left-[20%] " />
        <img
          src={takeaway}
          alt=".."
          className="absolute top-[50%] left-[8%] "
        />
        <img src={offer} alt=".." className="absolute top-[30%] left-[43%] " />
        <img src={bakery} alt=".." className="absolute top-[50%] left-[45%] " />
        <img
          src={foodcourt}
          alt=".."
          className="absolute top-[30%] left-[12%] h-[15%] "
        />
        <img
          src={dance}
          alt=".."
          className="absolute top-[70%] left-[40%] h-[15%] "
        />
        <img
          src={handmobile}
          alt=".."
          className="absolute left-[15%] top-[35%] "
        />

        <img
          src={mobilelogo}
          alt=".."
          className="absolute left-[27.7%] top-[50%] "
        />
        <div className="h-[1.70319rem] w-[7.20081rem] bg-[#09C27E] absolute left-[27.7%] top-[65%] text-center rounded-[0.25rem] font-bold text-[.8vw] pt-1 ">
          Get Started
        </div>
      </div>
      <div>
        <img
          src={midllogo2}
          alt=".."
          className="absolute left-[65%] top-[13%] "
        />

        <div className="absolute left-[60%] top-[25%] text-right w-[30%] font-extrabold  ">
          <h1 className=" text-[4vw] ">
            <span className="text-[#09C27E]">Go</span> Smart & Get Organised
          </h1>
        </div>
        <div className="absolute top-[60%] left-[55%] flex flex-col gap-12 ">
          <div className="flex gap-5 flex-row-reverse">
            <img src={arrow2}></img>
            <img src={calender}></img>
            <p className="text-[2vw] text-[#595959] font-medium ">
              Schedule anytime & anywhere
            </p>
          </div>
          <div className="flex gap-5 flex-row-reverse">
            <img src={arrow2}></img>
            <img src={smartphone}></img>
            <p className="text-[2vw] text-[#595959] font-medium ">
              Personalised app
            </p>
          </div>
          <div className="flex gap-5 flex-row-reverse">
            <img src={arrow2}></img>
            <img src={widget}></img>
            <p className="text-[2vw] text-[#595959] font-medium ">
              Explore More
            </p>
          </div>
        </div>
        <div className=" absolute flex flex-row top-[101%] left-[63%] gap-11 ">
          <a href="#">
            <button className="border-[black] border-[2px] w-[11.0625rem] h-[3.5rem] grid grid-rows-3 grid-flow-col justify-center gap-4 items-center rounded-lg ">
              <img src={applelogo} alt=".." className="row-span-3" />
              <p className="col-span-2 text-[9px] pt-6 pr-[29px]  ">
                Download on the
              </p>
              <h1 className="row-span-2 font-bold pb-3">App Store</h1>
            </button>
          </a>
          <a href="#">
            <button className="border-[black] border-[2px] w-[11.0625rem] h-[3.5rem] grid grid-rows-3 grid-flow-col justify-center gap-4 items-center rounded-lg">
              <img src={playstorelogo} alt=".." className="row-span-3" />
              <p className="col-span-2 text-[9px] pt-7 pr-[33px] ">Get it on</p>
              <h1 className="row-span-2 font-bold pb-3">Google Play</h1>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
