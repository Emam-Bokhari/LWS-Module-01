import { Fragment } from "react";

export default function Map() {
    const names = [
        "Abdul Alim",
        "Abulal",
        "Zorgiea",
        "Seniva",
        "Z. Zorgiea"
    ]

    const itemList = names.map(person => (
        <li>{person}</li>
    ))

    return (
        <Fragment>
            <ul>
                <div>{itemList}</div>
            </ul>
        </Fragment>
    )
}