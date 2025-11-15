import type { UserType, CommunityType, PostType, PagesType } from "./types"

import { useState, useEffect } from "react"

import Home from "./pages/Home"
import All from "./pages/All"
import Bookmarks from "./pages/Bookmarks"
import Community from "./pages/Community"
import PostDetails from "./pages/PostDetails"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import Create from "./pages/create/Create"
import Profile from "./pages/Profile"
import Authorization from "./pages/Authorization"

import users from "./data/users"
import communities from "./data/communities"
import posts from "./data/posts"

export default function App() {
    const [usersData, setUsersData] = useState<UserType[]>(() => {
        const stored = localStorage.getItem("usersData")
        return stored ? JSON.parse(stored) as UserType[] : users
    })

    const [communitiesData, setCommunitiesData] = useState<CommunityType[]>(() => {
        const stored = localStorage.getItem("communitiesData")
        return stored ? JSON.parse(stored) as CommunityType[] : communities
    })

    const [postsData, setPostsData] = useState<PostType[]>(() => {
        const stored = localStorage.getItem("postsData")
        return stored ? JSON.parse(stored) as PostType[] : posts
    })

    const [currentUser, setCurrentUser] = useState<UserType | undefined>(() => {
        const stored = localStorage.getItem("currentUser")
        return stored ? JSON.parse(stored) as UserType | undefined : undefined
    })

    const [profileUser, setProfileUser] = useState<UserType | undefined>(() => {
        const stored = localStorage.getItem("profileUser")
        return stored ? JSON.parse(stored) as UserType | undefined : undefined
    })

    const [currentPage, setCurrentPage] = useState<PagesType>(() => {
        const stored = localStorage.getItem("currentPage")
        return stored ? JSON.parse(stored) as PagesType : "Authorization"
    })

    const [previousPage, setPreviousPage] = useState<PagesType>(() => {
        const stored = localStorage.getItem("previousPage")
        return stored ? JSON.parse(stored) as PagesType : "Home"
    })

    const [id, setId] = useState<number>(() => {
        const stored = localStorage.getItem("id")
        return stored ? JSON.parse(stored) as number : 0
    })

    const [currentCommunity, setCurrentCommunity] = useState<CommunityType | null>(() => {
        const stored = localStorage.getItem("currentCommunity")
        return stored ? JSON.parse(stored) as CommunityType | null : null
    })

    const [leftMenu, setLeftMenu] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem("usersData", JSON.stringify(usersData))
    }, [usersData])

    useEffect(() => {
        localStorage.setItem("communitiesData", JSON.stringify(communitiesData))
    }, [communitiesData])

    useEffect(() => {
        localStorage.setItem("postsData", JSON.stringify(postsData))
    }, [postsData])

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem("currentUser", JSON.stringify(currentUser))
        } else {
            localStorage.removeItem("currentUser")
        }
    }, [currentUser])

    useEffect(() => {
        if (profileUser) {
            localStorage.setItem("profileUser", JSON.stringify(profileUser))
        } else {
            localStorage.removeItem("profileUser")
        }
    }, [profileUser])

    useEffect(() => {
        localStorage.setItem("currentPage", JSON.stringify(currentPage))
    }, [currentPage])

    useEffect(() => {
        localStorage.setItem("previousPage", JSON.stringify(previousPage))
    }, [previousPage])

    useEffect(() => {
        localStorage.setItem("id", JSON.stringify(id))
    }, [id])

    useEffect(() => {
        localStorage.setItem("currentCommunity", JSON.stringify(currentCommunity))
    }, [currentCommunity])

    function page() {
        if (currentPage === "Home") {
            return (
                <Home
                    communitiesData={communitiesData}
                    postsData={postsData}
                    setPostsData={setPostsData}
                    currentUser={currentUser}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setPreviousPage={setPreviousPage}
                    setId={setId}
                />
            )
        } else if (currentPage === "All") {
            return (
                <All
                    postsData={postsData}
                    setPostsData={setPostsData}
                    currentUser={currentUser}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setPreviousPage={setPreviousPage}
                    setId={setId}
                />
            )
        } else if (currentPage === "Community") {
            return (
                <Community
                    communitiesData={communitiesData}
                    setCommunitiesData={setCommunitiesData}
                    postsData={postsData}
                    setPostsData={setPostsData}
                    currentUser={currentUser}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setPreviousPage={setPreviousPage}
                    setId={setId}
                    currentCommunity={currentCommunity}
                />
            )
        } else if (currentPage === "Bookmarks") {
            return (
                <Bookmarks
                    postsData={postsData}
                    setPostsData={setPostsData}
                    currentUser={currentUser}
                    setProfileUser={setProfileUser}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setPreviousPage={setPreviousPage}
                    setId={setId}
                />
            )
        } else if (currentPage === "PostDetails") {
            return (
                <PostDetails
                    postsData={postsData}
                    currentUser={currentUser}
                    setProfileUser={setProfileUser}
                    previousPage={previousPage}
                    setCurrentPage={setCurrentPage}
                    id={id}
                    setPostsData={setPostsData}
                    setCurrentCommunity={setCurrentCommunity}
                />
            )
        } else if (currentPage === "Create") {
            return (
                <Create
                    communitiesData={communitiesData}
                    setCommunitiesData={setCommunitiesData}
                    currentUser={currentUser}
                    setPostsData={setPostsData}
                    setCurrentPage={setCurrentPage}
                    setPreviousPage={setPreviousPage}
                    setId={setId}
                    currentCommunity={currentCommunity}
                    setCurrentCommunity={setCurrentCommunity}
                />
            )
        } else if (currentPage === "Profile") {
            return (
                <Profile
                    currentUser={currentUser}
                    profileUser={profileUser}
                    postsData={postsData}
                    setProfileUser={setProfileUser}
                    setPostsData={setPostsData}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setId={setId}
                    setPreviousPage={setPreviousPage}
                />
            )
        }
    }

    return (
        <div className="app">
            {currentPage === "Authorization"
                ? (
                    <Authorization
                        usersData={usersData}
                        setUsersData={setUsersData}
                        setCurrentUser={setCurrentUser}
                        setCurrentPage={setCurrentPage}
                    />
                )
                : (
                    <>
                        <Header
                            communitiesData={communitiesData}
                            profileIcon={currentUser !== undefined ? currentUser.icon : undefined}
                            currentUser={currentUser}
                            setLeftMenu={setLeftMenu}
                            setProfileUser={setProfileUser}
                            setCurrentPage={setCurrentPage}
                            setCurrentCommunity={setCurrentCommunity}
                            setCurrentUser={setCurrentUser}
                            setUsersData={setUsersData}
                            setCommunitiesData={setCommunitiesData}
                            setPostsData={setPostsData}
                        />

                        <div className="app__bottom">
                            <Sidebar
                                currentUser={currentUser}
                                communitiesData={communitiesData}
                                currentPage={currentPage}
                                leftMenu={leftMenu}
                                setLeftMenu={setLeftMenu}
                                setCurrentPage={setCurrentPage}
                                setCurrentCommunity={setCurrentCommunity}
                            />
                            {page()}

                            <div
                                className={leftMenu ? "app__bottom--blackScreen" : "app__bottom--blackScreen-hide"}
                                onClick={() => setLeftMenu((prev: boolean) => !prev)}
                            />
                        </div>
                    </>
                )
            }
        </div>
    )
}