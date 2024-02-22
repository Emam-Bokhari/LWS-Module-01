import { Fragment } from "react";

export default function ConditionalCss() {
    const style1 = {
        backgroundColor: "purple",
        color: "white",
        padding: "10px"
    }

    const style2 = {
        backgroundColor: "gray",
        color: "black",
        padding: "10px"
    }

    const color = "purple"

    let style = ""

    if (color === "purple") {
        style = style1
    } else {
        style = style2
    }

    return (
        <Fragment>
            <ul style={style}>
                <li>Item-1</li>
                <li>Item-1</li>
                <li>Item-1</li>
                <li>Item-1</li>
                <li>Item-1</li>
            </ul>
        </Fragment>
    )
}