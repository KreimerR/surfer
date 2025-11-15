import type { UserType, CommunityType, PagesType } from "../../types"

import CommunityLink from "./CommunityLink"

import homeIcon from "../../assets/icons/home.png"
import allIcon from "../../assets/icons/all.png"
import bookmarksIcon from "../../assets/icons/bookmark-black.png"

type Props = {
    currentUser: UserType | undefined
    communitiesData: CommunityType[]
    currentPage: string
    leftMenu: boolean
    setLeftMenu: React.Dispatch<React.SetStateAction<boolean>>
    setCurrentPage: React.Dispatch<React.SetStateAction<PagesType>>
    setCurrentCommunity: React.Dispatch<React.SetStateAction<CommunityType | null>>
}

export default function Sidebar({
    currentUser,
    communitiesData,
    currentPage,
    leftMenu,
    setLeftMenu,
    setCurrentPage,
    setCurrentCommunity
}: Props) {
    const communityElements = communitiesData.map((community: CommunityType, index: number) => {
        if (community.followers.some((follower: UserType | undefined) => follower?.tag === currentUser?.tag)) {
            return (
                <CommunityLink
                    key={index}
                    icon={community.icon}
                    name={community.name}
                    shortDescription={community.shortDescription}
                    longDescription={community.longDescription}
                    followers={community.followers}
                    author={community.author}
                    setLeftMenu={setLeftMenu}
                    setCurrentPage={setCurrentPage}
                    setCurrentCommunity={setCurrentCommunity}
                />
            )
        }
        return null
    })

    function changePage(page: PagesType) {
        setLeftMenu(false)
        setCurrentPage(page)
    }

    return (
        <div className={leftMenu ? "sidebar" : "sidebar sidebar-hide"}>
            <div className="sidebar__links">
                <div
                    onClick={() => changePage("Home")}
                    className={
                        currentPage === "Home"
                            ? "sidebar__links--home sidebar__links--home-active"
                            : "sidebar__links--home"
                    }
                >
                    <img
                        src={homeIcon}
                        alt="Home icon"
                        className="sidebar__links--home--icon"
                    />
                    <span
                        className="sidebar__links--home--text"
                    >
                        Home
                    </span>
                </div>

                <div
                    onClick={() => changePage("All")}
                    className={
                        currentPage === "All"
                            ? "sidebar__links--all sidebar__links--all-active"
                            : "sidebar__links--all"
                    }
                >
                    <img
                        src={allIcon}
                        alt="All icon"
                        className="sidebar__links--all--icon"
                    />
                    <span
                        className="sidebar__links--all--text"
                    >
                        All
                    </span>
                </div>

                <div
                    onClick={() => changePage("Bookmarks")}
                    className={
                        currentPage === "Bookmarks"
                            ? "sidebar__links--bookmarks sidebar__links--bookmarks-active"
                            : "sidebar__links--bookmarks"
                    }
                >
                    <img
                        src={bookmarksIcon}
                        alt="bookmarks icon"
                        className="sidebar__links--bookmarks--icon"
                    />
                    <span
                        className="sidebar__links--bookmarks--text"
                    >
                        Bookmarks
                    </span>
                </div>
            </div>

            <div className="sidebar__communities">
                {communityElements.every((el: React.ReactNode | null) => el === null || Array.isArray(el) && el.length === 0)
                    ? (
                        <>
                            <div className="sidebar__communities--empty" />
                            <div className="sidebar__communities--empty" />
                            <div className="sidebar__communities--empty" />
                            <div className="sidebar__communities--empty" />
                            <div className="sidebar__communities--empty" />
                            <div className="sidebar__communities--empty" />
                            <div className="sidebar__communities--empty" />
                            <div className="sidebar__communities--empty" />
                            <div className="sidebar__communities--empty" />
                            <div className="sidebar__communities--secondEmpty" />
                        </>
                    )
                    : communityElements
                }
            </div>
        </div>
    )
}