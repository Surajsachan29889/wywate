import midsecimg from "../../public/midsecimg.svg";
import arrowpoint from "../../public/arrowpoint.svg";
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
      <div className="w-[50%]" >
        <img src={midsecimg} alt=".." className="absolute top-[25%] right-[8%] " />
      </div>
      <div>
        <img
          src={midllogo2}
          alt=".."
          className="absolute left-[8%] top-[13%] "
        />

        <div className="absolute left-[8%] top-[25%]  w-[30%] font-extrabold  ">
          <h1 className=" text-[4vw] ">
            <span className="text-[#00CC99]">Go</span> Smart & Get Organised
          </h1>
        </div>
        <div className="absolute top-[60%] left-[8%] flex flex-col gap-12 ">
          <div className="flex gap-5 flex-row">
            <img src={arrowpoint}></img>
            <img src={calender}></img>
            <p className="text-[2vw] text-[#595959] font-medium ">
              Schedule anytime & anywhere
            </p>
          </div>
          <div className="flex gap-5 flex-row">
            <img src={arrowpoint}></img>
            <img src={smartphone}></img>
            <p className="text-[2vw] text-[#595959] font-medium ">
              Personalised app
            </p>
          </div>
          <div className="flex gap-5 flex-row">
            <img src={arrowpoint}></img>
            <img src={widget}></img>
            <p className="text-[2vw] text-[#595959] font-medium ">
              Explore More
            </p>
          </div>
        </div>
        <div className=" absolute flex flex-row top-[101%] left-[8%] gap-11 ">
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
            <button className="border-[black] border-[2px] w-[11.0625rem] h-[3.5rem] grid grid-rows-3 grid-flow-col justify-center gap-4 items-center rounded-lg  hover:bg-black transition-all hover:text-[white] ">
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
