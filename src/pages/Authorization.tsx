import type { UserType, PagesType } from "../types"

import { useState, useRef } from "react"

type Props = {
    usersData: UserType[]
    setUsersData: React.Dispatch<React.SetStateAction<UserType[]>>
    setCurrentUser: React.Dispatch<React.SetStateAction<UserType | undefined>>
    setCurrentPage: React.Dispatch<React.SetStateAction<PagesType>>
}

export default function Authorization({
    usersData,
    setUsersData,
    setCurrentUser,
    setCurrentPage
}: Props) {
    const [type, setType] = useState<"Log In" | "Sign Up">("Log In")
    const [userName, setUserName] = useState<string>("")
    const [userUsername, setUserUsername] = useState<string>("")
    const [userPassword, setUserPassword] = useState<string>("")
    const [userIcon, setUserIcon] = useState<string | undefined>(undefined)
    const [usernameError, setUsernameError] = useState<boolean>(false)
    const [passwordError, setPasswordError] = useState<boolean>(false)
    const [nameError, setNameError] = useState<boolean>(false)
    const [iconError, setIconError] = useState<boolean>(false)
    const [usernameIncorrect, setUsernameIncorrect] = useState<boolean>(false)
    const [passwordIncorrect, setPasswordIncorrect] = useState<boolean>(false)
    const [usernameIncorrectWriting, setUsernameIncorrectWriting] = useState<boolean>(false)
    const [usernameAlreadyExists, setUsernameAlreadyExists] = useState<boolean>(false)

    const usernameFirstRef = useRef<HTMLDivElement | null>(null)
    const usernameSecondRef = useRef<HTMLInputElement | null>(null)
    const passwordFirstRef = useRef<HTMLDivElement | null>(null)
    const passwordSecondRef = useRef<HTMLInputElement | null>(null)
    const nameFirstRef = useRef<HTMLDivElement | null>(null)
    const nameSecondRef = useRef<HTMLInputElement | null>(null)
    const iconFirstRef = useRef<HTMLDivElement | null>(null)
    const iconSecondRef = useRef<HTMLInputElement | null>(null)

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            const reader = new FileReader()

            reader.onload = () => {
                setUserIcon(reader.result as string)
            }

            reader.readAsDataURL(file)
        }
    }

    function changeType(currentType: string) {
        if (currentType === "Log In") {
            setNameError(false)
            setUsernameError(false)
            setPasswordError(false)
            setUsernameIncorrect(false)
            setPasswordIncorrect(false)
            setIconError(false)
            setUserName("")
            setUserUsername("")
            setUserPassword("")
            setUserIcon(undefined)
            setUsernameIncorrectWriting(false)
            setUsernameAlreadyExists(false)
            setType("Log In")
        } else if (currentType === "Sign Up") {
            setNameError(false)
            setUsernameError(false)
            setPasswordError(false)
            setUsernameIncorrect(false)
            setPasswordIncorrect(false)
            setIconError(false)
            setUserName("")
            setUserUsername("")
            setUserPassword("")
            setUserIcon(undefined)
            setUsernameIncorrectWriting(false)
            setUsernameAlreadyExists(false)
            setType("Sign Up")
        }
    }

    function signUp() {
        setNameError(false)
        setUsernameError(false)
        setPasswordError(false)
        setIconError(false)
        setUsernameIncorrectWriting(false)
        setUsernameAlreadyExists(false)

        nameFirstRef.current !== null && nameFirstRef.current.classList.remove("authorization__form--nameContainer--name-wrong")
        nameSecondRef.current !== null && nameSecondRef.current.classList.remove("authorization__form--nameContainer--name--input-wrong")
        usernameFirstRef.current !== null && usernameFirstRef.current.classList.remove("authorization__form--usernameContainer--username-wrong")
        usernameSecondRef.current !== null && usernameSecondRef.current.classList.remove("authorization__form--usernameContainer--username--input-wrong")
        passwordFirstRef.current !== null && passwordFirstRef.current.classList.remove("authorization__form--passwordContainer--password-wrong")
        passwordSecondRef.current !== null && passwordSecondRef.current.classList.remove("authorization__form--passwordContainer--password--input-wrong")
        iconFirstRef.current !== null && iconFirstRef.current.classList.remove("authorization__form--iconContainer--icon-wrong")
        iconSecondRef.current !== null && iconSecondRef.current.classList.remove("authorization__form--iconContainer--icon--input-wrong")

        if (
            type === "Sign Up" &&
            userName === "" &&
            userUsername === "" &&
            userPassword === "" &&
            userIcon === undefined
        ) {
            nameFirstRef.current !== null && nameFirstRef.current.classList.add("authorization__form--nameContainer--name-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.add("authorization__form--nameContainer--name--input-wrong")
            usernameFirstRef.current !== null && usernameFirstRef.current.classList.add("authorization__form--usernameContainer--username-wrong")
            usernameSecondRef.current !== null && usernameSecondRef.current.classList.add("authorization__form--usernameContainer--username--input-wrong")
            passwordFirstRef.current !== null && passwordFirstRef.current.classList.add("authorization__form--passwordContainer--password-wrong")
            passwordSecondRef.current !== null && passwordSecondRef.current.classList.add("authorization__form--passwordContainer--password--input-wrong")
            iconFirstRef.current !== null && iconFirstRef.current.classList.add("authorization__form--iconContainer--icon-wrong")
            iconSecondRef.current !== null && iconSecondRef.current.classList.add("authorization__form--iconContainer--icon--input-wrong")

            setNameError(true)
            setUsernameError(true)
            setPasswordError(true)
            setIconError(true)
            return
        } else if (
            type === "Sign Up" &&
            userUsername === "" &&
            userPassword === "" &&
            userIcon === undefined
        ) {
            usernameFirstRef.current !== null && usernameFirstRef.current.classList.add("authorization__form--usernameContainer--username-wrong")
            usernameSecondRef.current !== null && usernameSecondRef.current.classList.add("authorization__form--usernameContainer--username--input-wrong")
            passwordFirstRef.current !== null && passwordFirstRef.current.classList.add("authorization__form--passwordContainer--password-wrong")
            passwordSecondRef.current !== null && passwordSecondRef.current.classList.add("authorization__form--passwordContainer--password--input-wrong")
            iconFirstRef.current !== null && iconFirstRef.current.classList.add("authorization__form--iconContainer--icon-wrong")
            iconSecondRef.current !== null && iconSecondRef.current.classList.add("authorization__form--iconContainer--icon--input-wrong")

            setUsernameError(true)
            setPasswordError(true)
            setIconError(true)
            return
        } else if (
            type === "Sign Up" &&
            userName === "" &&
            userPassword === "" &&
            userIcon === undefined
        ) {
            nameFirstRef.current !== null && nameFirstRef.current.classList.add("authorization__form--nameContainer--name-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.add("authorization__form--nameContainer--name--input-wrong")
            passwordFirstRef.current !== null && passwordFirstRef.current.classList.add("authorization__form--passwordContainer--password-wrong")
            passwordSecondRef.current !== null && passwordSecondRef.current.classList.add("authorization__form--passwordContainer--password--input-wrong")
            iconFirstRef.current !== null && iconFirstRef.current.classList.add("authorization__form--iconContainer--icon-wrong")
            iconSecondRef.current !== null && iconSecondRef.current.classList.add("authorization__form--iconContainer--icon--input-wrong")

            setNameError(true)
            setPasswordError(true)
            setIconError(true)
            return
        } else if (
            type === "Sign Up" &&
            userName === "" &&
            userUsername === "" &&
            userIcon === undefined
        ) {
            nameFirstRef.current !== null && nameFirstRef.current.classList.add("authorization__form--nameContainer--name-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.add("authorization__form--nameContainer--name--input-wrong")
            usernameFirstRef.current !== null && usernameFirstRef.current.classList.add("authorization__form--usernameContainer--username-wrong")
            usernameSecondRef.current !== null && usernameSecondRef.current.classList.add("authorization__form--usernameContainer--username--input-wrong")
            iconFirstRef.current !== null && iconFirstRef.current.classList.add("authorization__form--iconContainer--icon-wrong")
            iconSecondRef.current !== null && iconSecondRef.current.classList.add("authorization__form--iconContainer--icon--input-wrong")

            setNameError(true)
            setUsernameError(true)
            setIconError(true)
            return
        } else if (
            type === "Sign Up" &&
            userName === "" &&
            userUsername === "" &&
            userPassword === ""
        ) {
            nameFirstRef.current !== null && nameFirstRef.current.classList.add("authorization__form--nameContainer--name-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.add("authorization__form--nameContainer--name--input-wrong")
            usernameFirstRef.current !== null && usernameFirstRef.current.classList.add("authorization__form--usernameContainer--username-wrong")
            usernameSecondRef.current !== null && usernameSecondRef.current.classList.add("authorization__form--usernameContainer--username--input-wrong")
            passwordFirstRef.current !== null && passwordFirstRef.current.classList.add("authorization__form--passwordContainer--password-wrong")
            passwordSecondRef.current !== null && passwordSecondRef.current.classList.add("authorization__form--passwordContainer--password--input-wrong")

            setNameError(true)
            setUsernameError(true)
            setPasswordError(true)
            return
        } else if (
            type === "Sign Up" &&
            userPassword === "" &&
            userIcon === undefined
        ) {
            passwordFirstRef.current !== null && passwordFirstRef.current.classList.add("authorization__form--passwordContainer--password-wrong")
            passwordSecondRef.current !== null && passwordSecondRef.current.classList.add("authorization__form--passwordContainer--password--input-wrong")
            iconFirstRef.current !== null && iconFirstRef.current.classList.add("authorization__form--iconContainer--icon-wrong")
            iconSecondRef.current !== null && iconSecondRef.current.classList.add("authorization__form--iconContainer--icon--input-wrong")

            setPasswordError(true)
            setIconError(true)
            return
        } else if (
            type === "Sign Up" &&
            userUsername === "" &&
            userIcon === undefined
        ) {
            usernameFirstRef.current !== null && usernameFirstRef.current.classList.add("authorization__form--usernameContainer--username-wrong")
            usernameSecondRef.current !== null && usernameSecondRef.current.classList.add("authorization__form--usernameContainer--username--input-wrong")
            iconFirstRef.current !== null && iconFirstRef.current.classList.add("authorization__form--iconContainer--icon-wrong")
            iconSecondRef.current !== null && iconSecondRef.current.classList.add("authorization__form--iconContainer--icon--input-wrong")

            setUsernameError(true)
            setIconError(true)
            return
        } else if (
            type === "Sign Up" &&
            userName === "" &&
            userIcon === undefined
        ) {
            nameFirstRef.current !== null && nameFirstRef.current.classList.add("authorization__form--nameContainer--name-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.add("authorization__form--nameContainer--name--input-wrong")
            iconFirstRef.current !== null && iconFirstRef.current.classList.add("authorization__form--iconContainer--icon-wrong")
            iconSecondRef.current !== null && iconSecondRef.current.classList.add("authorization__form--iconContainer--icon--input-wrong")

            setNameError(true)
            setIconError(true)
            return
        } else if (
            type === "Sign Up" &&
            userName === "" &&
            userUsername === ""
        ) {
            nameFirstRef.current !== null && nameFirstRef.current.classList.add("authorization__form--nameContainer--name-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.add("authorization__form--nameContainer--name--input-wrong")
            usernameFirstRef.current !== null && usernameFirstRef.current.classList.add("authorization__form--usernameContainer--username-wrong")
            usernameSecondRef.current !== null && usernameSecondRef.current.classList.add("authorization__form--usernameContainer--username--input-wrong")

            setNameError(true)
            setUsernameError(true)
            return
        } else if (
            type === "Sign Up" &&
            userName === "" &&
            userPassword === ""
        ) {
            nameFirstRef.current !== null && nameFirstRef.current.classList.add("authorization__form--nameContainer--name-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.add("authorization__form--nameContainer--name--input-wrong")
            passwordFirstRef.current !== null && passwordFirstRef.current.classList.add("authorization__form--passwordContainer--password-wrong")
            passwordSecondRef.current !== null && passwordSecondRef.current.classList.add("authorization__form--passwordContainer--password--input-wrong")

            setNameError(true)
            setPasswordError(true)
            return
        } else if (
            type === "Sign Up" &&
            userUsername === "" &&
            userPassword === ""
        ) {
            usernameFirstRef.current !== null && usernameFirstRef.current.classList.add("authorization__form--usernameContainer--username-wrong")
            usernameSecondRef.current !== null && usernameSecondRef.current.classList.add("authorization__form--usernameContainer--username--input-wrong")
            passwordFirstRef.current !== null && passwordFirstRef.current.classList.add("authorization__form--passwordContainer--password-wrong")
            passwordSecondRef.current !== null && passwordSecondRef.current.classList.add("authorization__form--passwordContainer--password--input-wrong")

            setUsernameError(true)
            setPasswordError(true)
            return
        } else if (
            type === "Sign Up" &&
            userUsername === "" &&
            userIcon === undefined
        ) {
            usernameFirstRef.current !== null && usernameFirstRef.current.classList.add("authorization__form--usernameContainer--username-wrong")
            usernameSecondRef.current !== null && usernameSecondRef.current.classList.add("authorization__form--usernameContainer--username--input-wrong")
            iconFirstRef.current !== null && iconFirstRef.current.classList.add("authorization__form--iconContainer--icon-wrong")
            iconSecondRef.current !== null && iconSecondRef.current.classList.add("authorization__form--iconContainer--icon--input-wrong")

            setUsernameError(true)
            setIconError(true)
            return
        } else if (
            type === "Sign Up" &&
            userName === ""
        ) {
            nameFirstRef.current !== null && nameFirstRef.current.classList.add("authorization__form--nameContainer--name-wrong")
            nameSecondRef.current !== null && nameSecondRef.current.classList.add("authorization__form--nameContainer--name--input-wrong")
            setNameError(true)
            return
        } else if (
            type === "Sign Up" &&
            userUsername === ""
        ) {
            usernameFirstRef.current !== null && usernameFirstRef.current.classList.add("authorization__form--usernameContainer--username-wrong")
            usernameSecondRef.current !== null && usernameSecondRef.current.classList.add("authorization__form--usernameContainer--username--input-wrong")
            setUsernameError(true)
            return
        } else if (
            type === "Sign Up" &&
            userPassword === ""
        ) {
            passwordFirstRef.current !== null && passwordFirstRef.current.classList.add("authorization__form--passwordContainer--password-wrong")
            passwordSecondRef.current !== null && passwordSecondRef.current.classList.add("authorization__form--passwordContainer--password--input-wrong")
            setPasswordError(true)
            return
        } else if (
            type === "Sign Up" &&
            userIcon === undefined
        ) {
            iconFirstRef.current !== null && iconFirstRef.current.classList.add("authorization__form--iconContainer--icon-wrong")
            iconSecondRef.current !== null && iconSecondRef.current.classList.add("authorization__form--iconContainer--icon--input-wrong")
            setIconError(true)
            return
        }

        if (
            type === "Sign Up" &&
            userUsername[0] !== "@"
        ) {
            usernameFirstRef.current !== null && usernameFirstRef.current.classList.add("authorization__form--usernameContainer--username-wrong")
            usernameSecondRef.current !== null && usernameSecondRef.current.classList.add("authorization__form--usernameContainer--username--input-wrong")

            setUsernameIncorrectWriting(true)
            return
        }

        if (
            type === "Sign Up" &&
            usersData.find((user: UserType) => user.tag === userUsername)?.tag === userUsername
        ) {
            usernameFirstRef.current !== null && usernameFirstRef.current.classList.add("authorization__form--usernameContainer--username-wrong")
            usernameSecondRef.current !== null && usernameSecondRef.current.classList.add("authorization__form--usernameContainer--username--input-wrong")

            setUsernameAlreadyExists(true)
            return
        }

        setCurrentUser({
            name: userName,
            tag: userUsername,
            password: userPassword,
            icon: userIcon,
        })
        setUsersData((prev: UserType[]) => [...prev, {
            name: userName,
            tag: userUsername,
            password: userPassword,
            icon: userIcon,
        }])
        setCurrentPage("All")
    }

    function logIn() {
        setUsernameError(false)
        setPasswordError(false)
        setUsernameIncorrect(false)
        setPasswordIncorrect(false)

        usernameFirstRef.current !== null && usernameFirstRef.current.classList.remove("authorization__form--usernameContainer--username-wrong")
        usernameSecondRef.current !== null && usernameSecondRef.current.classList.remove("authorization__form--usernameContainer--username--input-wrong")
        passwordFirstRef.current !== null && passwordFirstRef.current.classList.remove("authorization__form--passwordContainer--password-wrong")
        passwordSecondRef.current !== null && passwordSecondRef.current.classList.remove("authorization__form--passwordContainer--password--input-wrong")

        if (
            type === "Log In" &&
            userUsername === "" &&
            userPassword === ""
        ) {
            usernameFirstRef.current !== null && usernameFirstRef.current.classList.add("authorization__form--usernameContainer--username-wrong")
            usernameSecondRef.current !== null && usernameSecondRef.current.classList.add("authorization__form--usernameContainer--username--input-wrong")
            passwordFirstRef.current !== null && passwordFirstRef.current.classList.add("authorization__form--passwordContainer--password-wrong")
            passwordSecondRef.current !== null && passwordSecondRef.current.classList.add("authorization__form--passwordContainer--password--input-wrong")


            setUsernameError(true)
            setPasswordError(true)
            return
        } else if (
            type === "Log In" &&
            userUsername === ""
        ) {
            usernameFirstRef.current !== null && usernameFirstRef.current.classList.add("authorization__form--usernameContainer--username-wrong")
            usernameSecondRef.current !== null && usernameSecondRef.current.classList.add("authorization__form--usernameContainer--username--input-wrong")

            setUsernameError(true)
            return
        } else if (
            type === "Log In" &&
            userPassword === ""
        ) {
            passwordFirstRef.current !== null && passwordFirstRef.current.classList.add("authorization__form--passwordContainer--password-wrong")
            passwordSecondRef.current !== null && passwordSecondRef.current.classList.add("authorization__form--passwordContainer--password--input-wrong")

            setPasswordError(true)
            return
        }

        usersData.map((user: UserType) => {
            if (user.tag === userUsername && user.password === userPassword) {
                setCurrentUser({
                    name: user.name,
                    tag: user.tag,
                    password: user.password,
                    icon: user.icon,
                })
                setCurrentPage("Home")
            } else if (userUsername !== user.tag && userPassword !== user.password) {
                usernameFirstRef.current !== null && usernameFirstRef.current.classList.add("authorization__form--usernameContainer--username-wrong")
                usernameSecondRef.current !== null && usernameSecondRef.current.classList.add("authorization__form--usernameContainer--username--input-wrong")
                passwordFirstRef.current !== null && passwordFirstRef.current.classList.add("authorization__form--passwordContainer--password-wrong")
                passwordSecondRef.current !== null && passwordSecondRef.current.classList.add("authorization__form--passwordContainer--password--input-wrong")

                setUsernameIncorrect(true)
                setPasswordIncorrect(true)
                return
            } else if (userUsername !== user.tag) {
                usernameFirstRef.current !== null && usernameFirstRef.current.classList.add("authorization__form--usernameContainer--username-wrong")
                usernameSecondRef.current !== null && usernameSecondRef.current.classList.add("authorization__form--usernameContainer--username--input-wrong")

                setUsernameIncorrect(true)
                return
            } else if (userPassword !== user.password) {
                passwordFirstRef.current !== null && passwordFirstRef.current.classList.add("authorization__form--passwordContainer--password-wrong")
                passwordSecondRef.current !== null && passwordSecondRef.current.classList.add("authorization__form--passwordContainer--password--input-wrong")

                setPasswordIncorrect(true)
                return
            }
        })
    }

    return (
        <div className="authorization">
            <div className="authorization__form">
                <h2 className="authorization__form--type">
                    {type === "Log In" ? "Log In" : "Sign Up"}
                </h2>

                {type === "Log In"
                    ? (
                        <>
                            <div className="authorization__form--usernameContainer">
                                <div className="authorization__form--usernameContainer--username" ref={usernameFirstRef}>
                                    <input
                                        type="text"
                                        className="authorization__form--usernameContainer--username--input"
                                        placeholder="Username"
                                        ref={usernameSecondRef}
                                        onChange={(e) => setUserUsername(e.target.value)}
                                    />
                                </div>

                                {usernameError === true &&
                                    <span className="authorization__form--usernameContainer--usernameError">You should write a username.</span>
                                }

                                {usernameIncorrect === true &&
                                    <span className="authorization__form--usernameContainer--usernameIncorrect">Username is incorrect.</span>
                                }
                            </div>

                            <div className="authorization__form--passwordContainer">
                                <div className="authorization__form--passwordContainer--password" ref={passwordFirstRef}>
                                    <input
                                        type="password"
                                        className="authorization__form--passwordContainer--password--input"
                                        placeholder="Password"
                                        ref={passwordSecondRef}
                                        onChange={(e) => setUserPassword(e.target.value)}
                                    />
                                </div>

                                {passwordError === true &&
                                    <span className="authorization__form--passwordContainer--passwordError">You should write a password.</span>
                                }

                                {passwordIncorrect === true &&
                                    <span className="authorization__form--passwordContainer--passwordIncorrect">Password is incorrect.</span>
                                }
                            </div>

                        </>
                    )
                    : (
                        <>
                            <div className="authorization__form--nameContainer">
                                <div className="authorization__form--nameContainer--name" ref={nameFirstRef}>
                                    <input
                                        type="text"
                                        className="authorization__form--nameContainer--name--input"
                                        placeholder="Name"
                                        ref={nameSecondRef}
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                </div>

                                {nameError === true &&
                                    <span className="authorization__form--nameContainer--nameError">You should write a name.</span>
                                }
                            </div>

                            <div className="authorization__form--usernameContainer">
                                <div className="authorization__form--usernameContainer--username" ref={usernameFirstRef}>
                                    <input
                                        type="text"
                                        className="authorization__form--usernameContainer--username--input"
                                        placeholder="Username"
                                        ref={usernameSecondRef}
                                        onChange={(e) => setUserUsername(e.target.value)}
                                    />
                                </div>

                                {usernameError === true &&
                                    <span className="authorization__form--usernameContainer--usernameError">You should write a username.</span>
                                }

                                {usernameIncorrectWriting === true &&
                                    <span className="authorization__form--usernameContainer--usernameIncorrectWriting">You should include "@" at the beginning of your username.</span>
                                }

                                {usernameAlreadyExists === true &&
                                    <span className="authorization__form--usernameContainer--usernameAlreadyExists">User with this username already exists.</span>
                                }
                            </div>

                            <div className="authorization__form--passwordContainer">
                                <div className="authorization__form--passwordContainer--password" ref={passwordFirstRef}>
                                    <input
                                        type="password"
                                        className="authorization__form--passwordContainer--password--input"
                                        placeholder="Password"
                                        ref={passwordSecondRef}
                                        onChange={(e) => setUserPassword(e.target.value)}
                                    />
                                </div>

                                {passwordError === true &&
                                    <span className="authorization__form--passwordContainer--passwordError">You should write a password.</span>
                                }
                            </div>

                            <div className="authorization--iconContainer">
                                <div className="authorization__form--iconContainer--icon" ref={iconFirstRef}>
                                    <input
                                        type="file"
                                        placeholder="Upload icon"
                                        className="authorization__form--iconContainer--icon--input"
                                        ref={iconSecondRef}
                                        onChange={handleFileChange}
                                    />
                                </div>

                                {iconError === true &&
                                    <span className="authorization__form--iconContainer--iconError">You should choose an icon.</span>
                                }
                            </div>

                        </>
                    )
                }

                <span className="authorization__form--changeType">
                    {type === "Log In" ? "New to Surfer? " : "Already a user? "}
                    {type === "Log In"
                        ? (
                            <span
                                className="authorization__form--changeType--button"
                                onClick={() => changeType("Sign Up")}
                            >
                                Sign Up
                            </span>
                        )
                        : (
                            <span
                                className="authorization__form--changeType--button"
                                onClick={() => changeType("Log In")}
                            >
                                Log In
                            </span>
                        )
                    }

                </span>

                <button
                    className="authorization__form--button"
                    onClick={type === "Log In" ? logIn : signUp}
                >
                    {type === "Log In" ? "Log In" : "Sign Up"}
                </button>
            </div>
        </div>
    )
}