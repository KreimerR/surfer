import users from "./users"

import photographyIcon from "../assets/images/photography.jpg"
import cookingIcon from "../assets/images/cooking.jpg"
import gamingIcon from "../assets/images/gaming.jpg"
import fitnessIcon from "../assets/images/fitness.jpg"
import readingIcon from "../assets/images/reading.jpg"
import travelIcon from "../assets/images/travel.jpg"
import musicIcon from "../assets/images/music.jpg"
import paintingIcon from "../assets/images/painting.jpg"
import gardeningIcon from "../assets/images/gardening.jpg"
import hikingIcon from "../assets/images/hiking.jpg"
import writingIcon from "../assets/images/writing.jpg"
import techIcon from "../assets/images/technology.jpg"

function findUser(tag: string) {
    return users.find((user) => user.tag === tag)
}

const communities = [
    {
        name: "Photography",
        icon: photographyIcon,
        followers: [
            findUser("@michaelsmith"),
            findUser("@annapetrov"),
            findUser("@davidlee"),
        ],
        shortDescription: "Capturing Moments in Focus",
        longDescription:
            "A space for enthusiasts of photography to share techniques, experiences, and insights — from portraits to landscapes, film to digital. Capture life through your lens.",
        author: findUser("@michaelsmith"),
    },
    {
        name: "Cooking",
        icon: cookingIcon,
        followers: [
            findUser("@michaelsmith"),
            findUser("@sophiajohnson"),
            findUser("@emilydavis"),
        ],
        shortDescription: "The Art of Flavor",
        longDescription:
            "A community for culinary passion — share recipes, discuss ingredients, and explore cuisines from around the world. From home cooking to haute cuisine, food brings us together.",
        author: findUser("@sophiajohnson"),
    },
    {
        name: "Gaming",
        icon: gamingIcon,
        followers: [findUser("@michaelsmith"), findUser("@danielwilson")],
        shortDescription: "Play, Compete, and Connect",
        longDescription:
            "For gamers of all kinds — whether console, PC, or mobile. Discuss strategies, share highlights, and connect over the joy of virtual worlds and challenges.",
        author: findUser("@michaelsmith"),
    },
    {
        name: "Fitness",
        icon: fitnessIcon,
        followers: [
            findUser("@michaelsmith"),
            findUser("@jamesbrown"),
            findUser("@oliviamiller"),
        ],
        shortDescription: "Stronger Every Day",
        longDescription:
            "Join a community dedicated to health, strength, and wellness. Share workout routines, nutrition tips, and motivation to stay active and thrive.",
        author: findUser("@michaelsmith"),
    },
    {
        name: "Reading",
        icon: readingIcon,
        followers: [
            findUser("@michaelsmith"),
            findUser("@sophiajohnson"),
            findUser("@williammartinez"),
        ],
        shortDescription: "Where Stories Come Alive",
        longDescription:
            "A haven for readers and literary lovers. Discuss books, authors, and genres, and discover your next great read among fellow book enthusiasts.",
        author: findUser("@sophiajohnson"),
    },
    {
        name: "Travel",
        icon: travelIcon,
        followers: [
            findUser("@michaelsmith"),
            findUser("@mariagarcia"),
            findUser("@emilydavis"),
        ],
        shortDescription: "Explore the World Anew",
        longDescription:
            "Share your travel experiences, tips, and dreams — from urban adventures to remote escapes. Connect with those who find meaning in exploration.",
        author: findUser("@emilydavis"),
    },
    {
        name: "Music",
        icon: musicIcon,
        followers: [findUser("@michaelsmith"), findUser("@annapetrov")],
        shortDescription: "The Rhythm of Life",
        longDescription:
            "Discuss everything from classical to contemporary, instruments to production. For musicians, listeners, and all who live by melody and harmony.",
        author: findUser("@annapetrov"),
    },
    {
        name: "Painting",
        icon: paintingIcon,
        followers: [
            findUser("@michaelsmith"),
            findUser("@oliviamiller"),
            findUser("@davidlee"),
        ],
        shortDescription: "Color Beyond Words",
        longDescription:
            "A creative community for painters and art lovers. Share your work, techniques, and inspiration — from oils and acrylics to digital art.",
        author: findUser("@oliviamiller"),
    },
    {
        name: "Gardening",
        icon: gardeningIcon,
        followers: [findUser("@michaelsmith"), findUser("@annapetrov")],
        shortDescription: "Cultivating Life and Beauty",
        longDescription:
            "Whether you tend a balcony garden or a large yard, share advice, progress, and the simple joy of nurturing life from soil to bloom.",
        author: findUser("@annapetrov"),
    },
    {
        name: "Hiking",
        icon: hikingIcon,
        followers: [findUser("@michaelsmith"), findUser("@danielwilson")],
        shortDescription: "Step into Nature",
        longDescription:
            "For those who find peace and purpose in the outdoors. Share trails, tips, and experiences that celebrate the beauty of nature and the journey itself.",
        author: findUser("@danielwilson"),
    },
    {
        name: "Writing",
        icon: writingIcon,
        followers: [
            findUser("@michaelsmith"),
            findUser("@williammartinez"),
            findUser("@mariagarcia"),
        ],
        shortDescription: "The Power of Words",
        longDescription:
            "A space for writers and storytellers. Exchange ideas, critique works, and discuss the craft — from poetry and fiction to essays and scripts.",
        author: findUser("@mariagarcia"),
    },
    {
        name: "Technology",
        icon: techIcon,
        followers: [
            findUser("@michaelsmith"),
            findUser("@jamesbrown"),
            findUser("@sophiajohnson"),
        ],
        shortDescription: "Innovate. Create. Evolve.",
        longDescription:
            "A community for tech enthusiasts and professionals to discuss trends, innovations, and ideas shaping the digital world — from AI to startups.",
        author: findUser("@jamesbrown"),
    },
]

export default communities
