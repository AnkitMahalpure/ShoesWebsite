import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../redux/apiCalls"

export default function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const handleClick = (e) =>{
        e.preventDefault()
        login(dispatch,{username,password})
    }
  return (
    <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <input  style={{padding:"10px",marginBottom:"20px"}} type="text" placeholder="UserName" onChange={e=>setUsername(e.target.value)}/>
      <input style={{padding:"10px",marginBottom:"20px"}} type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
      <button onClick={handleClick} style={{padding:"10px",width:"100px"}}>Login</button>
    </div>
  )
}
