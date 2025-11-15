import type { UserType, PostType, PagesType, CommentType } from "../types"

import { useState } from "react"

import ImagePreview from "./ImagePreview"

import upArrowBlack from "../assets/icons/up-arrow-black.png"
import bottomArrowBlack from "../assets/icons/bottom-arrow-black.png"
import upArrowWhite from "../assets/icons/up-arrow-white.png"
import bottomArrowWhite from "../assets/icons/bottom-arrow-white.png"
import leftArrow from "../assets/icons/left-arrow.png"
import rightArrow from "../assets/icons/right-arrow.png"
import comment from "../assets/icons/comment.png"
import bookmarkWhite from "../assets/icons/bookmark-white.png"
import bookmarkBlack from "../assets/icons/bookmark-black.png"

type Props = {
    id: number
    icon: string | undefined
    name: string | undefined
    date: string
    text: string | undefined
    image1: string | undefined
    image2: string | undefined
    image3: string | undefined
    image4: string | undefined
    image5: string | undefined
    image6: string | undefined
    image7: string | undefined
    image8: string | undefined
    image9: string | undefined
    upvotes: (UserType | undefined)[]
    downvotes: (UserType | undefined)[]
    comments: CommentType[]
    bookmarks: (UserType | undefined)[]
    currentUser: UserType | undefined
    setPostsData: React.Dispatch<React.SetStateAction<PostType[]>>
    currentPage: PagesType
    setCurrentPage: React.Dispatch<React.SetStateAction<PagesType>>
    setId: React.Dispatch<React.SetStateAction<number>>
    setPreviousPage: React.Dispatch<React.SetStateAction<PagesType>>
}

export default function Post({
    id,
    icon,
    name,
    date,
    text,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    upvotes,
    downvotes,
    comments,
    bookmarks,
    currentUser,
    setPostsData,
    currentPage,
    setCurrentPage,
    setId,
    setPreviousPage
}: Props) {
    const [currentImage, setCurrentImage] = useState<number>(1)
    const [imagePreview, setImagePreview] = useState<boolean>(false)

    let value = 0
    for (const subComment of comments) {
        value += subComment.comments.length
    }

    function numOfImages() {
        if (
            image1 !== undefined &&
            image2 !== undefined &&
            image3 !== undefined &&
            image4 !== undefined &&
            image5 !== undefined &&
            image6 !== undefined &&
            image7 !== undefined &&
            image8 !== undefined &&
            image9 !== undefined
        ) {
            return 9
        } else if (
            image1 !== undefined &&
            image2 !== undefined &&
            image3 !== undefined &&
            image4 !== undefined &&
            image5 !== undefined &&
            image6 !== undefined &&
            image7 !== undefined &&
            image8 !== undefined
        ) {
            return 8
        } else if (
            image1 !== undefined &&
            image2 !== undefined &&
            image3 !== undefined &&
            image4 !== undefined &&
            image5 !== undefined &&
            image6 !== undefined &&
            image7 !== undefined
        ) {
            return 7
        } else if (
            image1 !== undefined &&
            image2 !== undefined &&
            image3 !== undefined &&
            image4 !== undefined &&
            image5 !== undefined &&
            image6 !== undefined
        ) {
            return 6
        } else if (
            image1 !== undefined &&
            image2 !== undefined &&
            image3 !== undefined &&
            image4 !== undefined &&
            image5 !== undefined
        ) {
            return 5
        } else if (
            image1 !== undefined &&
            image2 !== undefined &&
            image3 !== undefined &&
            image4 !== undefined
        ) {
            return 4
        } else if (
            image1 !== undefined &&
            image2 !== undefined &&
            image3 !== undefined
        ) {
            return 3
        } else if (
            image1 !== undefined &&
            image2 !== undefined
        ) {
            return 2
        } else if (image1 !== undefined) {
            return 1
        } else {
            return 0
        }
    }

    function imageLink() {
        if (currentImage === 1) {
            return image1
        } else if (currentImage === 2) {
            return image2
        } else if (currentImage === 3) {
            return image3
        } else if (currentImage === 4) {
            return image4
        } else if (currentImage === 5) {
            return image5
        } else if (currentImage === 6) {
            return image6
        } else if (currentImage === 7) {
            return image7
        } else if (currentImage === 8) {
            return image8
        } else if (currentImage === 9) {
            return image9
        }
    }

    function images() {
        if (image1 !== undefined && image2 === undefined) {
            return (
                <img
                    src={image1}
                    alt="Image"
                    className="post__content--image"
                    onClick={() => setImagePreview((prev) => !prev)}
                />
            )
        } else {
            return (
                <div className="post__content--images">
                    <img
                        src={leftArrow}
                        alt="Left arrow"
                        className="post__content--images--leftArrow"
                        onClick={() => setCurrentImage((prev) => prev === 1 ? numOfImages() : prev - 1)}
                    />
                    <img
                        src={rightArrow}
                        alt="Right arrow"
                        className="post__content--images--rightArrow"
                        onClick={() => setCurrentImage((prev) => prev === numOfImages() ? 1 : prev + 1)}
                    />
                    <img
                        src={imageLink()}
                        alt="Image"
                        className="post__content--images--image"
                        onClick={() => setImagePreview((prev) => !prev)}
                    />
                </div>
            )
        }
    }

    function setPagesPost() {
        setPreviousPage(currentPage)
        setCurrentPage("PostDetails")
        setId(id)
    }

    return (
        <div className="post">
            {imagePreview ? (
                <ImagePreview
                    numOfImages={numOfImages}
                    imageLink={imageLink}
                    setCurrentImage={setCurrentImage}
                    setImagePreview={setImagePreview}
                />
            ) : null}
            <div
                className="post__info"
                onClick={setPagesPost}
            >
                {icon !== undefined
                    ? (
                        <img
                            src={icon}
                            alt="Icon"
                            className="post__info--icon"
                            onClick={() => setCurrentPage("Community")}
                        />
                    )
                    : (
                        <div className="post__info--icon" />
                    )}
                <span
                    className="post__info--name"
                    onClick={() => setCurrentPage("Community")}
                >
                    {name !== undefined
                        ? name
                        : "Unset"
                    }
                </span>
                <span
                    className="post__info--date"
                >
                    {date}
                </span>
            </div>

            <div className="post__content">
                {text !== undefined
                    ? (
                        <p
                            className="post__content--text"
                            onClick={setPagesPost}
                        >
                            {text}
                        </p>
                    )
                    : null
                }
                {image1 !== undefined ? images() : null}
            </div>

            <div className="post__stats">
                <div
                    className={
                        upvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                            || downvotes.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                            ? "post__stats--votes post__stats--votes-red"
                            : "post__stats--votes"
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
                        className="post__stats--votes--upvoteIcon"
                    />
                    <span
                        className="post__stats--votes--number"
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
                        className="post__stats--votes--downvoteIcon"
                    />
                </div>

                <div
                    className="post__stats--comments"
                    onClick={setPagesPost}
                >
                    <img
                        src={comment}
                        alt="Comments"
                        className="post__stats--comments--icon"
                    />
                    <span
                        className="post__stats--comments--number"
                    >
                        {comments.length + value}
                    </span>
                </div>

                <div
                    className={
                        bookmarks.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                            ? "post__stats--bookmark post__stats--bookmark-red"
                            : "post__stats--bookmark"
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
                            bookmarks.some((user: UserType | undefined) => user?.tag === currentUser?.tag)
                                ? bookmarkWhite
                                : bookmarkBlack
                        }
                        alt="Bookmark"
                        className="post__stats--bookmark--icon"
                    />
                </div>
            </div>
        </div>
    )
}