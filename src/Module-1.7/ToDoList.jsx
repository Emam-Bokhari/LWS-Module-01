import { Fragment } from "react"

let today=new Date()

function formateDay(){
    const day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    const dayIndex=today.getDay()
    return day[dayIndex]
}

export default function ToDoList(){
    return(
        <Fragment>
            <div>
                <p>Today is :{formateDay()}</p>
            </div>
        </Fragment>
    )
}