import { useContext } from "react";
import { UserContext } from "../UserContext.js";

export default function Context_Home(){
    const user = useContext(UserContext)
    return(
        <>
        <p>page name</p>
        <h1>Name : {user.name}</h1>
        <h2>Age: {user.age}</h2>
        </>
    )
}