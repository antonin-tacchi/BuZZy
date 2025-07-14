export function Header({ activeTab, setActiveTab }) {
    return (
        <>
            <div>
                <div className="flex justify-between ml-4">
                    <div className="flex items-start gap-[50px]">
                        <div className="flex items-center gap-[30px]">
                            <div>
                                <h1 className="text-[20px] text-white">Amis</h1>
                            </div>
                            <div className="h-[50px] w-[2px] bg-[#6E4AFF]"></div>
                            <nav>
                                <ul className="flex item-center gap-[60px]">
                                    <li>
                                        <button 
                                            onClick={() => setActiveTab('online')}
                                            className={`text-white hover:text-[#6E4AFF] transition-colors px-3 py-1 rounded ${
                                                activeTab === 'online' 
                                                    ? 'bg-[#6E4AFF] text-white' 
                                                    : 'bg-transparent'
                                            }`}
                                        >
                                            En Ligne
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            onClick={() => setActiveTab('all')}
                                            className={`text-white hover:text-[#6E4AFF] transition-colors px-3 py-1 rounded ${
                                                activeTab === 'all' 
                                                    ? 'bg-[#6E4AFF] text-white' 
                                                    : 'bg-transparent'
                                            }`}
                                        >
                                            Tous
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            onClick={() => setActiveTab('pending')}
                                            className={`text-white hover:text-[#6E4AFF] transition-colors px-3 py-1 rounded ${
                                                activeTab === 'pending' 
                                                    ? 'bg-[#6E4AFF] text-white' 
                                                    : 'bg-transparent'
                                            }`}
                                        >
                                            En attentes
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="mr-[30px]">
                        <button className="bg-[#6E4AFF] text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
                            Ajouter
                        </button>
                    </div>
                </div>
                <div className="h-[2px] w-full bg-[#6E4AFF] mt-3"></div>
            </div>
        </>
    )
}