// js

/* const p=document.createElement("p")

p.innerText="Hello World!"

document.getElementById("root").appendChild(p) */

// check react, reactdom

// console.log(React)
// console.log(ReactDOM)


// react
// const myElement=React.createElement("div",null,"Hello World!")

// ReactDOM.createRoot(document.getElementById("root")).render(myElement)

// jsx - react
const myElement=(
    <div>
        <p>
            Hello World!
        </p>
    </div>
)

ReactDOM.createRoot(document.getElementById("root")).render(myElement)
