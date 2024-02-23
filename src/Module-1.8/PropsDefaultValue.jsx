import { Fragment } from "react";

export default function PropsDefaultValue({ person, image, age = 30 }) {
    const size = image.size || "100px"
    return (
        <Fragment>
            <h2>Name: {person.name}</h2>
            <p>Location: {person.location}</p>
            <img style={{ width: size }} src={image.img} alt="" />
            <p>Size: {image.size}</p>
            <p>Age: {age}</p>
        </Fragment>
    )
}