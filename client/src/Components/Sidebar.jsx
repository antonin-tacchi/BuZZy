import { useState } from "react";
import { MessageCard } from "./MessageCard";
import { GroupeCard } from "./GroupeCard";
import { ProfilCard } from "./ProfilCard";
import { FaSearch } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { MdGroups } from "react-icons/md";

export function Sidebar() {
    const [activeTab, setActiveTab] = useState("amis");

    return (
        <div className="flex">
            <div>
                <div className="mb-[100px] flex flex-col items-center gap-[20px] mt-[30px]">
                    <div className="relative">
                        <input
                            className="h-[35px] pl-[20px] rounded-[30px]"
                            placeholder="Rechercher"
                            type="text"
                        />
                        <div className="absolute top-[10px] right-[20px]">
                            <FaSearch />
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex gap-[10px] items-center">
                            <div>
                                <MdMessage 
                                    color="white"
                                    className="w-[30px] h-[30px]"
                                />
                            </div>
                            <h2
                                onClick={() => setActiveTab("amis")}
                                className={`text-[30px] cursor-pointer ${activeTab === "amis" ? "text-[#6E4AFF]" : "text-white"}`}
                            >
                                Amis
                            </h2>
                        </div>
                        <div className="h-[1px] w-[200px] bg-[#6E4AFF]"></div>
                        <div className="flex gap-[10px] items-center">
                            <MdGroups 
                                className="h-[30px] w-[30px]"
                            />

                            <h2
                                onClick={() => setActiveTab("groupes")}
                                className={`text-[30px] cursor-pointer ${activeTab === "groupes" ? "text-[#6E4AFF]" : "text-white"}`}
                            >
                                Groupes
                            </h2>
                        </div>
                        <div className="h-[1px] w-[200px] bg-[#6E4AFF]"></div>
                    </div>

                    {activeTab === "amis" && (
                        <>
                            <MessageCard />
                            <MessageCard />
                            <MessageCard />
                        </>
                    )}

                    {activeTab === "groupes" && (
                        <div className="text-white flex flex-col gap-[20px]">
                            <GroupeCard/>
                            <GroupeCard/>
                            <GroupeCard/>
                        </div>
                    )}
                </div>

                <ProfilCard />
            </div>

            <div className="-mt-[100px] h-[150vh] w-[3px] bg-[#6E4AFF] ml-3"></div>
        </div>
    );
}
