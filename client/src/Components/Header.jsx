export function Header() {
    return (
        <>
            <div>
                <div className="flex justify-between ml-4">
                    <div className="flex items-start gap-[50px]">
                        <div className="flex items-center gap-[30px]">
                            <div>
                                <h1 className="text-[20px]">Amis</h1>
                            </div>
                            <div className="h-[50px] w-[2px] bg-[#6E4AFF]"></div>
                            <nav>
                                <ul className="flex item-center gap-[60px]">
                                    <li>En Ligne</li>
                                    <li>Tous</li>
                                    <li>En attentes</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="mr-[30px]">
                        <button className="bg-[#6E4AFF]">Ajouter</button>
                    </div>
                </div>
                <div className="h-[2px] w-full bg-[#6E4AFF] mt-3"></div>
            </div>
        </>
    )
}