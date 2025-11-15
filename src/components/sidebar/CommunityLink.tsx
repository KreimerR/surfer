import type { UserType, CommunityType, PagesType } from "../../types"

type Props = {
    icon: string | undefined
    name: string
    shortDescription: string
    longDescription: string
    followers: (UserType | undefined)[]
    author: UserType | undefined
    setLeftMenu: React.Dispatch<React.SetStateAction<boolean>>
    setCurrentPage: React.Dispatch<React.SetStateAction<PagesType>>
    setCurrentCommunity: React.Dispatch<React.SetStateAction<CommunityType | null>>
}

export default function CommunityLink({
    icon,
    name,
    shortDescription,
    longDescription,
    followers,
    author,
    setLeftMenu,
    setCurrentPage,
    setCurrentCommunity
}: Props) {
    function setPages() {
        setLeftMenu(false)
        setCurrentPage("Community")
        setCurrentCommunity({
            icon,
            name,
            shortDescription,
            longDescription,
            followers,
            author,
        })
    }

    return (
        <div
            onClick={setPages}
            className="communityLink"
        >
            {icon === undefined ? (
                <div className="communityLink__icon" />
            ) : (
                <img
                    src={icon}
                    alt="Community icon"
                    className="communityLink__icon"
                />
            )}
            <span
                className="communityLink__name"
            >
                {name === undefined ? "Unset" : name}
            </span>
        </div>
    )
}