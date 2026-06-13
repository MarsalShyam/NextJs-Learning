
import { getProducts } from "@/prisma-db"
import { ProductDetails } from "./product-details";


export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

export default async function ProductDBPage() {
    const products: Product[] = await getProducts();
    //Here only data fetching is happening
    return(
        <ProductDetails products={products}/>
    )
}