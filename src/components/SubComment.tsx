import type { UserType, PostType, CommentType, SubCommentType } from "../types"

import { useState } from "react"

import upArrowBlack from "../assets/icons/up-arrow-black.png"
import bottomArrowBlack from "../assets/icons/bottom-arrow-black.png"
import upArrowWhite from "../assets/icons/up-arrow-white.png"
import bottomArrowWhite from "../assets/icons/bottom-arrow-white.png"
import bookmarkWhite from "../assets/icons/bookmark-white.png"
import bookmarkBlack from "../assets/icons/bookmark-black.png"
import deleteIcon from "../assets/icons/delete.png"

type Props = {
    id1: number
    id2: number
    id3: number
    currentUser: UserType | undefined
    setPostsData: React.Dispatch<React.SetStateAction<PostType[]>>
    icon: string | undefined
    name: string | undefined
    date: string
    text: string | undefined
    upvotes: (UserType | undefined)[]
    downvotes: (UserType | undefined)[]
    bookmarks: (UserType | undefined)[]
}

export default function SubComment({
    id1,
    id2,
    id3,
    currentUser,
    setPostsData,
    icon,
    name,
    date,
    text,
    upvotes,
    downvotes,
    bookmarks
}: Props) {
    const [commentArea, setCommentArea] = useState<boolean>(false)
    const [textareaValue, setTextareaValue] = useState<string>("")

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
                            comments: comment.comments.map((subComment: SubCommentType, index3: number) => {
                                if (index3 !== id3) return subComment

                                return {
                                    ...subComment,
                                    comments: [
                                        ...(comment.comments || []),
                                        {
                                            user: currentUser,
                                            date: new Date().toLocaleDateString(),
                                            text: textareaValue,
                                            upvotes: [],
                                            downvotes: [],
                                            bookmarks: [],
                                        }
                                    ]
                                }
                            })
                        }
                    })
                }
            })
        )

        setTextareaValue("")
        setCommentArea(false)
    }


    return (
        <div className="subComment">
            {
                icon !== undefined
                    ? (<img src={icon} alt="Icon" className="subComment__icon" />)
                    : (<div className="subComment__icon" />)
            }

            <div className="subComment__right">
                <div className="subComment__right--info">
                    <span className="subComment__right--info--name">{name}</span>
                    <span className="subComment__right--info--date">{date}</span>
                </div>

                <p className="subComment__right--text">{text}</p>

                <div className="subComment__right--stats">
                    <div
                        className={
                            upvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                                || downvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                                ? "subComment__right--stats--votes subComment__right--stats--votes-red"
                                : "subComment__right--stats--votes"
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
                                            comments: post.comments.map((comment: CommentType, index2: number) => {
                                                if (index2 !== id2) return comment

                                                return {
                                                    ...comment,
                                                    comments: comment.comments.map((subComment: SubCommentType, index3: number) => {
                                                        if (index3 !== id3) return subComment

                                                        if (subComment.downvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)) {
                                                            return {
                                                                ...subComment,
                                                                downvotes: subComment.downvotes.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag),
                                                                upvotes: [...subComment.upvotes, currentUser]
                                                            }
                                                        } else if (subComment.upvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)) {
                                                            return {
                                                                ...subComment,
                                                                upvotes: subComment.upvotes.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag)
                                                            }
                                                        } else {
                                                            return {
                                                                ...subComment,
                                                                upvotes: [...subComment.upvotes, currentUser],
                                                                downvotes: subComment.downvotes.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag)
                                                            }
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                )
                            }
                            alt="Upvote"
                            className="subComment__right--stats--votes--upvoteIcon"
                        />
                        <span
                            className="subComment__right--stats--votes--number"
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

                                                return {
                                                    ...comment,
                                                    comments: comment.comments.map((subComment: SubCommentType, index3: number) => {
                                                        if (index3 !== id3) return subComment

                                                        if (subComment.upvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)) {
                                                            return {
                                                                ...subComment,
                                                                downvotes: [...subComment.downvotes, currentUser],
                                                                upvotes: subComment.upvotes.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag)
                                                            }
                                                        } else if (subComment.downvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)) {
                                                            return {
                                                                ...subComment,
                                                                downvotes: subComment.downvotes.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag)
                                                            }
                                                        } else {
                                                            return {
                                                                ...subComment,
                                                                downvotes: [...subComment.downvotes, currentUser]
                                                            }
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                )
                            }
                            alt="Downvote"
                            className="subComment__right--stats--votes--downvoteIcon"
                        />
                    </div>

                    <div
                        className={
                            bookmarks.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                                ? "subComment__right--stats--bookmark subComment__right--stats--bookmark-red"
                                : "subComment__right--stats--bookmark"
                        }
                        onClick={() =>
                            setPostsData((prev: PostType[]) =>
                                prev.map((post: PostType, index: number) => {
                                    if (index !== id1) return post

                                    return {
                                        ...post,
                                        comments: post.comments.map((comment: CommentType, index2: number) => {
                                            if (index2 !== id2) return comment

                                            return {
                                                ...comment,
                                                comments: comment.comments.map((subComment: SubCommentType, index3: number) => {
                                                    if (index3 !== id3) return subComment

                                                    if (subComment.bookmarks.some((user: UserType | undefined) => user?.tag === currentUser?.tag)) {
                                                        return {
                                                            ...subComment,
                                                            bookmarks: subComment.bookmarks.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag)
                                                        }
                                                    } else {
                                                        return {
                                                            ...subComment,
                                                            bookmarks: [...subComment.bookmarks, currentUser]
                                                        }
                                                    }
                                                })
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
                            className="subComment__right--stats--bookmark--icon"
                        />
                    </div>

                    {currentUser?.name === name
                        ? (
                            <div
                                className="subComment__right--stats--delete"
                                onClick={() =>
                                    setPostsData((prev: PostType[]) =>
                                        prev.map((post: PostType, index: number) => {
                                            if (index !== id1) return post

                                            return {
                                                ...post,
                                                comments: post.comments.map((comment: CommentType, index2: number) => {
                                                    if (index2 !== id2) return comment

                                                    return {
                                                        ...comment,
                                                        comments: comment.comments.filter((_, index3: number) => index3 !== id3)
                                                    }
                                                })
                                            }
                                        })
                                    )
                                }
                            >
                                <img
                                    src={deleteIcon}
                                    alt="Icon"
                                    className="subComment__right--stats--delete--icon"
                                />
                            </div>
                        )
                        : null
                    }
                </div>

                {commentArea ? (
                    <div className="subComment__right--commentTextarea">
                        <textarea
                            name="textarea"
                            id="textarea"
                            placeholder="Write something"
                            className="subComment__right--commentTextarea--textarea"
                            onChange={(e) => setTextareaValue(e.target.value)}
                        />

                        <div className="subComment__right--commentTextarea--buttons">
                            <button
                                className="subComment__right--commentTextarea--buttons--cancel"
                                onClick={() => setCommentArea(false)}
                            >
                                Cancel
                            </button>

                            <button
                                className="subComment__right--commentTextarea--buttons--comment"
                                onClick={handleSave}
                            >
                                Comment
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}