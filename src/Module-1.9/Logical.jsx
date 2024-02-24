import { Fragment } from "react";

function Item({ isPacked, name }) {
    return <li>{name} {isPacked && name + "-"}</li>
}

export default function Logical() {
    return (
        <Fragment>
            <ul>
                <Item isPacked={true} name={"Item"} />
                <Item isPacked={false} name={"List"} />
                <Item isPacked={false} name={"List"} />
                <Item isPacked={true} name={"Item"} />
                <Item isPacked={true} name={"Item"} />
            </ul>
        </Fragment>
    )
}