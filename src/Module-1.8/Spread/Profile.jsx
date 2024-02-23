import { Fragment } from "react";
import Avatar from "./Avatar";
import Info from "./Info";

export default function Profile(props) {
    return (
        <Fragment>
            <Avatar image={props.image} />
            <Info {...props} />
        </Fragment>
    )
}