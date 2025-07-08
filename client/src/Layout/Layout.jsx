import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function Layout() {
    return(
        <div className="bg-[#05002B]">
            <header>
                <Header/>
            </header>

            <main>
                <Outlet/>
            </main>
        </div>
    )
}