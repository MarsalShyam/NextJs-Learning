import { ImageSlider } from "@/components/ImageSlider";
import {serverSideFunction} from "@/utils/server-utils";
// import { clientSideFunction } from "@/utils/client-utils";
export default function ServerRoutePage(){
    
    const result=serverSideFunction();
    // const clientResult=clientSideFunction(); //not allowed, because this function is "client-only" that means it's only work with the client side
    return(
        <div>
            <h1>Server Route Page {result}</h1>
            <ImageSlider/>
        </div>
    
)
}