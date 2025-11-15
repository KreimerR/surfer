import type { UserType, PostType, PagesType, CommentType, SubCommentType } from "../types"

import { useState } from "react"

import SubComment from "./SubComment"

import upArrowBlack from "../assets/icons/up-arrow-black.png"
import bottomArrowBlack from "../assets/icons/bottom-arrow-black.png"
import upArrowWhite from "../assets/icons/up-arrow-white.png"
import bottomArrowWhite from "../assets/icons/bottom-arrow-white.png"
import comment from "../assets/icons/comment.png"
import bookmarkWhite from "../assets/icons/bookmark-white.png"
import bookmarkBlack from "../assets/icons/bookmark-black.png"
import deleteIcon from "../assets/icons/delete.png"

type Props = {
    id1: number
    id2: number
    currentUser: UserType | undefined
    commentUser: UserType | undefined
    setPostsData: React.Dispatch<React.SetStateAction<PostType[]>>
    icon: string | undefined
    name: string | undefined
    date: string
    text: string | undefined
    upvotes: (UserType | undefined)[]
    downvotes: (UserType | undefined)[]
    comments: SubCommentType[]
    bookmarks: (UserType | undefined)[]
    subCommentsShow: boolean
    setProfileUser: React.Dispatch<React.SetStateAction<UserType | undefined>>
    setCurrentPage: React.Dispatch<React.SetStateAction<PagesType>>
}

