import type { UserType, CommunityType, PostType, PagesType, CommentType } from "../types"

import { useState } from "react"

import ImagePreview from "../components/ImagePreview"
import Comment from "../components/Comment"

import upArrowBlack from "../assets/icons/up-arrow-black.png"
import bottomArrowBlack from "../assets/icons/bottom-arrow-black.png"
import upArrowWhite from "../assets/icons/up-arrow-white.png"
import bottomArrowWhite from "../assets/icons/bottom-arrow-white.png"
import leftArrow from "../assets/icons/left-arrow.png"
import rightArrow from "../assets/icons/right-arrow.png"
import leftArrowBlack from "../assets/icons/left-arrow-black.png"
import comment from "../assets/icons/comment.png"
import bookmarkWhite from "../assets/icons/bookmark-white.png"
import bookmarkBlack from "../assets/icons/bookmark-black.png"
import deleteIcon from "../assets/icons/delete.png"

type Props = {
    postsData: PostType[]
    currentUser: UserType | undefined
    setProfileUser: React.Dispatch<React.SetStateAction<UserType | undefined>>
    previousPage: PagesType
    setCurrentPage: React.Dispatch<React.SetStateAction<PagesType>>
    id: number
    setPostsData: React.Dispatch<React.SetStateAction<PostType[]>>
    setCurrentCommunity: React.Dispatch<React.SetStateAction<CommunityType | null>>
}

