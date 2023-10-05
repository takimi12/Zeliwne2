import Opinion from "./Opinion/page";
import Featured from "./Featured/page";
import Renovation from "./Renovation/page";
import FutureSection from "./FutureSection/page";
import Inspirattion from "./Inspiration/page";
import MostPopular from "./MostPopular/page";
import Hero from "./Hero/page";

export default function HomeLayout() {
    return (
        <> 
            <Hero />  
            <MostPopular />
            <Inspirattion />
            <FutureSection />
            <Renovation />
            <Opinion />
            <Featured />
        </>              
    );
}