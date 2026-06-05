import {useState} from "react";

export default function AboutPage(){
    const [name,setName]=useState("");
    console.log("About Server Component");
    return(
        <h1>About Page</h1>
    )
}