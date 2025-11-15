import type { UserType, PostType, PagesType, CommentType, SubCommentType } from "../types"

import { useState } from "react"

import Post from "../components/Post"
import Comment from "../components/Comment"
import SubComment from "../components/SubComment"
import EmptyPost from "../components/EmptyPost"

type Props = {
    currentUser: UserType | undefined
    profileUser: UserType | undefined
    postsData: PostType[]
    setProfileUser: React.Dispatch<React.SetStateAction<UserType | undefined>>
    setPostsData: React.Dispatch<React.SetStateAction<PostType[]>>
    currentPage: PagesType
    setCurrentPage: React.Dispatch<React.SetStateAction<PagesType>>
    setId: React.Dispatch<React.SetStateAction<number>>
    setPreviousPage: React.Dispatch<React.SetStateAction<PagesType>>
}

export default function Profile({
    currentUser,
    profileUser,
    postsData,
    setProfileUser,
    setPostsData,
    currentPage,
    setCurrentPage,
    setId,
    setPreviousPage,
}: Props) {
    const [currentFilter, setCurrentFilter] = useState<
        "Posts" |
        "Comments" |
        "Saved" |
        "Upvoted" |
        "Downvoted"
    >("Posts")

    function flattenElements(arr: unknown[]): React.ReactNode[] {
        return arr.flat(Infinity).filter(Boolean) as React.ReactNode[]
    }

    const postElements = postsData.slice().reverse().map((post: PostType, index: number) => (
        post.author?.tag === profileUser?.tag && (
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
                setId={setId}
                setPreviousPage={setPreviousPage}
            />
        )
    ))

    const commentElements = postsData.slice().reverse().map((post: PostType, index: number) => (
        post.comments.map((comment: CommentType, index2: number) => (
            comment.user?.tag === profileUser?.tag && (
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
            )
        ))
    ))

    const subCommentElements = postsData.slice().reverse().map((post: PostType, index: number) => (
        post.comments.map((comment: CommentType, index2: number) => (
            comment.comments.map((subComment: SubCommentType, index3: number) => (
                subComment.user?.tag === profileUser?.tag && (
                    <SubComment
                        key={`${index}-${index2}-${index3}`}
                        id1={postsData.length - 1 - index}
                        id2={index2}
                        id3={index3}
                        currentUser={currentUser}
                        setPostsData={setPostsData}
                        icon={subComment.user?.icon}
                        name={subComment.user?.name}
                        date={subComment.date}
                        text={subComment.text}
                        upvotes={subComment.upvotes}
                        downvotes={subComment.downvotes}
                        bookmarks={subComment.bookmarks}
                    />
                ))
            ))
        ))
    )

    const savedPostElements = postsData.slice().reverse().map((post: PostType, index: number) => (
        post.bookmarks.some((user: UserType | undefined) => user?.tag === profileUser?.tag) && (
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
                setId={setId}
                setPreviousPage={setPreviousPage}
            />
        )
    ))

    const savedCommentElements = postsData.slice().reverse().map((post: PostType, index: number) => (
        post.comments.map((comment: CommentType, index2: number) => (
            comment.bookmarks.some((user: UserType | undefined) => user?.tag === profileUser?.tag) && (
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
            )
        ))
    ))

    const savedSubCommentElements = postsData.slice().reverse().map((post: PostType, index: number) => (
        post.comments.map((comment: CommentType, index2: number) => (
            comment.comments.map((subComment: SubCommentType, index3: number) => (
                subComment.bookmarks.some((user: UserType | undefined) => user?.tag === profileUser?.tag) && (
                    <SubComment
                        key={`${index}-${index2}-${index3}`}
                        id1={postsData.length - 1 - index}
                        id2={index2}
                        id3={index3}
                        currentUser={currentUser}
                        setPostsData={setPostsData}
                        icon={subComment.user?.icon}
                        name={subComment.user?.name}
                        date={subComment.date}
                        text={subComment.text}
                        upvotes={subComment.upvotes}
                        downvotes={subComment.downvotes}
                        bookmarks={subComment.bookmarks}
                    />
                )
            ))
        ))
    ))

    const upvotedPostElements = postsData.slice().reverse().map((post: PostType, index: number) => (
        post.upvotes.some((user: UserType | undefined) => user?.tag === profileUser?.tag) && (
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
                setId={setId}
                setPreviousPage={setPreviousPage}
            />
        )
    ))

    const upvotedCommentElements = postsData.slice().reverse().map((post: PostType, index: number) => (
        post.comments.map((comment: CommentType, index2: number) => (
            comment.upvotes.some((user: UserType | undefined) => user?.tag === profileUser?.tag) && (
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
            )
        ))
    ))

    const upvotedSubCommentElements = postsData.slice().reverse().map((post: PostType, index: number) => (
        post.comments.map((comment: CommentType, index2: number) => (
            comment.comments.map((subComment: SubCommentType, index3: number) => (
                subComment.upvotes.some((user: UserType | undefined) => user?.tag === profileUser?.tag) && (
                    <SubComment
                        key={`${index}-${index2}-${index3}`}
                        id1={postsData.length - 1 - index}
                        id2={index2}
                        id3={index3}
                        currentUser={currentUser}
                        setPostsData={setPostsData}
                        icon={subComment.user?.icon}
                        name={subComment.user?.name}
                        date={subComment.date}
                        text={subComment.text}
                        upvotes={subComment.upvotes}
                        downvotes={subComment.downvotes}
                        bookmarks={subComment.bookmarks}
                    />
                )
            ))
        ))
    ))

    const downvotedPostElements = postsData.slice().reverse().map((post: PostType, index: number) => (
        post.downvotes.some((user: UserType | undefined) => user?.tag === profileUser?.tag) && (
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
                setId={setId}
                setPreviousPage={setPreviousPage}
            />
        )
    ))

    const downvotedCommentElements = postsData.slice().reverse().map((post: PostType, index: number) => (
        post.comments.map((comment: CommentType, index2: number) => (
            comment.downvotes.some((user: UserType | undefined) => user?.tag === profileUser?.tag) && (
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
            )
        ))
    ))

    const downvotedSubCommentElements = postsData.slice().reverse().map((post: PostType, index: number) => (
        post.comments.map((comment: CommentType, index2: number) => (
            comment.comments.map((subComment: SubCommentType, index3: number) => (
                subComment.downvotes.some((user: UserType | undefined) => user?.tag === profileUser?.tag) && (
                    <SubComment
                        key={`${index}-${index2}-${index3}`}
                        id1={postsData.length - 1 - index}
                        id2={index2}
                        id3={index3}
                        currentUser={currentUser}
                        setPostsData={setPostsData}
                        icon={subComment.user?.icon}
                        name={subComment.user?.name}
                        date={subComment.date}
                        text={subComment.text}
                        upvotes={subComment.upvotes}
                        downvotes={subComment.downvotes}
                        bookmarks={subComment.bookmarks}
                    />
                )
            ))
        ))
    ))

    const postElementsClean = flattenElements(postElements)
    const allCommentElementsClean = flattenElements([...commentElements, ...subCommentElements])
    const savedPostCommentSubCommentElementsClean = flattenElements([...savedPostElements, ...savedCommentElements, ...savedSubCommentElements])
    const upvotedPostCommentSubCommentElementsClean = flattenElements([...upvotedPostElements, ...upvotedCommentElements, ...upvotedSubCommentElements])
    const downvotedPostCommentSubCommentElementsClean = flattenElements([...downvotedPostElements, ...downvotedCommentElements, ...downvotedSubCommentElements])

    return (
        <div className="profile">
            <div className="profile__left">
                <div className="profile__left--top">
                    {profileUser?.icon !== null
                        ? (
                            <img
                                src={profileUser?.icon}
                                alt="Icon"
                                className="profile__left--top--icon"
                            />
                        )
                        : (
                            <div className="profile__left--top--icon" />
                        )
                    }
                    <div className="profile__left--top--right">
                        <span className="profile__left--top--right--name">{profileUser?.name}</span>
                        <span className="profile__left--top--right--tag">{profileUser?.tag}</span>
                    </div>
                </div>

                <div className="profile__left--filters">
                    <span
                        className={currentFilter === "Posts"
                            ? "profile__left--filters--posts profile__left--filters--posts-active"
                            : "profile__left--filters--posts"
                        }
                        onClick={() => setCurrentFilter("Posts")}
                    >
                        Posts
                    </span>
                    <span
                        className={currentFilter === "Comments"
                            ? "profile__left--filters--comments profile__left--filters--comments-active"
                            : "profile__left--filters--comments"
                        }
                        onClick={() => setCurrentFilter("Comments")}
                    >
                        Comments
                    </span>
                    <span
                        className={currentFilter === "Saved"
                            ? "profile__left--filters--saved profile__left--filters--saved-active"
                            : "profile__left--filters--saved"
                        }
                        onClick={() => setCurrentFilter("Saved")}
                    >
                        Saved
                    </span>
                    <span
                        className={currentFilter === "Upvoted"
                            ? "profile__left--filters--upvoted profile__left--filters--upvoted-active"
                            : "profile__left--filters--upvoted"
                        }
                        onClick={() => setCurrentFilter("Upvoted")}
                    >
                        Upvoted
                    </span>
                    <span
                        className={currentFilter === "Downvoted"
                            ? "profile__left--filters--downvoted profile__left--filters--downvoted-active"
                            : "profile__left--filters--downvoted"
                        }
                        onClick={() => setCurrentFilter("Downvoted")}
                    >
                        Downvoted
                    </span>
                </div>

                <div className="profile__left--content">
                    {currentFilter === "Posts" && (
                        postElementsClean.length === 0
                            ? <EmptyPost />
                            : postElementsClean
                    )}

                    {currentFilter === "Comments" && (
                        allCommentElementsClean.length === 0
                            ? <EmptyPost />
                            : allCommentElementsClean
                    )}

                    {currentFilter === "Saved" && (
                        savedPostCommentSubCommentElementsClean.length === 0
                            ? <EmptyPost />
                            : savedPostCommentSubCommentElementsClean
                    )}

                    {currentFilter === "Upvoted" && (
                        upvotedPostCommentSubCommentElementsClean.length === 0
                            ? <EmptyPost />
                            : upvotedPostCommentSubCommentElementsClean
                    )}

                    {currentFilter === "Downvoted" && (
                        downvotedPostCommentSubCommentElementsClean.length === 0
                            ? <EmptyPost />
                            : downvotedPostCommentSubCommentElementsClean
                    )}

                    <div className="profile__left--content--filler" />
                </div>
            </div>

            <div className="profile__right" />
        </div>
    )
}