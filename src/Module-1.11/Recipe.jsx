import { Fragment } from "react";
// e.g: pure component
function Drinkers({ drinks }) {
    return (
        <ul>
            <li>Boild {drinks} cup of water.</li>
            <li>Drinks {drinks * 0.5} cup of tea.</li>
            <li>Drinks {drinks * 0.5} cup of juice.</li>
        </ul>
    )
}

export default function Recipe() {
    return (
        <Fragment>
            <Drinkers drinks={2} />
        </Fragment>
    )
}