import { Fragment } from "react";
import Image from "./Image";
import ImportAlias from "./ImportAlias";

export function Alias() {
    return (
        <Fragment>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquam perspiciatis voluptatibus deserunt, mollitia natus quae necessitatibus fuga iusto error quis incidunt, cupiditate vel odit magnam? Cupiditate aut quasi alias consequuntur vitae. Earum tempore molestias ipsum quis repellat nam excepturi vitae, optio, laboriosam nihil molestiae reiciendis quasi eligendi! Voluptatibus assumenda nemo repellat aliquid consequatur id delectus, voluptates placeat soluta.</p>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatum quam error dolor molestias reiciendis quisquam dolorem provident inventore et.</p>
        </Fragment>
    )
}

export default function Gallery() {
    return (
        <Fragment>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fuga numquam officia sunt voluptate cumque. At dolorem veritatis, eveniet vitae ut id magnam non veniam cumque impedit, numquam, placeat reiciendis?</p>
            <Image />
            <ImportAlias />
        </Fragment>
    )
}