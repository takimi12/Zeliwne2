import HeaderSectionBusiness from "../../public/static/Business/headerbg.png";
import React from "react";
import ForBusinessSingle from "./components/SingleBusines.jsx";
import Image from "next/image";


const ForBusiness = () => {

    return (
        <>

        <section className="HeroBusiness">
            <Image className="HeroBusinesImageWrapper" src={HeaderSectionBusiness} />

        </section>
        <section className="ForBusiness">
            <div className="ForBusinessTitleText">
                <h3 className="MainHeading h3">Oferta dla biznesu</h3>
                <p className="MainParagraph big-text">Are incentivize speed point social beforehand marginalised. Hill unpack breakout disband price get eco-system. Anyway food adoption before shelf-ware meeting driver's today. </p>
            </div>
        </section>
       <ForBusinessSingle />
       

        </>
    );
  };
  
  export default ForBusiness;
   