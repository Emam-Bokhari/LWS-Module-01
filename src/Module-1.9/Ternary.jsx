import { Fragment } from "react";

function Item({ isPacked, name }) {
    return <li>{isPacked ? <del>{name + "-true"}</del> : name}</li>


}

export default function Ternary() {
    return (
        <Fragment>
            <ul>
                <Item isPacked={true} name={"Item"} />
                <Item isPacked={true} name={"Item"} />
                <Item isPacked={false} name={"Item"} />
                <Item isPacked={true} name={"Item"} />
                <Item isPacked={false} name={"Item"} />
            </ul>
        </Fragment>
    )
}