
import { Counter } from "./counter";

// because it is client, here including meta is not allow
//keep it server comp and move clint side logic in other page
export const metadata={
    title:"Counter",
    description:"it is counter",
}

export default function CounterPage(){
    
    return(
        <Counter/>
    )
}