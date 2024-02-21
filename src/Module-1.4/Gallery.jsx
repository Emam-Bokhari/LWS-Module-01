import { Fragment } from "react"

function Profile() {
    return <img className="w-full" src="https://placehold.co/300" alt="" />
}

function Gallery() {
    return (
        <Fragment>
            <section className=" min-w-[300px] max-w-[500px]">
                <Profile />
                <p className=" text-blue-500 text-justify" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem doloremque libero reiciendis modi repellendus delectus vero cumque. Quae, voluptatum voluptates!</p>
                <Profile />
            </section>
        </Fragment>
    )
}

export default Gallery