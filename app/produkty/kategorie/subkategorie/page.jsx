'use client';
import React from "react";

import breadcrumb from "../../../../public/static/Produkt/breadcrumb.svg"; 
import Subfoto1 from "../../../../public/static/Produkt/Subkategorie/kat1.png";
import Subfoto2 from "../../../../public/static/Produkt/Subkategorie/kat2.png";
import Header from "../../../../public/static/Produkt/Subkategorie/HeaderSection.png";


import MostPopular from "@/app/HomePage/MostPopular/page";
import Image from "next/image";



const ProductOneCategorySub = () => {
  
    const breakpoints = {
      600: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1150: {
        slidesPerView: 4,
      },
    };
  
  
  
    return (
      <>

        <section className="HeroCategorySub">
          <Image className="HeroSubImageWrapper" src={Header} />
          <div className="location">
            <p className="body-small-smaller"> <a href="/">Strona Główna</a></p>
            <span> <Image src={breadcrumb} alt="Logo" /></span>
            <p className="body-small-smaller"><a href="/productS-all-category">Produkty</a></p>
            <span> <Image src={breadcrumb} alt="Logo" /></span>
            <p className="body-small-smaller">Grzejniki żeliwne</p>
            <span> <Image src={breadcrumb} alt="Logo" /></span>
            <p className="body-small-smaller">Emmeline</p>
          </div>
        </section>
        <section className="HeroCategorySubProduct">
          <div className="wrapper-product"><Image src={Subfoto1} alt="Subfoto1" /></div>
          <div className="wrapper-product"><Image src={Subfoto2} alt="Subfoto2" /></div>
        </section>
      <MostPopular />

      </>
    );
  };
  
  export default ProductOneCategorySub; 
