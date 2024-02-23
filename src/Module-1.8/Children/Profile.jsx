import { Fragment } from "react";

export default function Profile({ children }) {
    console.log(children)
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}