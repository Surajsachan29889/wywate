import wyvatelogo from "../../public/wyvatelogo.svg";
import play from "../../public/play.svg";
import download from "../../public/Download.svg";
import build from "../../public/business.svg";

export default function Navbar() {
  return (
    <div className="w-[70%] h-[104px] left-[15%] flex  items-center  bg-[#ACB5BD] backdrop-blur-lg bg-opacity-30 rounded-2xl fixed top-5 m-0 z-[1000] ">
      <div className="w-[40%] pl-5 ">
        <img src={wyvatelogo} alt="logo" />
      </div>
      <div className="flex gap-[18%] w-[50%] ">
        <div>
          <a href="#">
            <button className="w-[200%] h-[50px] bg-[#09C27E] rounded-lg flex items-center justify-center gap-2 font-[50px] text-white font-sans text-[1rem]">
              <img src={play}></img>
              Demo
            </button>
          </a>
        </div>
        <div>
          <a href="#">
            <button className="w-[150%] h-[50px] bg-[#09C27E] rounded-lg flex items-center justify-center gap-2 font-[50px] text-white font-sans text-[1rem] ">
              <img src={download}></img>
              Download Now
            </button>
          </a>
        </div>
        <div className="">
          <a href="#">
            <button className="w-[200%] h-[50px] bg-[black] rounded-lg flex items-center justify-center gap-2 font-[50px] text-white font-sans text-[1rem]">
              <img src={build}></img>
              Business
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
