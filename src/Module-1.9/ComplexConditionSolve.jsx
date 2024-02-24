import { Fragment } from "react";





function Item({ isPacked, name }) {
    let itemComponent = ""

    if (isPacked) {
        itemComponent = name + "2"
    } else {
        itemComponent = name
    }

    return <li>{itemComponent}</li>
}

export default function ComplexConditionSolve() {
    return (
        <Fragment>
            <ul>
                <Item isPacked={true} name="true" />
                <Item isPacked={false} name="false" />
                <Item isPacked={true} name="true" />
                <Item isPacked={false} name="false" />
            </ul>
        </Fragment>
    )
}