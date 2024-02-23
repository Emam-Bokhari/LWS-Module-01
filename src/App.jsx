import { Fragment } from "react"
import PropsDefaultValue from "./Module-1.8/PropsDefaultValue"

export default function App() {
  return (
    <Fragment>
      <PropsDefaultValue person={{ name: "Gorgiea Z. Zebila", location: "USA" }} image={{img:"https://placehold.co/300"}}  />
    </Fragment>
  )
}
