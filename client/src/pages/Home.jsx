import { FriendCard } from "../components/FriendCard"

export function Home() {
    return(
        <>
            <div className="flex flex-col gap-[20px]">
                <FriendCard/>
                <FriendCard/>
                <FriendCard/>
            </div>
        </>
    )
}