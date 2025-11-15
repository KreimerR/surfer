import type { UserType, CommunityType, PagesType } from "../../types"

type Props = {
    icon: string | undefined
    name: string
    shortDescription: string
    longDescription: string
    followers: (UserType | undefined)[]
    author: UserType | undefined
    setCurrentCommunity: React.Dispatch<React.SetStateAction<CommunityType | null>>
    setCurrentPage: React.Dispatch<React.SetStateAction<PagesType>>
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export default function CommunityLinkHeader({
    icon,
    name,
    shortDescription,
    longDescription,
    followers,
    author,
    setCurrentCommunity,
    setCurrentPage,
    setInputValue,
}: Props) {
    function changePage() {
        setCurrentPage("Community")
        setCurrentCommunity({
            icon,
            name,
            shortDescription,
            longDescription,
            followers,
            author,
        })
        setInputValue("")
    }

    return (
        <div
            onClick={changePage}
            className="communityLinkHeader"
        >
            {icon === undefined ? (
                <div className="communityLinkHeader__icon" />
            ) : (
                <img
                    src={icon}
                    alt="Community icon"
                    className="communityLinkHeader__icon"
                />
            )}
            <span
                className="communityLinkHeader__name"
            >
                {name === undefined ? "Unset" : name}
            </span>
        </div>
    )
}