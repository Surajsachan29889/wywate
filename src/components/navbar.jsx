import wyvatelogo from "../../public/wyvatelogo.svg";
import play from "../../public/play.svg";
import download from "../../public/Download.svg";
import build from "../../public/business.svg";

export default function Navbar() {
  return (
    <div className="w-[83%] h-[104px] left-[8%] flex  items-center  bg-[#ACB5BD] backdrop-blur-lg bg-opacity-30 rounded-2xl fixed top-5 m-0 z-[1000] ">
      <div className="w-[40%] pl-5 ">
        <img src={wyvatelogo} alt="logo" />
      </div>
      <div className="flex gap-[18%] w-[50%] relative justify-center items-center mb-[4%] ">
        <div>
          <a href="#">
            <button className="w-[20%] h-[50px] right-[60%] top-[-10%] bg-[#09C27E] rounded-lg flex items-center justify-center gap-2 font-[50px] text-white font-sans text-[1rem] absolute ">
              <img src={play}></img>
              Demo
            </button>
          </a>
        </div>
        <div>
          <a href="#">
            <button className="w-[40%] absolute  h-[50px] right-[15%] bg-[#09C27E] rounded-lg flex items-center justify-center gap-2 font-[50px] text-white font-sans text-[1rem] ">
              <img src={download}></img>
              Download Now
            </button>
          </a>
        </div>
        <div className="">
          <a href="#">
            <button className="w-[20%] absolute h-[50px] right-[-10%] bg-[black] rounded-lg flex items-center justify-center gap-2 font-[50px] text-white font-sans text-[1rem]">
              <img src={build}></img>
              Business
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
