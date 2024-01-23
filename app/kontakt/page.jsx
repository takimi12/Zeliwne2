'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Form from "../components/Form/Form";
import styles from "./kontakt.module.scss";

const Contact = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://grzejniki2.ergotree.pl/wp-json/wp/v2/pages/190"
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
      <section className={styles.contact}>
        <div className={styles.contactDetails}>
          <div className={styles.contactDetailsWrapper}>
            {data && (
              <>
                <h2 className="ContactMainHeading ">{data.title.rendered}</h2>

                {data.acf.contacts.map((contact, index) => (
                  <div className={styles.contactDetailsSmall} key={index}>
                    <div className="Image">
                      <img
                        src={contact.icon.sizes.thumbnail}
                        alt="contact icon"
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="details">
                      <h6 className={styles.ContactParagraphDetails}>{contact.bold}</h6>
                      <p>{contact.grey}</p>
                    </div>
                  </div>
                ))}

                <p className={styles.companyAdress}>{data.acf.bottom_grey}</p>
              </>
            )}
          </div>
        </div>
        <div className={styles.contactSection}>
          <Form formProp={1} />
        </div>
      </section>
    </>
  );
};

export default Contact;
