import { Fragment } from "react";

export default function CssStyle() {
    return (
        <Fragment>
            <ul style={
                {
                    backgroundColor: "purple",
                    padding: "8px",
                    color: "white",
                    fontSize: "18px"
                }
            } >
                <li>Item-1</li>
                <li>Item-2</li>
                <li>Item-3</li>
            </ul>
        </Fragment>
    )
}