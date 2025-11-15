import leftArrow from "../assets/icons/left-arrow.png"
import rightArrow from "../assets/icons/right-arrow.png"
import close from "../assets/icons/close.png"

type Props = {
    numOfImages: () => number
    imageLink: () => string | undefined
    setCurrentImage: React.Dispatch<React.SetStateAction<number>>
    setImagePreview: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ImagePreview({
    numOfImages,
    imageLink,
    setCurrentImage,
    setImagePreview
}: Props) {
    return (
        <div className="imagePreview">
            <img
                src={close}
                alt="Close"
                className="imagePreview__close"
                onClick={() => setImagePreview((prev: boolean) => !prev)}
            />
            {numOfImages() > 1 ? (
                <>
                    <img
                        src={leftArrow}
                        alt="Left arrow"
                        className="imagePreview__leftArrow"
                        onClick={() => setCurrentImage((prev: number) => prev === 1 ? numOfImages() : prev - 1)}
                    />

                    <img
                        src={rightArrow}
                        alt="Right arrow"
                        className="imagePreview__rightArrow"
                        onClick={() => setCurrentImage((prev: number) => prev === numOfImages() ? 1 : prev + 1)}
                    />
                </>
            ) : null}
            <img
                src={imageLink()}
                alt="Image"
                className="imagePreview__image"
            />
            <div
                className="imagePreview__blackScreen"
                onClick={() => setImagePreview((prev: boolean) => !prev)}
            />
        </div>
    )
}