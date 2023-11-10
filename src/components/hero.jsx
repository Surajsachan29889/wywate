import mobilehero from "../../public/mobilehero.svg"

export default function Hero(){
    return (
        <div className="w-[100%]  flex-col m-0">
            <div className="w-[100%] sm:h-[144px] h-[16vh] bg-black  top-stack ">
                .
            </div>
            <div className=" w-[100%] sm:h-[580px] h-[50vh] hero ">
            </div>
            <div className=" ">
                <h1 className="w-[50%] sm:text-[4vw] text-[6vw] font-sans font-extrabold absolute top-[30%] left-[8%] text-[#FFFFFF] drop-shadow-lg ">Discover & Book Local Services with your Favourite Businesses</h1>  
            </div>
            <div className="hero-mob">
                <img src={mobilehero} className="absolute top-[30%]  right-[9%]  "></img>
            </div>

        </div>
    );
}