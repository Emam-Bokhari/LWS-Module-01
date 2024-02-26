import { Fragment } from "react"

export default function Filter() {

    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
    }, {
        name: 'Percy Lavon Julian',
        profession: 'chemist',
    }, {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
    }];

    const chemistry = people.filter(person => person.profession === "chemist")

    const itemList=chemistry.map(chemist=>(
        <li>{chemist.name}</li>
    ))


    return (
        <Fragment>
            <ul>
                <li>{itemList}</li>
            </ul>
        </Fragment>
    )
}