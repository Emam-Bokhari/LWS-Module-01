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
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
    }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
    }];

    const chemistry = people.filter(chemist => chemist.profession === "chemist")

    const itemList = chemistry.map(person => (
        <li key={person.id}>{person.name}</li>
    ))



    return (
        <Fragment>
            <ul>
                <li>{itemList}</li>
            </ul>
        </Fragment>
    )
}