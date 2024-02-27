import { Fragment } from "react";

// e.g: pure component
function Cup({ guest }) {
    return (
        <Fragment>
            <ul>
                <li>Tea cup for guest # {guest}</li>
            </ul>
        </Fragment>
    )
}

export default function SolveImpure() {
    return (
        <Fragment>
            <Cup guest={1} />
            <Cup guest={2} />
            <Cup guest={3} />
        </Fragment>
    )
}