import React from "react";
import Display from "./Display";
import Input from "./Input";

function Screen()
{
    return(
    <div style={{display : "flex"}}>
        <Input/>
        <Display/>
    </div>
    )
}

export default Screen;