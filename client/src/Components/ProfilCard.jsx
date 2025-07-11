import { IoGameController } from "react-icons/io5";

export function ProfilCard() {
    return(
        <>
            <div className="bg-[#2F2F2F] rounded-[15px] h-[100px] w-[200px] flex items-center relative">
                <div className="rouded-[100%] mr-4 relative">
                    <img className="rounded-full h-[80px] w-[80px]" src="/MATHIEU.jpg" alt="" />
                    <div className="h-[10px] w-[10px] bg-green-500 rounded-full absolute left-[35px] bottom-[3px]"></div>
                    {/* <div className="h-[10px] w-[10px] bg-gray-700 rounded-full absolute left-[35px] bottom-[3px]"></div> */}
                </div>
                <div className="mb-10 right-[40px] absolute">
                    <h2 className="text-[10px]">Machtou_Pitchou</h2>
                    <div className="flex gap-[5px]">
                        <IoGameController
                            color="#6E4AFF"
                        />
                        <h2 className="text-[10px]">Leagues of Legends</h2>
                    </div>
                </div>
            </div>
        </>
    )
}