'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Form from "./components/Form";

const Contact = () => {
  const [data, setData] = useState(null);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://grzejniki.ergotree.pl/wp-json/wp/v2/pages/190"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
          <section className="Contact">

                   <div className="ContactDetails">
                <div className="ContactDetailsWrapper">
                    {data && (
                        <>
                          <h2 className="ContactMainHeading h2">{data.title.rendered}</h2>
                
                          {data.acf.contacts.map((contact, index) => (
                                                
                            <div className="ContactDetailsSmall">
                            <div className="Image">
                              <Image
                                src={contact.icon.sizes.thumbnail}
                                alt={contact.icon.alt}
                                width={contact.icon.width}
                                height={contact.icon.height}
                              />
                              </div>
                              <div className="details">
                              <h6 className="ContactParagraphDetails h6">{contact.bold}</h6>
                              <p>{contact.grey}</p>
                              </div>
                            </div>
                          ))}
                
                          <p className="companyAdress">{data.acf.bottom_grey}</p>
                        </>
                      )}
                  
                    
                
                </div>
            </div>
            <Form />
            </section>
    </>
  );
};

export default Contact;
