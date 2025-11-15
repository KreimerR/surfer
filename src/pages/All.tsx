import type { UserType, PostType, PagesType } from "../types"

import Post from "../components/Post"
import EmptyPost from "../components/EmptyPost"

type Props = {
    postsData: PostType[]
    setPostsData: React.Dispatch<React.SetStateAction<PostType[]>>
    currentUser: UserType | undefined
    currentPage: PagesType
    setCurrentPage: React.Dispatch<React.SetStateAction<PagesType>>
    setPreviousPage: React.Dispatch<React.SetStateAction<PagesType>>
    setId: React.Dispatch<React.SetStateAction<number>>
}

export default function All({
    postsData,
    setPostsData,
    currentUser,
    currentPage,
    setCurrentPage,
    setPreviousPage,
    setId
}: Props) {
    function flattenElements(arr: unknown[]): React.ReactNode[] {
        return arr.flat(Infinity).filter(Boolean) as React.ReactNode[]
    }

    const postElements = postsData.slice().reverse().map((post: PostType, index: number) =>
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
            setPreviousPage={setPreviousPage}
            setId={setId}
        />
    )

    const postElementsClean = flattenElements(postElements)

    return (
        <div className="all">
            <div className="all__posts">
                {postElementsClean.length === 0
                    ? <EmptyPost />
                    : postElementsClean
                }
                <div className="all__posts--filler" />
            </div>

            <div className="all__right"></div>
        </div>
    )
}