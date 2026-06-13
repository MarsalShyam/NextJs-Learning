
import { getProducts } from "@/prisma-db"
import { ProductDetails } from "./product-details";


export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

export default async function ProductDBPage({searchParams}:{searchParams:Promise<{query?:string}>}) {

    const {query} =await searchParams;
    const products: Product[] = await getProducts(query);
    //Here only data fetching is happening

    return(
        <ProductDetails products={products}/>
    )
}
