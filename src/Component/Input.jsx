import React,{useState,useRef,useContext} from "react";
import TodoContext from "../context/TodoContext";
function Input()
{
   const titleRef = useRef(null);
   const descriptionRef = useRef(null);
   const {setTodoCon,todoCon} = useContext(TodoContext);
   return (
    <div className="input" style={{display : "flex", gap : "1rem", flexDirection:"column",width : "50%",justifyContent : "center",alignItems : "center",backgroundColor : "#FF6868"}}>   
    <h2 style={{fontFamily : "Poppins"}}>Add TODO</h2> 
    <input style={{
       width : "50%",
       height : "2rem",
       borderRadius : "10px",
       fontFamily : "Poppins"
    }} ref = {titleRef} type="text" placeholder="title"/>
    
    <textarea style={{
       width : "50%",
       height : "10rem",
       borderRadius : "10px"
    }} ref = {descriptionRef} type="text" placeholder="description"/>
    
    <button className="submitBtn" style={{marginTop : "1.6rem",
  width : "10rem",padding : "0.5rem",borderRadius : "10px",backgroundColor : "#99BC85",border : "none",boxShadow : "1px 1px 5px"}} 
  onClick={()=>
  {
    const todoTitle = titleRef.current.value;
    const todoDescription = descriptionRef.current.value; 
    const todoObject = {todoTitle,todoDescription};
    setTodoCon((current)=>([...current,todoObject]));
  }}>
  Submit</button>
    </div>
   )
}

export default Input; 