import midlogo from "../../public/midlogo.svg";
import arrowpoint from "../../public/arrowpoint.svg";
import radio from "../../public/radio.svg";
import building from "../../public/building.svg";
import download from "../../public/Download.svg";
import discount from "../../public/discount.svg";

export default function Midsec1() {
  return (
    <div className="mid1-container h-[90vh] w-[100%] flex flex-col gap-10 ">
      <div className="ml-[8%] ">
        <img src={midlogo}></img>
      </div>
      <div className="ml-[8%]">
        <h1 className="text-[4vw] w-[60%] mid-heading">
          <span className="text-[grey]">Grow</span> Your Business, Sell Services
          Online
        </h1>
      </div>
      <div className="flex flex-col gap-8 ml-[8%]">
        <div className="w-[50%] flex gap-5 ">
          <img src={arrowpoint}></img>
          <img src={discount}></img>
          <p className="text-[1.5vw] text-[#595959] font-medium ">
            No Commissions, Sell Directly to Clients.
          </p>
        </div>
        <div className="flex gap-5">
          <img src={arrowpoint}></img>
          <img src={building}></img>
          <p className="text-[1.5vw] text-[#595959] font-medium ">
            Manage Daily Business Schedule
          </p>
        </div>
        <div className="flex gap-5">
          <img src={arrowpoint}></img>
          <img src={radio}></img>
          <p className="text-[1.5vw] text-[#595959] font-medium ">
            Accept all Payment Modes Online
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-10 ml-[8%]">
        <div>
          <a href="#">
            <button className="h-12 w-[10vw] bg-[black] rounded-xl text-[white]  hover:bg-[#1a1a1a] transition-all ">
              Sign in
            </button>
          </a>
        </div>
        <div>
          <a href="#">
            <button className="h-12 w-[15vw] border-[2px] rounded-xl border-[black] hover:border-[grey] font-bold hover:bg-black transition-all hover:text-[white] ">
              Register Now
            </button>
          </a>
        </div>
        <div>
          <a href="#">
            <button className="h-12 w-[13vw] bg-[black] rounded-xl text-[white] flex items-center justify-center gap-3 hover:bg-[#1a1a1a] transition-all">
              <img src={download} alt=".." />
              Download Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
