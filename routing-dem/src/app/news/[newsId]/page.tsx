import Link from 'next/link'
import {use} from 'react'

export default function News({
    params, searchParams,}:{
        params:Promise<{newsId:string}>;
        searchParams:Promise<{lang?:"en"|"es"|"fr"}>;
    }
){
    const {newsId}=use(params);
    const {lang="en"}=use(searchParams);
    return(
        
        <div>
            <h1>News article {newsId}</h1>
            <p>Reading in {lang}</p>

            <div>
                <Link href={`/news/${newsId}?lang=en`}>English</Link>
                <Link href={`/news/${newsId}?lang=es`}>Spanish</Link>
                <Link href={`/news/${newsId}?lang=fr`}>French</Link>
            </div>
        </div>
    )
}