export default function Comment({
    id1,
    id2,
    currentUser,
    commentUser,
    setPostsData,
    icon,
    name,
    date,
    text,
    upvotes,
    downvotes,
    comments,
    bookmarks,
    subCommentsShow,
    setProfileUser,
    setCurrentPage
}: Props) {
    const [commentArea, setCommentArea] = useState<boolean>(false)
    const [textareaValue, setTextareaValue] = useState<string>("")

    function openProfile() {
        setProfileUser(commentUser)
        setCurrentPage("Profile")
    }

    function handleSave() {
        setPostsData((prev: PostType[]) =>
            prev.map((post: PostType, index: number) => {
                if (index !== id1) return post

                return {
                    ...post,
                    comments: post.comments.map((comment: CommentType, index2: number) => {
                        if (index2 !== id2) return comment

                        return {
                            ...comment,
                            comments: [
                                ...(comment.comments || []),
                                {
                                    user: currentUser,
                                    date: new Date().toLocaleDateString(),
                                    text: textareaValue,
                                    upvotes: [],
                                    downvotes: [],
                                    comments: [],
                                    bookmarks: [],
                                }
                            ]
                        }
                    })
                }
            })
        )

        setTextareaValue("")
        setCommentArea(false)
    }

    const subComments = comments.map((comment: SubCommentType, index: number) => (
        <SubComment
            key={index}
            id1={id1}
            id2={id2}
            id3={index}
            currentUser={currentUser}
            setPostsData={setPostsData}
            icon={comment.user?.icon}
            name={comment.user?.name}
            date={comment.date}
            text={comment.text}
            upvotes={comment.upvotes}
            downvotes={comment.downvotes}
            bookmarks={comment.bookmarks}
        />
    ))

    return (
        <div className="comment">
            {
                icon !== undefined
                    ? (<img src={icon} alt="Icon" className="comment__icon" />)
                    : (<div className="comment__icon" />)
            }

            <div className="comment__right">
                <div className="comment__right--info">
                    <span className="comment__right--info--name" onClick={openProfile}>{name}</span>
                    <span className="comment__right--info--date">{date}</span>
                </div>

                <p className="comment__right--text">{text}</p>

                <div className="comment__right--stats">
                    <div
                        className={
                            upvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                                || downvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                                ? "comment__right--stats--votes comment__right--stats--votes-red"
                                : "comment__right--stats--votes"
                        }
                    >
                        <img
                            src={
                                upvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                                    ? upArrowWhite
                                    : upArrowBlack
                            }
                            onClick={() =>
                                setPostsData((prev: PostType[]) =>
                                    prev.map((post: PostType, index: number) => {
                                        if (index !== id1) return post

                                        return {
                                            ...post,
                                            comments: post.comments.map((comment: CommentType, idx: number) => {
                                                if (idx !== id2) return comment

                                                if (comment.downvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)) {
                                                    return {
                                                        ...comment,
                                                        downvotes: comment.downvotes.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag),
                                                        upvotes: [...comment.upvotes, currentUser]
                                                    }
                                                } else if (comment.upvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)) {
                                                    return {
                                                        ...comment,
                                                        upvotes: comment.upvotes.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag)
                                                    }
                                                } else {
                                                    return {
                                                        ...comment,
                                                        upvotes: [...comment.upvotes, currentUser],
                                                        downvotes: comment.downvotes.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag)
                                                    }
                                                }
                                            })
                                        }
                                    })
                                )
                            }
                            alt="Upvote"
                            className="comment__right--stats--votes--upvoteIcon"
                        />
                        <span
                            className="comment__right--stats--votes--number"
                        >
                            {upvotes.length - downvotes.length}
                        </span>
                        <img
                            src={
                                downvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                                    ? bottomArrowWhite
                                    : bottomArrowBlack
                            }
                            onClick={() =>
                                setPostsData((prev: PostType[]) =>
                                    prev.map((post: PostType, index: number) => {
                                        if (index !== id1) return post

                                        return {
                                            ...post,
                                            comments: post.comments.map((comment: CommentType, index2: number) => {
                                                if (index2 !== id2) return comment

                                                if (comment.upvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)) {
                                                    return {
                                                        ...comment,
                                                        downvotes: [...comment.downvotes, currentUser],
                                                        upvotes: comment.upvotes.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag)
                                                    }
                                                } else if (comment.downvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)) {
                                                    return {
                                                        ...comment,
                                                        downvotes: comment.downvotes.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag)
                                                    }
                                                } else {
                                                    return {
                                                        ...comment,
                                                        downvotes: [...comment.downvotes, currentUser]
                                                    }
                                                }
                                            })
                                        }
                                    })
                                )
                            }
                            alt="Downvote"
                            className="comment__right--stats--votes--downvoteIcon"
                        />
                    </div>

                    <div
                        className="comment__right--stats--comments"
                        onClick={() => setCommentArea(true)}
                    >
                        <img
                            src={comment}
                            alt="Comments"
                            className="comment__right--stats--comments--icon"
                        />
                        <span
                            className="comment__right--stats--comments--number"
                        >
                            {comments.length}
                        </span>
                    </div>

                    <div
                        className={
                            bookmarks.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                                ? "comment__right--stats--bookmark comment__right--stats--bookmark-red"
                                : "comment__right--stats--bookmark"
                        }
                        onClick={() =>
                            setPostsData((prev: PostType[]) =>
                                prev.map((post: PostType, index: number) => {
                                    if (index !== id1) return post

                                    return {
                                        ...post,
                                        comments: post.comments.map((comment: CommentType, index2: number) => {
                                            if (index2 !== id2) return comment

                                            if (comment.bookmarks.some((user: UserType | undefined) => user?.tag === currentUser?.tag)) {
                                                return {
                                                    ...comment,
                                                    bookmarks: comment.bookmarks.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag)
                                                }
                                            } else {
                                                return {
                                                    ...comment,
                                                    bookmarks: [...comment.bookmarks, currentUser]
                                                }
                                            }
                                        })
                                    }
                                })
                            )
                        }
                    >
                        <img
                            src={
                                bookmarks === undefined
                                    ? bookmarkBlack
                                    : bookmarks.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                                        ? bookmarkWhite
                                        : bookmarkBlack
                            }
                            alt="Bookmark"
                            className="comment__right--stats--bookmark--icon"
                        />
                    </div>

                    {currentUser?.name === name
                        ? (
                            <div
                                className="comment__right--stats--delete"
                                onClick={() =>
                                    setPostsData((prev: PostType[]) =>
                                        prev.map((post: PostType, index: number) => {
                                            if (index !== id1) return post

                                            return {
                                                ...post,
                                                comments: post.comments.filter((_, index2: number) => index2 !== id2)
                                            }
                                        })
                                    )
                                }
                            >
                                <img
                                    src={deleteIcon}
                                    alt="Icon"
                                    className="comment__right--stats--delete--icon"
                                />
                            </div>
                        )
                        : null
                    }
                </div>

                {commentArea ? (
                    <div className="comment__right--commentTextarea">
                        <textarea
                            name="textarea"
                            id="textarea"
                            placeholder="Write something"
                            className="comment__right--commentTextarea--textarea"
                            onChange={(e) => setTextareaValue(e.target.value)}
                        />

                        <div className="comment__right--commentTextarea--buttons">
                            <button
                                className="comment__right--commentTextarea--buttons--cancel"
                                onClick={() => setCommentArea(false)}
                            >
                                Cancel
                            </button>

                            <button
                                className="comment__right--commentTextarea--buttons--comment"
                                onClick={handleSave}
                            >
                                Comment
                            </button>
                        </div>
                    </div>
                ) : null}

                {subComments.length > 0 && subCommentsShow
                    ? (
                        <div className="comment__right--subComments">{subComments}</div>
                    )
                    : null
                }
            </div>
        </div>
    )
}