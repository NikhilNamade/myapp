
import { useState} from "react"
import './App.css';
import Child from "./Child"
function App() {
const [name,setname]  = useState("Nikhil")
const [age,setage] = useState(20)
const[cre,setcre] = useState({name:"",age:""})
let i = name.length
const handle = ()=>{
  setcre({name:name,age:age+1});
  setage(age+1)
  setname(name.slice(0,i-1))
}
return(
  <>
  <h1>{name}</h1>
  <h2>{age}</h2>
  <button onClick={handle}>Submit</button>
  <Child name={cre.name} age={cre.age}/>
  </>
)
}

export default App;
