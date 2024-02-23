import { Fragment } from "react";

export default function Avatar({image}){
    return(
        <Fragment>
            <img src={image} alt="" />
        </Fragment>
    )
}