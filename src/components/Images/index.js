import images from "../../assets/images"

function Images({ src, alt, ...props }) {
    const fallback = images.logo

    return (
        <img src={src || fallback} alt={alt} {...props}></img>
    )
}

export default Images