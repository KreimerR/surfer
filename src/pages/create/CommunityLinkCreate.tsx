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
}

export default function CommunityLinkCreate({
    icon,
    name,
    shortDescription,
    longDescription,
    followers,
    author,
    setCurrentCommunity,
}: Props) {
    return (
        <div
            onClick={() => setCurrentCommunity({
                icon,
                name,
                shortDescription,
                longDescription,
                followers,
                author,
            })}
            className="communityLinkCreate"
        >
            {icon === undefined ? (
                <div className="communityLinkCreate__icon" />
            ) : (
                <img
                    src={icon}
                    alt="Community icon"
                    className="communityLinkCreate__icon"
                />
            )}
            <span
                className="communityLinkCreate__name"
            >
                {name === undefined ? "Unset" : name}
            </span>
        </div>
    )
}