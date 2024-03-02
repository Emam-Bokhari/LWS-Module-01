import { Fragment } from "react";

export default function TodoList() {

    function formateDay() {
        const today = new Date()
        const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        const dayIndex = today.getDay()
        return day[dayIndex]
    }

    return (
        <Fragment>
            <p>
                Today is: {formateDay()}
            </p>
        </Fragment>
    )
}