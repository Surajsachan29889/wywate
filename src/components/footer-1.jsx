import triangle from "../../public/triangle.svg";
import dotframe from "../../public/dotframe.svg";
// import cardmask from "../../public/cardmask.svg";

export default function Footer1() {
  return (
    <div className="h-[65vh] relative ">
      <hr className="w-[80%] absolute left-[10%] " />
      <img
        src={triangle}
        alt=".."
        className=" absolute top-[30%] left-[4%] "
      />
      <img
        src={dotframe}
        alt=".."
        className=" absolute right-[3%] top-[40%] "
      />
      <div className=" h-[55vh] w-[83%] left-[8%] absolute  top-[8%] rounded-[2.625rem] card ">
        <div className="">
          <h1 className=" absolute z-10 top-[25%] left-[10%] text-[white] text-[3vw] font-bold ">
            Try Wyvate for Free
          </h1>
          <p className=" absolute top-[48%] text-[white] z-10 w-[60%] left-[10%] text-[1.3vw] font-light ">
            Elevate your business with our cutting-edge SaaS platform Try Wyvate
            Free and witness the difference in productivity
          </p>
        </div>
      </div>
      <div className=" h-[55vh] w-[83%] left-[8%] absolute  top-[8%] rounded-[2.625rem] bg-[#030303A8] cardmask "></div>
      <a href="#">
        <button className=" w-[13%] h-[10%] bg-[#09C27E] text-[white] absolute right-[20%] top-[47%] rounded-lg pr-[1%] pl-[1%] ">Start Free Trail Now</button>
      </a>
    </div>
  );
}
