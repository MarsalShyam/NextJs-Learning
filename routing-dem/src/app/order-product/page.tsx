'use client'
//useRouter only works in use client
import {useRouter} from 'next/navigation';
export default function OrderProduct() {
    const router=useRouter();

    const handleClick=()=>{
        console.log("Order Placed");
        // router.push("/");
        router.replace("/");
        //push, replace, refresh, back, forward, prefetch, 
    }; 
    return (
        <>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place Order</button>
        </>
        
    );
}