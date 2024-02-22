import { Fragment } from "react";

export default function CssStyle() {
    return (
        <Fragment>
            <ul style={
                {
                    backgroundColor: "purple",
                    color: "white",
                    padding:"15px",
                    borderRadius:"10px",
                }
            } >
                <li>Item-1</li>
                <li>Item-1</li>
                <li>Item-1</li>
            </ul>
        </Fragment>
    )
}