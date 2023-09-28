import Link from "next/link";
import Heading from "../../components/heading";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";



 



export const metadata = {
    title: "Reviews",
};

export default async function ReviewPage(searchParams){
    const page = parsePageParam(searchParams.page);
    const reviews = await getReviews(6);



    return(
        <>
        <Heading>Reviews</Heading>
        <div className="flex gap-2 pb-3">
           <Link href={`/reviews?page=${page + - 1}`}>&lt;</Link>
          <span>Page {page}</span>
           <Link href={`/reviews?page=${page + 1}`}>&lt;</Link>
            </div>
        <ul className="flex flex-row  flex-wrap gap-3">
            {reviews.map((review, index) => ( 
            <li key={review.slug}
            className=" bg-white border w-80  rounded shadow hover:shadow-xl">
                <Link href={`/reviews/${review.slug}`}>
                <Image src={review.image} alt="Hollow Knight" priority={index === 0}
       width="320" height="180"
       className="mb-2 rounded-1"
       />       
       <h2 className="py-1 font-semibold text-center font-orbitron">
         {review.title}
       </h2>
                    
                </Link>
            </li>
            ))}
        </ul>
    </>
    );
}

function parsePageParam(paramValue) {
    if (!paramValue) {
        const page = parseInt(paramValue);
        if (isFinite(page) && page > 0) {
            return page;
        }
    }
    return 1;
}