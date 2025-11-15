import type { UserType, CommunityType, PostType, PagesType } from "../../types"

import { useState, useRef } from "react"

import CommunityLinkCreate from "./CommunityLinkCreate"

import searchIcon from "../../assets/icons/search.png"

type Props = {
    communitiesData: CommunityType[]
    setCommunitiesData: React.Dispatch<React.SetStateAction<CommunityType[]>>
    currentUser: UserType | undefined
    setPostsData: React.Dispatch<React.SetStateAction<PostType[]>>
    setCurrentPage: React.Dispatch<React.SetStateAction<PagesType>>
    setPreviousPage: React.Dispatch<React.SetStateAction<PagesType>>
    setId: React.Dispatch<React.SetStateAction<number>>
    currentCommunity: CommunityType | null
    setCurrentCommunity: React.Dispatch<React.SetStateAction<CommunityType | null>>
}


export default function Create({
    communitiesData,
    setCommunitiesData,
    currentUser,
    setPostsData,
    setCurrentPage,
    setPreviousPage,
    setId,
    currentCommunity,
    setCurrentCommunity,
}: Props) {
    const [currentType, setCurrentType] = useState<"Post" | "Community">("Post")
    const [currentFilter, setCurrentFilter] = useState<"Text" | "Images">("Text")
    const [communitiesList, setCommunitiesList] = useState<boolean>(false)
    const [title, setTitle] = useState<string>("")
    const [bodyText, setBodyText] = useState<string>("")
    const [image, setImage] = useState<string | null>(null)
    const [image2, setImage2] = useState<string | null>(null)
    const [image3, setImage3] = useState<string | null>(null)
    const [image4, setImage4] = useState<string | null>(null)
    const [image5, setImage5] = useState<string | null>(null)
    const [image6, setImage6] = useState<string | null>(null)
    const [image7, setImage7] = useState<string | null>(null)
    const [image8, setImage8] = useState<string | null>(null)
    const [image9, setImage9] = useState<string | null>(null)
    const [communityName, setCommunityName] = useState<string>("")
    const [shortCommunityDescription, setShortCommunityDescription] = useState<string>("")
    const [longCommunityDescription, setLongCommunityDescription] = useState<string>("")
    const [communityError, setCommunityError] = useState<boolean>(false)
    const [titleError, setTitleError] = useState<boolean>(false)
    const [imageError, setImageError] = useState<boolean>(false)
    const [communityNameError, setCommunityNameError] = useState<boolean>(false)
    const [communityIconError, setCommunityIconError] = useState<boolean>(false)
    const [shortCommunityDescriptionError, setShortCommunityDescriptionError] = useState<boolean>(false)
    const [longCommunityDescriptionError, setLongCommunityDescriptionError] = useState<boolean>(false)

    const communityRef = useRef<HTMLDivElement | null>(null)
    const titleRef = useRef<HTMLDivElement | null>(null)
    const titleTextRef = useRef<HTMLInputElement | null>(null)
    const imageRef = useRef<HTMLInputElement | null>(null)
    const nameFirstRef = useRef<HTMLDivElement | null>(null)
    const nameSecondRef = useRef<HTMLInputElement | null>(null)
    const iconRef = useRef<HTMLInputElement | null>(null)
    const shortDescriptionRef = useRef<HTMLTextAreaElement | null>(null)
    const longDescriptionRef = useRef<HTMLTextAreaElement | null>(null)

    function findCommunity(communityName: string) {
        for (const community of communitiesData) {
            if (community.name === communityName) {
                return community
            }
        }
    }

    function setFilter(type: string) {
        if (type === "Text") {
            communityRef.current !== null && communityRef.current.classList.remove("create__left--selector-wrong")
            titleRef.current !== null && titleRef.current.classList.remove("create__left--title-wrong")
            titleTextRef.current !== null && titleTextRef.current.classList.remove("create__left--title--input-wrong")
            imageRef.current !== null && imageRef.current.classList.remove("create__left--editor--images-wrong")
            nameFirstRef.current !== null && nameFirstRef.current.classList.remove("create__left--title-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.remove("create__left--title--input-wrong")
            iconRef.current !== null && iconRef.current.classList.remove("create__left--editor--images-wrong")
            shortDescriptionRef.current !== null && shortDescriptionRef.current.classList.remove("create__left--editor--text-wrong")
            longDescriptionRef.current !== null && longDescriptionRef.current.classList.remove("create__left--editor--text-wrong")

            setCommunityError(false)
            setTitleError(false)
            setImageError(false)
            setCommunityNameError(false)
            setCommunityIconError(false)
            setShortCommunityDescriptionError(false)
            setLongCommunityDescriptionError(false)
            setCurrentFilter("Text")
        } else if (type === "Images") {
            communityRef.current !== null && communityRef.current.classList.remove("create__left--selector-wrong")
            titleRef.current !== null && titleRef.current.classList.remove("create__left--title-wrong")
            titleTextRef.current !== null && titleTextRef.current.classList.remove("create__left--title--input-wrong")
            imageRef.current !== null && imageRef.current.classList.remove("create__left--editor--images-wrong")
            nameFirstRef.current !== null && nameFirstRef.current.classList.remove("create__left--title-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.remove("create__left--title--input-wrong")
            iconRef.current !== null && iconRef.current.classList.remove("create__left--editor--images-wrong")
            shortDescriptionRef.current !== null && shortDescriptionRef.current.classList.remove("create__left--editor--text-wrong")
            longDescriptionRef.current !== null && longDescriptionRef.current.classList.remove("create__left--editor--text-wrong")

            setCommunityError(false)
            setTitleError(false)
            setImageError(false)
            setCommunityNameError(false)
            setCommunityIconError(false)
            setShortCommunityDescriptionError(false)
            setLongCommunityDescriptionError(false)
            setCurrentFilter("Images")
        } else if (type === "Post") {
            communityRef.current !== null && communityRef.current.classList.remove("create__left--selector-wrong")
            titleRef.current !== null && titleRef.current.classList.remove("create__left--title-wrong")
            titleTextRef.current !== null && titleTextRef.current.classList.remove("create__left--title--input-wrong")
            imageRef.current !== null && imageRef.current.classList.remove("create__left--editor--images-wrong")
            nameFirstRef.current !== null && nameFirstRef.current.classList.remove("create__left--title-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.remove("create__left--title--input-wrong")
            iconRef.current !== null && iconRef.current.classList.remove("create__left--editor--images-wrong")
            shortDescriptionRef.current !== null && shortDescriptionRef.current.classList.remove("create__left--editor--text-wrong")
            longDescriptionRef.current !== null && longDescriptionRef.current.classList.remove("create__left--editor--text-wrong")

            setCommunityError(false)
            setTitleError(false)
            setImageError(false)
            setCommunityNameError(false)
            setCommunityIconError(false)
            setShortCommunityDescriptionError(false)
            setLongCommunityDescriptionError(false)
            setCurrentType("Post")
        } else if (type === "Community") {
            communityRef.current !== null && communityRef.current.classList.remove("create__left--selector-wrong")
            titleRef.current !== null && titleRef.current.classList.remove("create__left--title-wrong")
            titleTextRef.current !== null && titleTextRef.current.classList.remove("create__left--title--input-wrong")
            imageRef.current !== null && imageRef.current.classList.remove("create__left--editor--images-wrong")
            nameFirstRef.current !== null && nameFirstRef.current.classList.remove("create__left--title-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.remove("create__left--title--input-wrong")
            iconRef.current !== null && iconRef.current.classList.remove("create__left--editor--images-wrong")
            shortDescriptionRef.current !== null && shortDescriptionRef.current.classList.remove("create__left--editor--text-wrong")
            longDescriptionRef.current !== null && longDescriptionRef.current.classList.remove("create__left--editor--text-wrong")

            setCommunityError(false)
            setTitleError(false)
            setImageError(false)
            setCommunityNameError(false)
            setCommunityIconError(false)
            setShortCommunityDescriptionError(false)
            setLongCommunityDescriptionError(false)
            setCurrentType("Community")
        }
    }

    function toggleCommunity() {
        setCommunityError(false)
        setCommunitiesList((prev: boolean) => !prev)
    }

    function savePost() {
        setCommunityError(false)
        setTitleError(false)
        setImageError(false)

        communityRef.current !== null && communityRef.current.classList.remove("create__left--selector-wrong")
        titleRef.current !== null && titleRef.current.classList.remove("create__left--title-wrong")
        titleTextRef.current !== null && titleTextRef.current.classList.remove("create__left--title--input-wrong")
        imageRef.current !== null && imageRef.current.classList.remove("create__left--editor--images-wrong")

        if (
            currentType === "Post" &&
            currentFilter === "Text" &&
            title === "" &&
            currentCommunity === null
        ) {
            communityRef.current !== null && communityRef.current.classList.add("create__left--selector-wrong")
            titleRef.current !== null && titleRef.current.classList.add("create__left--title-wrong")
            titleTextRef.current !== null && titleTextRef.current.classList.add("create__left--title--input-wrong")
            setCommunityError(true)
            setTitleError(true)
            return
        } else if (
            currentType === "Post" &&
            currentFilter === "Text" &&
            title === ""
        ) {
            titleRef.current !== null && titleRef.current.classList.add("create__left--title-wrong")
            titleTextRef.current !== null && titleTextRef.current.classList.add("create__left--title--input-wrong")
            setTitleError(true)
            return
        } else if (
            currentType === "Post" &&
            currentFilter === "Text" &&
            currentCommunity === null
        ) {
            communityRef.current !== null && communityRef.current.classList.add("create__left--selector-wrong")
            setCommunityError(true)
            return
        }

        if (
            currentType === "Post" &&
            currentFilter === "Images" &&
            title === "" &&
            currentCommunity === null &&
            image === null
        ) {
            communityRef.current !== null && communityRef.current.classList.add("create__left--selector-wrong")
            titleRef.current !== null && titleRef.current.classList.add("create__left--title-wrong")
            titleTextRef.current !== null && titleTextRef.current.classList.add("create__left--title--input-wrong")
            imageRef.current !== null && imageRef.current.classList.add("create__left--editor--images-wrong")
            setCommunityError(true)
            setTitleError(true)
            setImageError(true)
            return
        } else if (
            currentType === "Post" &&
            currentFilter === "Images" &&
            currentCommunity === null &&
            image === null
        ) {
            communityRef.current !== null && communityRef.current.classList.add("create__left--selector-wrong")
            imageRef.current !== null && imageRef.current.classList.add("create__left--editor--images-wrong")
            setCommunityError(true)
            setImageError(true)
            return
        } else if (
            currentType === "Post" &&
            currentFilter === "Images" &&
            title === "" &&
            currentCommunity === null
        ) {
            communityRef.current !== null && communityRef.current.classList.add("create__left--selector-wrong")
            titleRef.current !== null && titleRef.current.classList.add("create__left--title-wrong")
            titleTextRef.current !== null && titleTextRef.current.classList.add("create__left--title--input-wrong")
            setCommunityError(true)
            setTitleError(true)
            return
        } else if (
            currentType === "Post" &&
            currentFilter === "Images" &&
            currentCommunity === null
        ) {
            communityRef.current !== null && communityRef.current.classList.add("create__left--selector-wrong")
            setCommunityError(true)
            return
        } else if (
            currentType === "Post" &&
            currentFilter === "Images" &&
            title === "" &&
            image === null
        ) {
            imageRef.current !== null && imageRef.current.classList.add("create__left--editor--images-wrong")
            setImageError(true)
            return
        } else if (
            currentType === "Post" &&
            currentFilter === "Images" &&
            title === ""
        ) {
            titleRef.current !== null && titleRef.current.classList.add("create__left--title-wrong")
            titleTextRef.current !== null && titleTextRef.current.classList.add("create__left--title--input-wrong")
            setTitleError(true)
            return
        } else if (
            currentType === "Post" &&
            currentFilter === "Images" &&
            image === null
        ) {
            imageRef.current !== null && imageRef.current.classList.add("create__left--editor--images-wrong")
            setImageError(true)
            return
        }

        setPostsData((prev: PostType[]) => {
            const newPost = {
                community: findCommunity(currentCommunity !== null ? currentCommunity.name : ""),
                author: currentUser,
                date: new Date().toLocaleString(),
                text: title,
                image1: image === null ? undefined : image,
                image2: image2 === null ? undefined : image2,
                image3: image3 === null ? undefined : image3,
                image4: image4 === null ? undefined : image4,
                image5: image5 === null ? undefined : image5,
                image6: image6 === null ? undefined : image6,
                image7: image7 === null ? undefined : image7,
                image8: image8 === null ? undefined : image8,
                image9: image9 === null ? undefined : image9,
                fullText: bodyText === "" ? undefined : bodyText,
                upvotes: [],
                downvotes: [],
                comments: [],
                bookmarks: [],
            }

            setId(prev.length)

            return [...prev, newPost]
        })

        setCommunityError(false)
        setTitleError(false)
        setImageError(false)
        setPreviousPage("Home")
        setCurrentPage("PostDetails")
    }

    function saveCommunity() {
        setCommunityNameError(false)
        setCommunityIconError(false)
        setShortCommunityDescriptionError(false)
        setLongCommunityDescriptionError(false)

        nameFirstRef.current !== null && nameFirstRef.current.classList.remove("create__left--title-wrong")
        nameSecondRef.current !== null && nameSecondRef.current.classList.remove("create__left--title--input-wrong")
        iconRef.current !== null && iconRef.current.classList.remove("create__left--editor--images-wrong")
        shortDescriptionRef.current !== null && shortDescriptionRef.current.classList.remove("create__left--editor--text-wrong")
        longDescriptionRef.current !== null && longDescriptionRef.current.classList.remove("create__left--editor--text-wrong")

        if (
            currentType === "Community" &&
            communityName === "" &&
            image === null &&
            shortCommunityDescription === "" &&
            longCommunityDescription === ""
        ) {
            nameFirstRef.current !== null && nameFirstRef.current.classList.add("create__left--title-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.add("create__left--title--input-wrong")
            iconRef.current !== null && iconRef.current.classList.add("create__left--editor--images-wrong")
            shortDescriptionRef.current !== null && shortDescriptionRef.current.classList.add("create__left--editor--text-wrong")
            longDescriptionRef.current !== null && longDescriptionRef.current.classList.add("create__left--editor--text-wrong")

            setCommunityNameError(true)
            setCommunityIconError(true)
            setShortCommunityDescriptionError(true)
            setLongCommunityDescriptionError(true)
            return
        } else if (
            currentType === "Community" &&
            communityName === "" &&
            shortCommunityDescription === "" &&
            longCommunityDescription === ""
        ) {
            nameFirstRef.current !== null && nameFirstRef.current.classList.add("create__left--title-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.add("create__left--title--input-wrong")
            shortDescriptionRef.current !== null && shortDescriptionRef.current.classList.add("create__left--editor--text-wrong")
            longDescriptionRef.current !== null && longDescriptionRef.current.classList.add("create__left--editor--text-wrong")

            setCommunityNameError(true)
            setShortCommunityDescriptionError(true)
            setLongCommunityDescriptionError(true)
            return
        } else if (
            currentType === "Community" &&
            communityName === "" &&
            image === null &&
            shortCommunityDescription === ""
        ) {
            nameFirstRef.current !== null && nameFirstRef.current.classList.add("create__left--title-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.add("create__left--title--input-wrong")
            iconRef.current !== null && iconRef.current.classList.add("create__left--editor--images-wrong")
            shortDescriptionRef.current !== null && shortDescriptionRef.current.classList.add("create__left--editor--text-wrong")

            setCommunityNameError(true)
            setCommunityIconError(true)
            setShortCommunityDescriptionError(true)
            return
        } else if (
            currentType === "Community" &&
            image === null &&
            shortCommunityDescription === "" &&
            longCommunityDescription === ""
        ) {
            iconRef.current !== null && iconRef.current.classList.add("create__left--editor--images-wrong")
            shortDescriptionRef.current !== null && shortDescriptionRef.current.classList.add("create__left--editor--text-wrong")
            longDescriptionRef.current !== null && longDescriptionRef.current.classList.add("create__left--editor--text-wrong")

            setCommunityIconError(true)
            setShortCommunityDescriptionError(true)
            setLongCommunityDescriptionError(true)
            return
        } else if (
            currentType === "Community" &&
            communityName === "" &&
            image === null &&
            longCommunityDescription === ""
        ) {
            nameFirstRef.current !== null && nameFirstRef.current.classList.add("create__left--title-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.add("create__left--title--input-wrong")
            iconRef.current !== null && iconRef.current.classList.add("create__left--editor--images-wrong")
            longDescriptionRef.current !== null && longDescriptionRef.current.classList.add("create__left--editor--text-wrong")

            setCommunityNameError(true)
            setCommunityIconError(true)
            setLongCommunityDescriptionError(true)
            return
        } else if (
            currentType === "Community" &&
            communityName === "" &&
            shortCommunityDescription === ""
        ) {
            nameFirstRef.current !== null && nameFirstRef.current.classList.add("create__left--title-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.add("create__left--title--input-wrong")
            shortDescriptionRef.current !== null && shortDescriptionRef.current.classList.add("create__left--editor--text-wrong")

            setCommunityNameError(true)
            setShortCommunityDescriptionError(true)
            return
        } else if (
            currentType === "Community" &&
            image === null &&
            shortCommunityDescription === ""
        ) {
            iconRef.current !== null && iconRef.current.classList.add("create__left--editor--images-wrong")
            shortDescriptionRef.current !== null && shortDescriptionRef.current.classList.add("create__left--editor--text-wrong")

            setCommunityIconError(true)
            setShortCommunityDescriptionError(true)
            return
        } else if (
            currentType === "Community" &&
            communityName === "" &&
            longCommunityDescription === ""
        ) {
            nameFirstRef.current !== null && nameFirstRef.current.classList.add("create__left--title-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.add("create__left--title--input-wrong")
            longDescriptionRef.current !== null && longDescriptionRef.current.classList.add("create__left--editor--text-wrong")

            setCommunityNameError(true)
            setLongCommunityDescriptionError(true)
            return
        } else if (
            currentType === "Community" &&
            communityName === "" &&
            image === null
        ) {
            nameFirstRef.current !== null && nameFirstRef.current.classList.add("create__left--title-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.add("create__left--title--input-wrong")
            iconRef.current !== null && iconRef.current.classList.add("create__left--editor--images-wrong")

            setCommunityNameError(true)
            setCommunityIconError(true)
            return
        } else if (
            currentType === "Community" &&
            shortCommunityDescription === "" &&
            longCommunityDescription === ""
        ) {
            shortDescriptionRef.current !== null && shortDescriptionRef.current.classList.add("create__left--editor--text-wrong")
            longDescriptionRef.current !== null && longDescriptionRef.current.classList.add("create__left--editor--text-wrong")

            setShortCommunityDescriptionError(true)
            setLongCommunityDescriptionError(true)
            return
        } else if (
            currentType === "Community" &&
            image === null &&
            longCommunityDescription === ""
        ) {
            iconRef.current !== null && iconRef.current.classList.add("create__left--editor--images-wrong")
            longDescriptionRef.current !== null && longDescriptionRef.current.classList.add("create__left--editor--text-wrong")

            setCommunityIconError(true)
            setLongCommunityDescriptionError(true)
            return
        } else if (
            currentType === "Community" &&
            communityName === ""
        ) {
            nameFirstRef.current !== null && nameFirstRef.current.classList.add("create__left--title-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.add("create__left--title--input-wrong")

            setCommunityNameError(true)
            return
        } else if (
            currentType === "Community" &&
            longCommunityDescription === ""
        ) {
            longDescriptionRef.current !== null && longDescriptionRef.current.classList.add("create__left--editor--text-wrong")
            setLongCommunityDescriptionError(true)
            return
        } else if (
            currentType === "Community" &&
            shortCommunityDescription === ""
        ) {
            shortDescriptionRef.current !== null && shortDescriptionRef.current.classList.add("create__left--editor--text-wrong")
            setShortCommunityDescriptionError(true)
            return
        } else if (
            currentType === "Community" &&
            image === null
        ) {
            iconRef.current !== null && iconRef.current.classList.add("create__left--editor--images-wrong")
            setCommunityIconError(true)
            return
        }

        setCommunitiesData((prev: CommunityType[]) => {
            const newCommunity = {
                name: communityName,
                icon: image === null ? undefined : image,
                followers: [currentUser],
                shortDescription: shortCommunityDescription,
                longDescription: longCommunityDescription,
                author: currentUser,
            }

            setCurrentCommunity(newCommunity)

            return [...prev, newCommunity]
        })

        setCommunityNameError(false)
        setCommunityIconError(false)
        setShortCommunityDescriptionError(false)
        setLongCommunityDescriptionError(false)
        setPreviousPage("Home")
        setCurrentPage("Community")
    }

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            const reader = new FileReader()

            reader.onload = () => {
                setImage(reader.result as string)
            }

            reader.readAsDataURL(file)
        }
    }

    function handleFile2Change(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            const reader = new FileReader()

            reader.onload = () => {
                setImage2(reader.result as string)
            }

            reader.readAsDataURL(file)
        }
    }

    function handleFile3Change(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            const reader = new FileReader()

            reader.onload = () => {
                setImage3(reader.result as string)
            }

            reader.readAsDataURL(file)
        }
    }

    function handleFile4Change(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            const reader = new FileReader()

            reader.onload = () => {
                setImage4(reader.result as string)
            }

            reader.readAsDataURL(file)
        }
    }

    function handleFile5Change(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            const reader = new FileReader()

            reader.onload = () => {
                setImage5(reader.result as string)
            }

            reader.readAsDataURL(file)
        }
    }

    function handleFile6Change(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            const reader = new FileReader()

            reader.onload = () => {
                setImage6(reader.result as string)
            }

            reader.readAsDataURL(file)
        }
    }

    function handleFile7Change(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            const reader = new FileReader()

            reader.onload = () => {
                setImage7(reader.result as string)
            }

            reader.readAsDataURL(file)
        }
    }

    function handleFile8Change(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            const reader = new FileReader()

            reader.onload = () => {
                setImage8(reader.result as string)
            }

            reader.readAsDataURL(file)
        }
    }

    function handleFile9Change(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            const reader = new FileReader()

            reader.onload = () => {
                setImage9(reader.result as string)
            }

            reader.readAsDataURL(file)
        }
    }

    const communities = communitiesData.map((community: CommunityType, index: number) =>
        community.followers.some((user?: UserType) => user?.tag === currentUser?.tag) && (
            <CommunityLinkCreate
                key={index}
                icon={community.icon}
                name={community.name}
                shortDescription={community.shortDescription}
                longDescription={community.longDescription}
                followers={community.followers}
                author={community.author}
                setCurrentCommunity={setCurrentCommunity}
                setCurrentPage={setCurrentPage}
            />
        )
    )

    return (
        <div className="create">
            <div className="create__left">
                <div className="create__left--type">
                    <span
                        className={
                            currentType === "Post"
                                ? "create__left--type--post create__left--type--post-active"
                                : "create__left--type--post"
                        }
                        onClick={() => setFilter("Post")}
                    >
                        Post
                    </span>

                    <span
                        className={
                            currentType === "Community"
                                ? "create__left--type--community create__left--type--community-active"
                                : "create__left--type--community"
                        }
                        onClick={() => setFilter("Community")}
                    >
                        Community
                    </span>
                </div>

                {currentType === "Post"
                    && (
                        <>
                            <div className="create__left--top">
                                <span className="create__left--top--left">Create post</span>

                                <button
                                    className="create__left--top--right"
                                    onClick={savePost}
                                >
                                    Post
                                </button>
                            </div>

                            <div
                                className={communitiesList
                                    ? "create__left--selector create__left--selector-active"
                                    : "create__left--selector create__left--selector-inactive"
                                }
                                ref={communityRef}
                                onClick={toggleCommunity}
                            >
                                <img
                                    src={currentCommunity === null || communitiesList
                                        ? searchIcon
                                        : currentCommunity.icon
                                    }
                                    alt={currentCommunity === null || communitiesList
                                        ? "Search"
                                        : "Community"
                                    }
                                    className={currentCommunity === null || communitiesList
                                        ? "create__left--selector--icon"
                                        : "create__left--selector--communityIcon"
                                    }
                                />
                                {currentCommunity === null || communitiesList ? (
                                    <span className="create__left--selector--select">Select a community</span>
                                ) : (
                                    <span className="create__left--selector--text">{currentCommunity.name}</span>
                                )}
                                {communitiesList && (
                                    <div className="create__left--selector--list">
                                        {communities}
                                    </div>
                                )}
                            </div>

                            {communityError === true &&
                                <span className="create__left--communityError">You need to choose a community.</span>
                            }

                            <div className="create__left--filters">
                                <span
                                    className={
                                        currentFilter === "Text"
                                            ? "create__left--filters--text create__left--filters--text-active"
                                            : "create__left--filters--text"
                                    }
                                    onClick={() => setFilter("Text")}
                                >
                                    Text
                                </span>

                                <span
                                    className={
                                        currentFilter === "Images"
                                            ? "create__left--filters--images create__left--filters--images-active"
                                            : "create__left--filters--images"
                                    }
                                    onClick={() => setFilter("Images")}
                                >
                                    Images
                                </span>
                            </div>

                            <div className="create__left--title" ref={titleRef}>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    className="create__left--title--input"
                                    ref={titleTextRef}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                                />
                            </div>

                            {titleError === true &&
                                <span className="create__left--titleError">You need to write a title.</span>
                            }

                            <div className="create__left--editor">
                                <textarea
                                    name="Textarea"
                                    id="Textarea"
                                    placeholder="Body text (optional)"
                                    className="create__left--editor--text"
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setBodyText(e.target.value)}
                                />

                                {currentFilter === "Images" && (
                                    <>
                                        <input
                                            type="file"
                                            placeholder="Upload media"
                                            className="create__left--editor--images"
                                            ref={imageRef}
                                            onChange={handleFileChange}
                                        />
                                        {imageError === true &&
                                            <span
                                                className="create__left--editor--imageError"
                                            >
                                                You need to choose at least one image.
                                            </span>
                                        }
                                        <input
                                            type="file"
                                            placeholder="Upload media"
                                            className="create__left--editor--images"
                                            onChange={handleFile2Change}
                                        />
                                        <input
                                            type="file"
                                            placeholder="Upload media"
                                            className="create__left--editor--images"
                                            onChange={handleFile3Change}
                                        />
                                        <input
                                            type="file"
                                            placeholder="Upload media"
                                            className="create__left--editor--images"
                                            onChange={handleFile4Change}
                                        />
                                        <input
                                            type="file"
                                            placeholder="Upload media"
                                            className="create__left--editor--images"
                                            onChange={handleFile5Change}
                                        />
                                        <input
                                            type="file"
                                            placeholder="Upload media"
                                            className="create__left--editor--images"
                                            onChange={handleFile6Change}
                                        />
                                        <input
                                            type="file"
                                            placeholder="Upload media"
                                            className="create__left--editor--images"
                                            onChange={handleFile7Change}
                                        />
                                        <input
                                            type="file"
                                            placeholder="Upload media"
                                            className="create__left--editor--images"
                                            onChange={handleFile8Change}
                                        />
                                        <input
                                            type="file"
                                            placeholder="Upload media"
                                            className="create__left--editor--images"
                                            onChange={handleFile9Change}
                                        />
                                    </>
                                )}
                            </div>
                        </>
                    )
                }

                {currentType === "Community"
                    && (
                        <>
                            <div className="create__left--top">
                                <span className="create__left--top--left">Create community</span>

                                <button
                                    className="create__left--top--right"
                                    onClick={saveCommunity}
                                >
                                    Create
                                </button>
                            </div>

                            <div className="create__left--title" ref={nameFirstRef}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="create__left--title--input"
                                    ref={nameSecondRef}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCommunityName(e.target.value)}
                                />
                            </div>

                            {communityNameError === true &&
                                <span className="create__left--nameError">You should write a name.</span>
                            }

                            <div className="create__left--editor">
                                <input
                                    type="file"
                                    placeholder="Upload media"
                                    className="create__left--editor--images"
                                    ref={iconRef}
                                    onChange={handleFileChange}
                                />

                                {communityIconError === true &&
                                    <span className="create__left--iconError">You should choose an icon.</span>
                                }

                                <textarea
                                    name="Textarea"
                                    id="Textarea"
                                    placeholder="Short description"
                                    className="create__left--editor--text"
                                    ref={shortDescriptionRef}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setShortCommunityDescription(e.target.value)}
                                />

                                {shortCommunityDescriptionError === true &&
                                    <span className="create__left--shortCommunityDescriptionError">You should write a short description.</span>
                                }

                                <textarea
                                    name="Textarea"
                                    id="Textarea"
                                    placeholder="Long description"
                                    className="create__left--editor--text"
                                    ref={longDescriptionRef}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setLongCommunityDescription(e.target.value)}
                                />

                                {longCommunityDescriptionError === true &&
                                    <span className="create__left--longCommunityDescriptionError">You should write a long description.</span>
                                }
                            </div>
                        </>
                    )
                }
            </div>

            <div className="create__right" />
        </div>
    )
}