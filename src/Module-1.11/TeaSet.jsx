import { Fragment } from "react";

// e.g: impure component
let guest = 0

function Cup() {
    guest += 1
    return (
        <Fragment>
            <h2>Tea cup for guest #{guest}</h2>
        </Fragment>
    )
}

export default function TeaSet() {
    return (
        <Fragment>
            <Cup />
            <Cup />
            <Cup />
        </Fragment>
    )
}