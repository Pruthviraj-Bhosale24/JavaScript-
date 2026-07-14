import { createContext,useContext } from "react";

let mycontext = createContext();

export default function Context(){
    let user = "pruthvi"
    return <mycontext.Provider value={user}>
        <Fun1/>
    </mycontext.Provider>
}

function Fun1(){
    return <Fun2/>
}

function Fun2(){
    let userName = useContext(mycontext)
    return <h1>Hello {userName}.....</h1>
}