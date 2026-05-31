"use client"
import {useRouter} from "next/navigation";
import {startTransition} from "react";


export default function ErrorBoundary({error,reset}:{error:Error,reset:()=>void}){
    const router=useRouter();
    const reload=()=>{
        startTransition(()=>{
            router.refresh(); //use to come back-home page
            reset();
        })
    }
    return(
        <>
        <div>Error in loading products</div>
        <button onClick={()=>reset()}>Try again</button>
        </>
        
    ) 
}