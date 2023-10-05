'use client';

import React, { useState, useEffect } from "react";

import smallproduct1 from "../../public/static/ProductPage/Product-photo-page.png";
import smallproduct2 from "../../public/static/ProductPage/Product-photo-page2.png";

import Product from "../../public/static/ProductPage/ProductPagePhoto.png";
import car from "../../public/static/ProductPage/cardeliver.svg";
import telephone from "../../public/static/ProductPage/telephonepage.svg";
import post from "../../public/static/ProductPage/postproductpage.svg";
import Image from "next/image";

import ProductPageFlorence from "./components/ProductPageFlorence";

import FutureSection from "../HomePage/FutureSection/page";
import ProductPagePopup from "./components/ProductPagePopUp";


const ProductPageSingle = () => {



  return (
    <>
    <section className="ProductPage">
  <div className="ProductPageWrapper">
    <div className="ImageWrapper">
      <Image className="ProductPageImage" src={Product} />
      <Image className="ProductPageImage" src={Product} />
      <Image className="ProductPageImage" src={Product} />
      <Image className="ProductPageImage" src={Product} />
      <Image className="ProductPageImage" src={Product} />
      <div className="wrapper-small-product">
        <Image src={smallproduct1} />
        <Image src={smallproduct2} />
      </div>
    </div>

    <div className="InfoWrapper">
      <div className="StickyPosition">
        <div>
          <div className="MainInfo">
            <h1 className="h1-smaller">Grace</h1>
            <h6 className="h6-600-second">4 KOLUMNY</h6>
          </div>
          <h6 className="MainDesc h6-300">
            Grace to unowocześnienie żeliwnego grzejnika kolumnowego. Charakterystyczne ryflowania i pochylone stopy tworzą wyjątkową i uderzającą całość. Ich design doskonale pasuje zarówno do nowoczesnych wnętrz, jak i obiektów z epoki, dodając im wyjątkowego uroku i stylu. Nie da się przejść obok niego niewzruszonym.
          </h6>
          <h6 className="h6-300">Dostępna wysokość</h6>
          <div className="WrapperSquare">
            <div  className="size-parent">
              <h6 className="h6-400-second">1040</h6>
            </div>
            <div className="size-parent">
              <h6 className="h6-400-second">480</h6>
            </div>
            <div className="size-parent">
              <h6 className="body-small-smaller-second">640</h6>
            </div>
            <div className="size-parent">
              <h6 className="h6-400-second">740</h6>
            </div>
          </div>
          <div className="MainPrize "> <h4 className="h4">400 zł</h4></div>
          <button  type="button" data-button="true">
            <div>
              <span className="button-text-big">Skontaktuj się</span>
            </div>
          </button>
          <div>
            <div className="delivery  ">
            <Image src={car} alt="Logo" />
               <p className="body-small-smaller-second">Dostawa: 6 - 8 tygodni</p></div>
          </div>
          <div className="ContactDetailsWrapper">
            
              <div className="delivery"><Image src={telephone} alt="Logo" />
<p className="body-small-smaller-second">123123123</p></div>
              <div className="delivery"><Image src={post} alt="Logo" /><p className="body-small-smaller-second">test@test.pl</p></div>
            </div>
          </div>
        </div>
      </div>
      </div>
  
</section>
<FutureSection />
<ProductPageFlorence />
<ProductPagePopup />
    </>
  );
};

export default ProductPageSingle;

