// javascript
/* const div=document.createElement("div")

div.innerText="Hello World!"

document.getElementById("root").appendChild(div) */

// react
/* const myElement=React.createElement("div",null,"Hello World!")

ReactDOM.createRoot(document.getElementById("root")).render(myElement) */

// react jsx syntex
const myElement=(
    <div>
        <p>
            Hello World!
        </p>
    </div>
)

ReactDOM.createRoot(document.getElementById("root")).render(myElement)
