export type UserType = {
    name: string
    tag: string
    password: string
    icon?: string
}

export type CommunityType = {
    name: string
    icon?: string
    followers: (UserType | undefined)[]
    shortDescription: string
    longDescription: string
    author: UserType | undefined
}

export type PostType = {
    community: CommunityType | undefined
    author: UserType | undefined
    date: string
    text: string
    image1?: string
    image2?: string
    image3?: string
    image4?: string
    image5?: string
    image6?: string
    image7?: string
    image8?: string
    image9?: string
    fullText?: string
    upvotes: (UserType | undefined)[]
    downvotes: (UserType | undefined)[]
    comments: {
        user: UserType | undefined
        date: string
        text: string
        upvotes: (UserType | undefined)[]
        downvotes: (UserType | undefined)[]
        comments: {
            user: UserType | undefined
            date: string
            text: string
            upvotes: (UserType | undefined)[]
            downvotes: (UserType | undefined)[]
            bookmarks: (UserType | undefined)[]
        }[]
        bookmarks: (UserType | undefined)[]
    }[]
    bookmarks: (UserType | undefined)[]
}

export type PagesType =
    | "Home"
    | "All"
    | "Community"
    | "PostDetails"
    | "Bookmarks"
    | "Create"
    | "Profile"
    | "Authorization"

export type CommentType = {
    user: UserType | undefined
    date: string
    text: string
    upvotes: (UserType | undefined)[]
    downvotes: (UserType | undefined)[]
    comments: {
        user: UserType | undefined
        date: string
        text: string
        upvotes: (UserType | undefined)[]
        downvotes: (UserType | undefined)[]
        bookmarks: (UserType | undefined)[]
    }[]
    bookmarks: (UserType | undefined)[]
}

export type SubCommentType = {
    user: UserType | undefined
    date: string
    text: string
    upvotes: (UserType | undefined)[]
    downvotes: (UserType | undefined)[]
    bookmarks: (UserType | undefined)[]
}
