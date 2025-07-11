import { IoGameController } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

export function FriendCard() {
    return(
        <>
            <div className="bg-[#2F2F2F] rounded-full h-[75px] w-full flex items-center justify-between">
                <div className="flex">
                    <div className="rouded-[100%] mr-4 relative">
                        <img className="rounded-[100%] h-[75px] w-auto" src="/MATHIEU.jpg" alt="" />
                        <div className="h-[10px] w-[10px] bg-green-500 rounded-full absolute left-[35px] bottom-[3px]"></div>
                        {/* <div className="h-[10px] w-[10px] bg-gray-700 rounded-full absolute left-[35px] bottom-[3px]"></div> */}
                    </div>
                    <div className="mt-3">
                        <h2>Machtou_Pitchou</h2>
                        <div className="flex items-center gap-[10px]">
                            <IoGameController
                                color="#6E4AFF"
                            />
                            <h2>Leagues of Legends</h2>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 mr-4">
                    <div className="h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center ">
                        <MdMessage 
                            color="black"
                            className="w-[40px] h-[40px]"
                        />
                    </div>

                    <div className="h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center ">
                        <BsThreeDotsVertical 
                            color="black"
                            className="w-[40px] h-[40px]"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}