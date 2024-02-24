import { Fragment } from "react";

function Item({ isPacked, name }) {

    let itemComponent = ""

    if (isPacked) {
        itemComponent = (
            <div>
                <p>
                    {name + "1"}
                </p>
            </div>
        )
    } else {
        itemComponent = (
            <del>{name}</del>
        )
    }

    return <li>{itemComponent}</li>
}

export default function AddTag() {
    return (
        <Fragment>
            <ul>
                <Item isPacked={false} name={"false"} />
                <Item isPacked={true} name={"true"} />
                <Item isPacked={true} name={"true"} />
            </ul>
        </Fragment>
    )
}