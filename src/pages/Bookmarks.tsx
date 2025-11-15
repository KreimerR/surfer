import type { UserType, PostType, PagesType, CommentType, SubCommentType } from "../types"

import Post from "../components/Post"
import Comment from "../components/Comment"
import SubComment from "../components/SubComment"
import EmptyPost from "../components/EmptyPost"

type Props = {
    postsData: PostType[]
    setPostsData: React.Dispatch<React.SetStateAction<PostType[]>>
    currentUser: UserType | undefined
    setProfileUser: React.Dispatch<React.SetStateAction<UserType | undefined>>
    currentPage: PagesType
    setCurrentPage: React.Dispatch<React.SetStateAction<PagesType>>
    setPreviousPage: React.Dispatch<React.SetStateAction<PagesType>>
    setId: React.Dispatch<React.SetStateAction<number>>
}

export default function Bookmarks({
    postsData,
    setPostsData,
    currentUser,
    setProfileUser,
    currentPage,
    setCurrentPage,
    setPreviousPage,
    setId
}: Props) {
    const postElements = postsData.slice().reverse().map((post: PostType, index: number) =>
        post.bookmarks.includes(currentUser) ? (
            <Post
                key={postsData.length - 1 - index}
                id={postsData.length - 1 - index}
                icon={post.community?.icon}
                name={post.community?.name}
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
        ) : null
    ).filter(Boolean)

    const commentElements = postsData.slice().reverse().flatMap((post: PostType, index: number) =>
        post.comments.map((comment: CommentType, index2: number) =>
            comment.bookmarks.includes(currentUser) ? (
                <Comment
                    key={`${index}-${index2}`}
                    id1={postsData.length - 1 - index}
                    id2={index2}
                    currentUser={currentUser}
                    commentUser={comment.user}
                    setPostsData={setPostsData}
                    icon={comment.user?.icon}
                    name={comment.user?.name}
                    date={comment.date}
                    text={comment.text}
                    upvotes={comment.upvotes}
                    downvotes={comment.downvotes}
                    comments={comment.comments}
                    bookmarks={comment.bookmarks}
                    subCommentsShow={false}
                    setProfileUser={setProfileUser}
                    setCurrentPage={setCurrentPage}
                />
            ) : null
        )
    ).filter(Boolean)

    const subCommentElements = postsData.slice().reverse().flatMap((post: PostType, index: number) =>
        post.comments.flatMap((comment: CommentType, index2: number) =>
            comment.comments.map((subComment: SubCommentType, index3: number) =>
                subComment.bookmarks.includes(currentUser) ? (
                    <SubComment
                        key={`${index}-${index2}-${index3}`}
                        id1={postsData.length - 1 - index}
                        id2={index2}
                        id3={index3}
                        icon={subComment.user?.icon}
                        name={subComment.user?.name}
                        date={subComment.date}
                        text={subComment.text}
                        upvotes={subComment.upvotes}
                        downvotes={subComment.downvotes}
                        bookmarks={subComment.bookmarks}
                        currentUser={currentUser}
                        setPostsData={setPostsData}
                    />
                ) : null
            )
        )
    ).filter(Boolean)


    const isEmpty =
        postElements.length === 0 &&
        commentElements.length === 0 &&
        subCommentElements.length === 0

    return (
        <div className="bookmarks">
            <div className="bookmarks__posts">
                {postElements}
                {commentElements}
                {subCommentElements}
                {isEmpty && <EmptyPost />}
                <div className="bookmarks__posts--filler" />
            </div>

            <div className="bookmarks__right" />
        </div>
    )
}