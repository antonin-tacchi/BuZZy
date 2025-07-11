export function MessageCard(){
    return(
        <>
            <div className="bg-[#2F2F2F] rounded-full h-[50px] w-[200px] flex items-center">
                <div className="rouded-[100%] mr-4 relative">
                    <img className="rounded-[100%] h-[50px] w-auto" src="/MATHIEU.jpg" alt="" />
                    <div className="h-[10px] w-[10px] bg-green-500 rounded-full absolute left-[35px] bottom-[3px]"></div>
                    {/* <div className="h-[10px] w-[10px] bg-gray-700 rounded-full absolute left-[35px] bottom-[3px]"></div> */}
                </div>
                <div className="">
                    <h2>Machtou_Pitchou</h2>
                </div>
            </div>
        </>
    )
}