import Link from "next/link";
import Heading from "../components/heading";

export default function HomePage(){
   
   console.log("Home page renderering");
   
    return(
        <>
                <Heading>Indie Games</Heading>
                    <p className="pb-3">
                        Only the best indie games, reviewed by you. 
                    </p>
                    <div className=" bg-white border w-80  rounded shadow hover:shadow-xl sm:w-full">
                <Link href="/reviews/Stardew Valley"
                className="flex flex-col sm:flex-row">
                <img src="/images/stardew-valley.jpg" alt="Stardew Valley" 
       width="320" height="180"
       className=" rounded-1 sm:rounded-1  sm:rounded-r-none"
       />       <h2 className=" font-semibold text-center font-orbitron py-1  sm:px-2">Stardrew Valley</h2>
                    
                </Link>
            </div>
        </>
    );
}