export default function PostDetails({
    postsData,
    currentUser,
    setProfileUser,
    previousPage,
    setCurrentPage,
    id,
    setPostsData,
    setCurrentCommunity,
}: Props) {
    const [currentImage, setCurrentImage] = useState<number>(1)
    const [imagePreview, setImagePreview] = useState<boolean>(false)
    const [commentArea, setCommentArea] = useState<boolean>(false)
    const [textareaValue, setTextareaValue] = useState<string>("")

    let value = 0
    for (const subComment of postsData[id].comments) {
        value += subComment.comments.length
    }

    const currentPost = postsData.find((post: PostType, index: number) => { if (index === id) return post })

    function numOfImages() {
        if (
            postsData[id].image1 !== undefined &&
            postsData[id].image2 !== undefined &&
            postsData[id].image3 !== undefined &&
            postsData[id].image4 !== undefined &&
            postsData[id].image5 !== undefined &&
            postsData[id].image6 !== undefined &&
            postsData[id].image7 !== undefined &&
            postsData[id].image8 !== undefined &&
            postsData[id].image9 !== undefined
        ) {
            return 9
        } else if (
            postsData[id].image1 !== undefined &&
            postsData[id].image2 !== undefined &&
            postsData[id].image3 !== undefined &&
            postsData[id].image4 !== undefined &&
            postsData[id].image5 !== undefined &&
            postsData[id].image6 !== undefined &&
            postsData[id].image7 !== undefined &&
            postsData[id].image8 !== undefined
        ) {
            return 8
        } else if (
            postsData[id].image1 !== undefined &&
            postsData[id].image2 !== undefined &&
            postsData[id].image3 !== undefined &&
            postsData[id].image4 !== undefined &&
            postsData[id].image5 !== undefined &&
            postsData[id].image6 !== undefined &&
            postsData[id].image7 !== undefined
        ) {
            return 7
        } else if (
            postsData[id].image1 !== undefined &&
            postsData[id].image2 !== undefined &&
            postsData[id].image3 !== undefined &&
            postsData[id].image4 !== undefined &&
            postsData[id].image5 !== undefined &&
            postsData[id].image6 !== undefined
        ) {
            return 6
        } else if (
            postsData[id].image1 !== undefined &&
            postsData[id].image2 !== undefined &&
            postsData[id].image3 !== undefined &&
            postsData[id].image4 !== undefined &&
            postsData[id].image5 !== undefined
        ) {
            return 5
        } else if (
            postsData[id].image1 !== undefined &&
            postsData[id].image2 !== undefined &&
            postsData[id].image3 !== undefined &&
            postsData[id].image4 !== undefined
        ) {
            return 4
        } else if (
            postsData[id].image1 !== undefined &&
            postsData[id].image2 !== undefined &&
            postsData[id].image3 !== undefined
        ) {
            return 3
        } else if (
            postsData[id].image1 !== undefined &&
            postsData[id].image2 !== undefined
        ) {
            return 2
        } else if (postsData[id].image1 !== undefined) {
            return 1
        } else {
            return 0
        }
    }

    function imageLink() {
        if (currentImage === 1) {
            return postsData[id].image1
        } else if (currentImage === 2) {
            return postsData[id].image2
        } else if (currentImage === 3) {
            return postsData[id].image3
        } else if (currentImage === 4) {
            return postsData[id].image4
        } else if (currentImage === 5) {
            return postsData[id].image5
        } else if (currentImage === 6) {
            return postsData[id].image6
        } else if (currentImage === 7) {
            return postsData[id].image7
        } else if (currentImage === 8) {
            return postsData[id].image8
        } else if (currentImage === 9) {
            return postsData[id].image9
        }
    }

    function images() {
        if (postsData[id].image1 !== undefined && postsData[id].image2 === undefined) {
            return (
                <img
                    src={postsData[id].image1}
                    alt="Image"
                    className="postDetails__main--content--image"
                    onClick={() => setImagePreview((prev) => !prev)}
                />
            )
        } else {
            return (
                <div className="postDetails__main--content--images">
                    <img
                        src={leftArrow}
                        alt="Left arrow"
                        className="postDetails__main--content--images--leftArrow"
                        onClick={() => setCurrentImage((prev) => prev === 1 ? numOfImages() : prev - 1)}
                    />
                    <img
                        src={rightArrow}
                        alt="Right arrow"
                        className="postDetails__main--content--images--rightArrow"
                        onClick={() => setCurrentImage((prev) => prev === numOfImages() ? 1 : prev + 1)}
                    />
                    <img
                        src={imageLink()}
                        alt="Image"
                        className="postDetails__main--content--images--image"
                        onClick={() => setImagePreview((prev) => !prev)}
                    />
                </div>
            )
        }
    }

    function setPages() {
        setCurrentPage("Community")
        setCurrentCommunity({
            icon: currentPost?.community?.icon,
            name: currentPost?.community?.name ?? "",
            shortDescription: currentPost?.community?.shortDescription ?? "",
            longDescription: currentPost?.community?.longDescription ?? "",
            followers: currentPost?.community?.followers ?? [],
            author: currentPost?.community?.author,
        })
    }

    function openProfile() {
        setProfileUser(postsData[id].author)
        setCurrentPage("Profile")
    }

    function handleSave() {
        setPostsData((prev: PostType[]) =>
            prev.map((post: PostType, index: number) => {
                if (index !== id) return post

                return {
                    ...post,
                    comments: [
                        ...post.comments,
                        {
                            user: currentUser,
                            date: new Date().toLocaleDateString(),
                            text: textareaValue,
                            upvotes: [],
                            downvotes: [],
                            comments: [],
                            bookmarks: [],
                        },
                    ]
                }
            })
        )

        setTextareaValue("")
        setCommentArea(false)
    }

    function handleDelete() {
        setCurrentPage("Home")
        setPostsData((prev: PostType[]) => prev.filter((_, index: number) => index !== id))
    }

    const comments = postsData[id].comments.map((comment: CommentType, index: number) =>
        <Comment
            key={index}
            id1={id}
            id2={index}
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
            subCommentsShow={true}
            setProfileUser={setProfileUser}
            setCurrentPage={setCurrentPage}
        />
    )

    return (
        <div className="postDetails">
            <img
                src={leftArrowBlack}
                alt="Back"
                className="postDetails__back"
                onClick={() => setCurrentPage(previousPage)}
            />

            <div className="postDetails__main">
                {imagePreview ? (
                    <ImagePreview
                        numOfImages={numOfImages}
                        imageLink={imageLink}
                        setCurrentImage={setCurrentImage}
                        setImagePreview={setImagePreview}
                    />
                ) : null}
                <div className="postDetails__main--info">
                    {postsData[id].community?.icon !== undefined
                        ? (
                            <img
                                src={postsData[id].community.icon}
                                alt="Icon"
                                className="postDetails__main--info--icon"
                                onClick={setPages}
                            />
                        )
                        : (
                            <div className="postDetails__main--info--icon" />
                        )}
                    <div className="postDetails__main--info--right">
                        <div className="postDetails__main--info--right--top">
                            <span
                                className="postDetails__main--info--right--top--name"
                                onClick={setPages}
                            >
                                {postsData[id].community?.name !== undefined
                                    ? postsData[id].community.name
                                    : "Unset"
                                }
                            </span>
                            <span
                                className="postDetails__main--info--right--top--date"
                            >
                                {postsData[id].date}
                            </span>
                        </div>
                        <span
                            className="postDetails__main--info--right--author"
                            onClick={openProfile}
                        >
                            {postsData[id].author?.name}
                        </span>
                    </div>
                </div>

                <div className="postDetails__main--content">
                    {postsData[id].text !== undefined
                        ? (
                            <p
                                className="postDetails__main--content--text"
                            >
                                {postsData[id].text}
                            </p>
                        )
                        : null
                    }

                    {postsData[id].image1 !== undefined ? images() : null}

                    {postsData[id].fullText !== undefined
                        ? (
                            <p
                                className="postDetails__main--content--fullText"
                            >
                                {postsData[id].fullText}
                            </p>
                        )
                        : null
                    }
                </div>

                <div className="postDetails__main--stats">
                    <div
                        className={
                            postsData[id].upvotes.includes(currentUser)
                                || postsData[id].downvotes.includes(currentUser)
                                ? "postDetails__main--stats--votes postDetails__main--stats--votes-red"
                                : "postDetails__main--stats--votes"
                        }
                    >
                        <img
                            src={
                                postsData[id].upvotes.includes(currentUser)
                                    ? upArrowWhite
                                    : upArrowBlack
                            }
                            onClick={() =>
                                setPostsData((prev: PostType[]) =>
                                    prev.map((post: PostType, index: number) => {
                                        if (index !== id) return post

                                        if (post.downvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)) {
                                            return {
                                                ...post,
                                                upvotes: [...post.upvotes, currentUser],
                                                downvotes: post.downvotes.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag)
                                            }
                                        } else if (post.upvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)) {
                                            return {
                                                ...post,
                                                upvotes: post.upvotes.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag)
                                            }
                                        } else {
                                            return {
                                                ...post,
                                                upvotes: [...post.upvotes, currentUser]
                                            }
                                        }
                                    })
                                )
                            }
                            alt="Upvote"
                            className="postDetails__main--stats--votes--upvoteIcon"
                        />
                        <span
                            className="postDetails__main--stats--votes--number"
                        >
                            {postsData[id].upvotes.length - postsData[id].downvotes.length}
                        </span>
                        <img
                            src={
                                postsData[id].downvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                                    ? bottomArrowWhite
                                    : bottomArrowBlack
                            }
                            onClick={() =>
                                setPostsData((prev: PostType[]) =>
                                    prev.map((post: PostType, index: number) => {
                                        if (index !== id) return post

                                        if (post.upvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)) {
                                            return {
                                                ...post,
                                                downvotes: [...post.downvotes, currentUser],
                                                upvotes: post.upvotes.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag)
                                            }
                                        } else if (post.downvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)) {
                                            return {
                                                ...post,
                                                downvotes: post.downvotes.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag)
                                            }
                                        } else {
                                            return {
                                                ...post,
                                                downvotes: [...post.downvotes, currentUser]
                                            }
                                        }
                                    })
                                )
                            }
                            alt="Downvote"
                            className="postDetails__main--stats--votes--downvoteIcon"
                        />
                    </div>

                    <div
                        className="postDetails__main--stats--comments"
                        onClick={() => setCommentArea(true)}
                    >
                        <img
                            src={comment}
                            alt="Comments"
                            className="postDetails__main--stats--comments--icon"
                        />
                        <span
                            className="postDetails__main--stats--comments--number"
                        >
                            {postsData[id].comments.length + value}
                        </span>
                    </div>

                    <div
                        className={
                            postsData[id].bookmarks.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                                ? "postDetails__main--stats--bookmark postDetails__main--stats--bookmark-red"
                                : "postDetails__main--stats--bookmark"
                        }
                        onClick={() =>
                            setPostsData((prev: PostType[]) => (
                                prev.map((post: PostType, index: number) => (
                                    index === id
                                        ? post.bookmarks.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                                            ? { ...post, bookmarks: post.bookmarks.filter((user: UserType | undefined) => user?.tag !== currentUser?.tag) }
                                            : { ...post, bookmarks: [...post.bookmarks, currentUser] }
                                        : { ...post }
                                ))
                            ))
                        }
                    >
                        <img
                            src={
                                postsData[id].bookmarks.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                                    ? bookmarkWhite
                                    : bookmarkBlack
                            }
                            alt="Bookmark"
                            className="postDetails__main--stats--bookmark--icon"
                        />
                    </div>

                    {currentUser?.name === postsData[id].author?.name
                        ? (
                            <div
                                className="postDetails__main--stats--delete"
                                onClick={handleDelete}
                            >
                                <img
                                    src={deleteIcon}
                                    alt="Icon"
                                    className="postDetails__main--stats--delete--icon"
                                />
                            </div>
                        )
                        : null
                    }
                </div>

                {commentArea ? (
                    <div className="postDetails__main--commentTextarea">
                        <textarea
                            name="textarea"
                            id="textarea"
                            placeholder="Write something"
                            className="postDetails__main--commentTextarea--textarea"
                            onChange={(e) => setTextareaValue(e.target.value)}
                        />

                        <div className="postDetails__main--commentTextarea--buttons">
                            <button
                                className="postDetails__main--commentTextarea--buttons--cancel"
                                onClick={() => setCommentArea(false)}
                            >
                                Cancel
                            </button>

                            <button
                                className="postDetails__main--commentTextarea--buttons--comment"
                                onClick={handleSave}
                            >
                                Comment
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        className="postDetails__main--comment"
                        onClick={() => setCommentArea(true)}
                    >
                        Comment
                    </button>
                )}

                {
                    postsData[id].comments.length === 0
                        ? (
                            <span
                                className="postDetails__main--text"
                            >
                                There is no comments.
                            </span>
                        )
                        : (
                            <div className="postDetails__main--comments">{comments}</div>
                        )
                }
            </div>

            <div className="postDetails__right"></div>
        </div>
    )
}