import React from "react";
import TodoContext from "./todoContext";

const TodoContextProvider = ({children})=>
    {
        const [todoCon,setTodoCon] = React.useState([]);


        return (
            <TodoContext.Provider value = {{todoCon,setTodoCon}}>
                {children}
            </TodoContext.Provider>
        )
    }

    export default TodoContextProvider;