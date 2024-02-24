import { Fragment } from "react";

function Item({ name, isPacked }) {
    if(isPacked){
        return null 
    }
    return <li>{name}</li>

}

export default function ConditionalRendering() {
    return (
        <Fragment>
            <ul>
                <Item isPacked={false} name={"Item-1"} />
                <Item isPacked={true} name={"Item-2"} />
                <Item isPacked={false} name={"Item-3"} />
                <Item isPacked={true} name={"Item-4"} />
                <Item isPacked={true} name={"Item-5"} />
            </ul>
        </Fragment>
    )
}