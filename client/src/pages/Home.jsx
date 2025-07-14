import { useOutletContext } from 'react-router-dom'
import { FriendCard } from "../components/FriendCard"

export function Home() {
    const context = useOutletContext()
    const activeTab = context?.activeTab || 'all'

    const renderContent = () => {
        switch(activeTab) {
            case 'online':
                return (
                    <div className="flex flex-col gap-[20px]">
                        <FriendCard />
                        <FriendCard />
                        <FriendCard />
                    </div>
                );
            case 'all':
                return (
                    <div className="flex flex-col gap-[20px]">
                        <FriendCard />
                        <FriendCard />
                    </div>
                );
            case 'pending':
                return (
                    <div className="flex flex-col gap-[20px]">
                        <FriendCard />
                    </div>
                );
            default:
                return (
                    <div className="flex flex-col gap-[20px]">
                        <FriendCard />
                        <FriendCard />
                        <FriendCard />
                    </div>
                );
        }
    };

    return (
        <>
            {renderContent()}
        </>
    )
}