import { Fragment } from "react";

export default function MoreCssStyle() {
    const person = {
        name: "Gorgia Z. Saliviya",
        theme: {
            backgroundColor: "purple",
            color: "white",
            padding: "8px",
            borderRadius:"8px"

        }
    }
    return (
        <Fragment>
            <div>
                <h2>Name: {person.name}</h2>
                <img src="https://placehold.co/300" alt="" />
                <ul style={person.theme} >
                    <li>Item-1</li>
                    <li>Item-2</li>
                    <li>Item-3</li>

                </ul>
            </div>
        </Fragment>
    )
}