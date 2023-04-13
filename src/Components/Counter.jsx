import userEvent from "@testing-library/user-event";
import { useState } from "react";

export default function Counter (){
const [number,setNumber] = useState(0)

return(
  <>
  <h2>{number}</h2>
  <figure>
  <button onClick = {()=>setNumber(number + 100)}>+</button>
  <button onClick = {()=>setNumber(0)}>Reset</button> 
  <button onClick = {()=>setNumber(number - 100)}>-</button>
  </figure>
  </>
  )
}