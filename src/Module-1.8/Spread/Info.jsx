import { Fragment } from "react";

export default function Info({name,location,age}) {
    return (
        <Fragment>
            <section>
                <h2>Name: {name}</h2>
                <p>Location: {location}</p>
                <p>Age: {age}</p>
            </section>
        </Fragment>
    )
}