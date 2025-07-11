import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function Layout() {
    return(
        <div className="w-screen h-screen bg-[#0B0B0B] overflow-hidden">
            <div className="flex h-full">
                <aside className="w-[250px] py-4 pl-4">
                    <Sidebar/>
                </aside>

                <div className="flex-1 flex flex-col">
                    <header className="h-[80px] py-4 -ml-4">
                        <Header/>
                    </header>

                    <main className="flex-1 p-6">
                        <Outlet/>
                    </main>
                </div>
            </div>
        </div>
    )
}