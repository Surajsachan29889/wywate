import mobilehero from "../../public/mobilehero.svg"

export default function Hero(){
    return (
        <div className="w-[100%]  flex-col m-0">
            <div className="w-[100%] h-[144px] bg-black  top-stack ">
                .
            </div>
            <div className=" w-[100%] h-[580px] hero ">
            </div>
            <div className=" ">
                <h1 className="w-[50%] text-[60px] font-sans font-extrabold absolute top-[30%] left-[15%] text-[#FFFFFF] drop-shadow-lg ">Discover & Book Local Services with your Favourite Businesses</h1>  
            </div>
            <div>
                <img src={mobilehero} className="absolute top-[30%]  left-[70%] "></img>
            </div>

        </div>
    );
}