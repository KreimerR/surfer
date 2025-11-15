import type { UserType, CommunityType, PostType, PagesType } from "../types"

import Post from "../components/Post"
import EmptyPost from "../components/EmptyPost"

import createIcon from "../assets/icons/plus.png"
import deleteIcon from "../assets/icons/delete.png"

type Props = {
    communitiesData: CommunityType[]
    setCommunitiesData: React.Dispatch<React.SetStateAction<CommunityType[]>>
    postsData: PostType[]
    setPostsData: React.Dispatch<React.SetStateAction<PostType[]>>
    currentUser: UserType | undefined
    currentPage: PagesType
    setCurrentPage: React.Dispatch<React.SetStateAction<PagesType>>
    setPreviousPage: React.Dispatch<React.SetStateAction<PagesType>>
    setId: React.Dispatch<React.SetStateAction<number>>
    currentCommunity: CommunityType | null
}

export default function Community({
    communitiesData,
    setCommunitiesData,
    postsData,
    setPostsData,
    currentUser,
    currentPage,
    setCurrentPage,
    setPreviousPage,
    setId,
    currentCommunity,
}: Props) {
    function handleDelete() {
        setCurrentPage("Home")
        setCommunitiesData((prev: CommunityType[]) => prev.filter((community: CommunityType) => community.name !== currentCommunity?.name))
        setPostsData((prev: PostType[]) => prev.filter((post: PostType) => post.community?.name !== currentCommunity?.name))
    }

    const postElements = postsData.slice().reverse().map((post: PostType, index: number) =>
        post.community?.name === currentCommunity?.name
            ? (
                <Post
                    key={postsData.length - 1 - index}
                    id={postsData.length - 1 - index}
                    icon={post.community !== undefined ? post.community.icon : undefined}
                    name={post.community !== undefined ? post.community.name : undefined}
                    date={post.date}
                    text={post.text}
                    image1={post.image1}
                    image2={post.image2}
                    image3={post.image3}
                    image4={post.image4}
                    image5={post.image5}
                    image6={post.image6}
                    image7={post.image7}
                    image8={post.image8}
                    image9={post.image9}
                    upvotes={post.upvotes}
                    downvotes={post.downvotes}
                    comments={post.comments}
                    bookmarks={post.bookmarks}
                    currentUser={currentUser}
                    setPostsData={setPostsData}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setId={setId}
                    setPreviousPage={setPreviousPage}
                />
            )
            : null
    )

    const isJoined = communitiesData.some(
        (community: CommunityType) =>
            community.name === currentCommunity?.name &&
            community.followers.some((follower: UserType | undefined) => follower?.tag === currentUser?.tag)
    )

    return (
        <div className="community">
            <div className="community__content">
                <div className="community__content--top">
                    <div className="community__content--top--info">
                        {currentCommunity?.icon !== undefined
                            ? (
                                <img
                                    src={currentCommunity.icon}
                                    alt="Icon"
                                    className="community__content--top--info--icon"
                                />
                            )
                            : (
                                <div className="community__content--top--info--icon" />
                            )
                        }
                        <span className="community__content--top--info--name">
                            {currentCommunity?.name}
                        </span>
                    </div>

                    <div className="community__content--top--buttons">
                        <button
                            className="community__content--top--buttons--create"
                            onClick={() => setCurrentPage("Create")}
                        >
                            <img
                                src={createIcon}
                                alt="Create icon"
                                className="community__content--top--buttons--create--icon"
                            />
                            <span className="community__content--top--buttons--create--text">Create Post</span>
                        </button>

                        {currentCommunity?.author !== currentUser &&
                            <button
                                className={isJoined ? "community__content--top--buttons--joined" : "community__content--top--buttons--join"}
                                onClick={() => setCommunitiesData((prev: CommunityType[]) =>
                                    prev.map((community: CommunityType) =>
                                        community.name === currentCommunity?.name
                                            ? community.followers.some((follower: UserType | undefined) => follower?.tag === currentUser?.tag)
                                                ? {
                                                    ...community,
                                                    followers: community.followers.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag)
                                                }
                                                : {
                                                    ...community,
                                                    followers: [...community.followers, currentUser]
                                                }
                                            : community
                                    )
                                )}
                            >
                                {isJoined ? "Joined" : "Join"}
                            </button>
                        }

                        {currentUser?.name === currentCommunity?.author?.name
                            ? (
                                <button
                                    className="community__content--top--buttons--delete"
                                    onClick={handleDelete}
                                >
                                    <img
                                        src={deleteIcon}
                                        alt="Icon"
                                        className="community__content--top--buttons--delete--icon"
                                    />
                                    <span className="community__content--top--buttons--delete--text">Delete</span>
                                </button>
                            )
                            : null
                        }
                    </div>
                </div>
                <div className="community__content--bottom">
                    <div className="community__content--bottom--left">
                        {postElements.every((el: React.ReactNode | null) => el === undefined || el === null || Array.isArray(el) && el.length === 0 || Array.isArray(el) && el[0] === false || el === false)
                            ? <EmptyPost />
                            : postElements
                        }
                    </div>

                    <div className="community__content--bottom--right">
                        <span className="community__content--bottom--right--short">{currentCommunity?.shortDescription}</span>
                        <span className="community__content--bottom--right--long">{currentCommunity?.longDescription}</span>
                        <span
                            className="community__content--bottom--right--followers"
                        >
                            Followers: {currentCommunity?.followers.length}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}