import communities from "./communities"
import users from "./users"

import icon1 from "../assets/images/icon1.jpg"
import icon3 from "../assets/images/icon3.jpg"
import icon4 from "../assets/images/icon4.jpg"
import icon5 from "../assets/images/icon5.jpg"

function findCommunity(communityName: string) {
    return communities.find((community) => community.name === communityName)
}

function findUser(tag: string) {
    return users.find((user) => user.tag === tag)
}

const posts = [
    {
        community: findCommunity("Photography"),
        author: findUser("@michaelsmith"),
        date: new Date().toLocaleString(),
        text: "Photography is my passion!",
        image1: icon1,
        image2: icon3,
        fullText:
            "Capturing moments and emotions through a lens is one of the most fulfilling experiences.",
        upvotes: [findUser("@annapetrov"), findUser("@davidlee")],
        downvotes: [],
        comments: [
            {
                user: findUser("@emilydavis"),
                date: new Date().toLocaleString(),
                text: "Beautifully said! What camera do you use?",
                upvotes: [findUser("@michaelsmith")],
                downvotes: [],
                comments: [],
                bookmarks: [],
            },
        ],
        bookmarks: [findUser("@sophiajohnson")],
    },
    {
        community: findCommunity("Photography"),
        author: findUser("@annapetrov"),
        date: new Date().toLocaleString(),
        text: "Tried street photography today — loved the challenge!",
        image1: icon4,
        upvotes: [findUser("@davidlee")],
        downvotes: [],
        comments: [],
        bookmarks: [],
    },

    {
        community: findCommunity("Cooking"),
        author: findUser("@sophiajohnson"),
        date: new Date().toLocaleString(),
        text: "Bonjour from my kitchen!",
        fullText:
            "Tried making croissants this morning — the smell of butter and coffee is pure magic.",
        upvotes: [findUser("@emilydavis"), findUser("@michaelsmith")],
        downvotes: [],
        comments: [
            {
                user: findUser("@michaelsmith"),
                date: new Date().toLocaleString(),
                text: "That sounds delicious! Recipe please?",
                upvotes: [],
                downvotes: [],
                comments: [],
                bookmarks: [],
            },
        ],
        bookmarks: [findUser("@oliviamiller")],
    },
    {
        community: findCommunity("Cooking"),
        author: findUser("@emilydavis"),
        date: new Date().toLocaleString(),
        text: "Freshly baked sourdough and coffee… heaven.",
        upvotes: [findUser("@mariagarcia")],
        downvotes: [],
        comments: [],
        bookmarks: [],
    },

    {
        community: findCommunity("Gaming"),
        author: findUser("@michaelsmith"),
        date: new Date().toLocaleString(),
        text: "Just finished a 12-hour gaming marathon — totally worth it!",
        upvotes: [findUser("@danielwilson")],
        downvotes: [],
        comments: [],
        bookmarks: [],
    },
    {
        community: findCommunity("Gaming"),
        author: findUser("@danielwilson"),
        date: new Date().toLocaleString(),
        text: "Joined an eSports tournament this weekend 🎮",
        upvotes: [findUser("@michaelsmith"), findUser("@williammartinez")],
        downvotes: [],
        comments: [],
        bookmarks: [],
    },

    {
        community: findCommunity("Fitness"),
        author: findUser("@michaelsmith"),
        date: new Date().toLocaleString(),
        text: "Feeling great after a morning run!",
        upvotes: [findUser("@jamesbrown")],
        downvotes: [],
        comments: [],
        bookmarks: [findUser("@annapetrov")],
    },
    {
        community: findCommunity("Fitness"),
        author: findUser("@jamesbrown"),
        date: new Date().toLocaleString(),
        text: "Consistency is the key — never skip leg day!",
        upvotes: [findUser("@oliviamiller"), findUser("@davidlee")],
        downvotes: [],
        comments: [],
        bookmarks: [],
    },

    {
        community: findCommunity("Reading"),
        author: findUser("@williammartinez"),
        date: new Date().toLocaleString(),
        text: "Just finished reading '1984' — a timeless masterpiece.",
        upvotes: [findUser("@sophiajohnson")],
        downvotes: [],
        comments: [],
        bookmarks: [],
    },

    {
        community: findCommunity("Travel"),
        author: findUser("@mariagarcia"),
        date: new Date().toLocaleString(),
        text: "Hiking through the Alps was unforgettable.",
        upvotes: [findUser("@emilydavis"), findUser("@davidlee")],
        downvotes: [],
        comments: [],
        bookmarks: [],
    },

    {
        community: findCommunity("Music"),
        author: findUser("@annapetrov"),
        date: new Date().toLocaleString(),
        text: "Listened to a live jazz concert last night — pure bliss!",
        upvotes: [findUser("@michaelsmith")],
        downvotes: [],
        comments: [],
        bookmarks: [],
    },

    {
        community: findCommunity("Painting"),
        author: findUser("@oliviamiller"),
        date: new Date().toLocaleString(),
        text: "Tried watercolor landscapes today ❤️",
        upvotes: [findUser("@davidlee"), findUser("@michaelsmith")],
        downvotes: [],
        comments: [],
        bookmarks: [],
    },

    {
        community: findCommunity("Gardening"),
        author: findUser("@michaelsmith"),
        date: new Date().toLocaleString(),
        text: "My balcony garden is finally blooming!",
        upvotes: [],
        downvotes: [],
        comments: [],
        bookmarks: [],
    },

    {
        community: findCommunity("Hiking"),
        author: findUser("@danielwilson"),
        date: new Date().toLocaleString(),
        text: "Explored a new mountain trail today — breathtaking views!",
        upvotes: [findUser("@michaelsmith")],
        downvotes: [],
        comments: [],
        bookmarks: [],
    },

    {
        community: findCommunity("Writing"),
        author: findUser("@williammartinez"),
        date: new Date().toLocaleString(),
        text: "Started a short story inspired by autumn.",
        image1: icon5,
        upvotes: [findUser("@mariagarcia")],
        downvotes: [],
        comments: [],
        bookmarks: [],
    },

    {
        community: findCommunity("Technology"),
        author: findUser("@sophiajohnson"),
        date: new Date().toLocaleString(),
        text: "Experimenting with a new AI tool — fascinating results!",
        upvotes: [findUser("@jamesbrown")],
        downvotes: [],
        comments: [],
        bookmarks: [],
    },
]

export default posts
