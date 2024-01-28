import React,{useState,useEffect,useContext} from "react";
import TodoContext from "../context/TodoContext";
function Display()
{
  const [color,setColor]=useState("white");
  const [check,setCheck]=useState(false);
  const {todoCon}=useContext(TodoContext);
  const {setTodoCon}=useContext(TodoContext);
  useEffect(()=>{
    if(check)
    setColor("#B7E5B4");
    else 
    setColor("white");  
  },[check]);
  
  if(todoCon.length)
  {return(
  <div className="display" 
  style={
    {display : "flex", 
    gap : "1rem",
    backgroundColor : "#E6A4B4",
    flexDirection:"column",
    width : "50%",
    paddingTop : "2rem",
    alignItems : "center",
    height : "100vh",
    overflow : "auto"
   }}>
  <h2 style={{fontFamily : "Poppins"}}>Your TODOS</h2>

  {  todoCon.map((item)=>
  (
    <div key={item.todoTitle} style = {{width : "90%", backgroundColor : color, padding : "1rem", borderRadius : "10px", position :"relative" }}>
    <h2 style={{marginBottom : "1rem"}}>{item.todoTitle}</h2>
    <p style={{marginBottom : "1rem"}}>{item.todoDescription}</p>
    <p style={{display : "inline", marginRight : "1.5rem"}}>Completed</p>
    <input style={{width : "20px",height : "20px", position : "absolute", bottom : "15px"}} type="checkbox" onClick={()=>
    {
       setCheck((prev)=>(!prev));
    }} />
</div> 
  ))
   
  }
  </div>)}
  else 
  {
      return(<div className="display" 
      style={
        {display : "flex", 
        gap : "1rem",
        backgroundColor : "#E6A4B4",
        flexDirection:"column",
        width : "50%",
        paddingTop : "2rem",
        alignItems : "center",
       height : "100vh"}}>
        <h2>Currently have no todos</h2>
       </div>
        )
  }
}

export default Display;