import { Fragment } from "react";

export default function Avatar(props){
    console.log(props)
    const {person,image}=props
    return (
        <Fragment>
            <img src={image} alt="Placeholder image" />
            <h2>Name: {person.name}</h2>
            <p>Location: {person.location}</p>

        </Fragment>
    )
}