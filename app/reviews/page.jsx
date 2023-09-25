import Link from "next/link";
import Heading from "../../components/heading";

export default function ReviewPage(){
    return(
        <>
        <Heading>Reviews</Heading>
        <ul className="flex flex-col gap-3">
            <li className=" bg-white border w-80  rounded shadow hover:shadow-xl">
                <Link href="/reviews/hollow-knight">
                <img src="/images/hollow-knight.jpg" alt="Hollow Knight" 
       width="320" height="180"
       className="mb-2 rounded-1"
       />       <h2 className="py-1 font-semibold text-center font-orbitron">Hollow Knight</h2>
                    
                </Link>
            </li>
            <li className=" bg-white border w-80  rounded shadow hover:shadow-xl">
                <Link href="/reviews/stardew-valley">
                <img src="/images/stardew-valley.jpg" alt="Stardew Valley" 
       width="320" height="180"
       className="mb-2 rounded-1"
       />       <h2 className="py-1 font-semibold text-center font-orbitorn">Stardrew Valley</h2>
                    
                </Link>
            </li>
        </ul>
    </>
    );
}