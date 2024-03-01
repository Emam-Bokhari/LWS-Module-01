import { Fragment } from "react";

function Image() {
    return (
        <Fragment>
            <img src="https://placehold.co/300" alt="" />
        </Fragment>
    )
}

export default function Gallery() {
    return (
        <Fragment>
            <h2>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nulla.
            </h2>
            <Image />
        </Fragment>
    )
}