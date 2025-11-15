import type { UserType, PostType, CommunityType, PagesType, CommentType, SubCommentType } from "../../types"

import { useState } from "react"

import CommunityLinkHeader from "./CommunityLinkHeader"

import searchIcon from "../../assets/icons/search.png"
import plusIcon from "../../assets/icons/plus.png"
import menuIcon from "../../assets/icons/menu.png"

type Props = {
    communitiesData: CommunityType[]
    profileIcon: string | undefined
    currentUser: UserType | undefined
    setLeftMenu: React.Dispatch<React.SetStateAction<boolean>>
    setProfileUser: React.Dispatch<React.SetStateAction<UserType | undefined>>
    setCurrentPage: React.Dispatch<React.SetStateAction<PagesType>>
    setCurrentCommunity: React.Dispatch<React.SetStateAction<CommunityType | null>>
    setCurrentUser: React.Dispatch<React.SetStateAction<UserType | undefined>>
    setUsersData: React.Dispatch<React.SetStateAction<UserType[]>>
    setCommunitiesData: React.Dispatch<React.SetStateAction<CommunityType[]>>
    setPostsData: React.Dispatch<React.SetStateAction<PostType[]>>
}

export default function Header({
    communitiesData,
    profileIcon,
    currentUser,
    setLeftMenu,
    setProfileUser,
    setCurrentPage,
    setCurrentCommunity,
    setCurrentUser,
    setUsersData,
    setCommunitiesData,
    setPostsData
}: Props) {
    const [communitiesList, setCommunitiesList] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>("")
    const [menu, setMenu] = useState<boolean>(false)
    const [warning, setWarning] = useState<boolean>(false)

    function setPage() {
        setCurrentPage("Create")
        setCurrentCommunity(null)
    }

    function viewProfile() {
        setProfileUser(currentUser)
        setCurrentPage("Profile")
        setMenu(false)
    }

    function logOut() {
        setMenu(false)
        setCurrentPage("Authorization")
        setCurrentUser(undefined)
    }

    function toggleMenu() {
        setWarning(false)
        setMenu((prev: boolean) => !prev)
    }

    function deleteProfile() {
        setCurrentPage("Authorization")
        setUsersData((prev: UserType[]) => prev.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag))
        setPostsData((prev: PostType[]) => prev
            .filter((post: PostType) => post.author?.tag !== currentUser?.tag)
            .map((post: PostType) => ({
                ...post,
                comments: post.comments
                    .filter((comment: CommentType) => comment.user?.tag !== currentUser?.tag)
                    .map((comment: CommentType) => ({
                        ...comment,
                        comments: comment.comments.filter((subComment: SubCommentType) => subComment.user?.tag !== currentUser?.tag)
                    }))
            }))
        )
        setCommunitiesData((prev: CommunityType[]) => prev.filter((community: CommunityType) => community.author?.tag !== currentUser?.tag))
    }

    const communities = communitiesData.map((community: CommunityType, index: number) =>
        community.name.toLowerCase().includes(inputValue.toLowerCase()) && (
            <CommunityLinkHeader
                key={index}
                icon={community.icon}
                name={community.name}
                shortDescription={community.shortDescription}
                longDescription={community.longDescription}
                followers={community.followers}
                author={community.author}
                setCurrentCommunity={setCurrentCommunity}
                setCurrentPage={setCurrentPage}
                setInputValue={setInputValue}
            />
        )
    )

    if (window.innerWidth > 920) {
        setLeftMenu(false)
    }

    return (
        <div className="header">
            <div
                className="header__leftMenu"
                onClick={() => setLeftMenu((prev: boolean) => !prev)}
            >
                <img
                    src={menuIcon}
                    alt="Menu icon"
                    className="header__leftMenu--icon"
                />
            </div>

            <span
                onClick={() => setCurrentPage("Home")}
                className="header__logo"
            >
                Surfer
            </span>

            <div
                className={communitiesList
                    ? "header__search header__search-active"
                    : "header__search header__search-inactive"
                }
                onClick={() => setCommunitiesList((prev: boolean) => !prev)}
            >
                <img
                    src={searchIcon}
                    alt="Search icon"
                    className="header__search--icon"
                />
                <input
                    type="text"
                    placeholder="Search Surfer"
                    value={inputValue}
                    className="header__search--input"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                />

                {communitiesList && (
                    <div className="header__search--list">
                        {communities}
                    </div>
                )}
            </div>

            <div className="header__buttons">
                <div onClick={setPage} className="header__buttons--create">
                    <img
                        src={plusIcon}
                        alt="Create icon"
                        className="header__buttons--create--icon"
                    />
                    <span className="header__button--create--text">Create</span>
                </div>

                <div
                    className="header__buttons--profile"
                    onClick={toggleMenu}
                >
                    {profileIcon === undefined ? null : (
                        <img
                            src={profileIcon}
                            alt="Profile icon"
                            className="header__buttons--profile--icon"
                        />
                    )}
                </div>
            </div>
            {menu && (
                <div className="header__menu">
                    <span
                        className="header__menu--profile"
                        onClick={viewProfile}
                    >
                        View Profile
                    </span>
                    <span
                        className="header__menu--logOut"
                        onClick={logOut}
                    >
                        Log Out
                    </span>
                    {warning ? (
                        <span
                            className="header__menu--warning"
                            onClick={deleteProfile}
                        >
                            Are you sure?
                        </span>
                    ) : (
                        <span
                            className="header__menu--delete"
                            onClick={() => setWarning(true)}
                        >
                            Delete Profile
                        </span>
                    )}
                </div>
            )}
        </div>
    )
}