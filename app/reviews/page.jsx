import Link from "next/link";
import Heading from "../../components/heading";
import { getReviews } from "@/lib/reviews";

export const metadata = {
    title: "Reviews",
};




export default async function ReviewPage(){
    const reviews = await getReviews();



    return(
        <>
        <Heading>Reviews</Heading>
        <ul className="flex flex-row  flex-wrap gap-3">
            {reviews.map((review) => ( 
            <li key={review.slug}
            className=" bg-white border w-80  rounded shadow hover:shadow-xl">
                <Link href={`/reviews/${review.slug}`}>
                <img src={review.image} alt="Hollow Knight" 
       width="320" height="180"
       className="mb-2 rounded-1"
       />       <h2 className="py-1 font-semibold text-center font-orbitron">
         {review.title}
       </h2>
                    
                </Link>
            </li>
            ))}
        </ul>
    </>
    );
}