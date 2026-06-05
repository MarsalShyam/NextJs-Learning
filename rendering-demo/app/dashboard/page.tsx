'use client'
import {useState} from "react";


export default function DashboardPage() {
    console.log("dashboard client comp");  //one time this page behave like server comp-> after refresh it behave like client comp as usual
    //It doesn't happen in production 
    const [name,setName]=useState("");
    return (<div>
        <h1>Dashboard Page</h1>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <p>Hello, {name}!</p>
    </div>
        
    );
}
