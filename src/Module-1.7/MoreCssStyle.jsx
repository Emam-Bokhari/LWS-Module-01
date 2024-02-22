import { Fragment } from "react";

const person = {
    name: "Gregorio Y. Zara",
    theme: {
        backgroundColor: "black",
        color: "pink"
    }
}

export default function MoreCssStyle() {
    
    return (
        <Fragment>
            <div style={person.theme}>
                <h1>{person.name} Todos</h1>
                <img src="https://placehold.co/300" alt="Placeholder image" />
                <ul>
                    <li>Item-1</li>
                    <li>Item-1</li>
                    <li>Item-1</li>
                </ul>
            </div>
        </Fragment>
    )
}