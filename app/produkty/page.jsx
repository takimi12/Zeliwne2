// 'use client';

// import React, { useEffect, useState } from 'react';
// import styles from './Produkty.module.scss';
// import Link from 'next/link';
// import Series from '../../app/components/series/series.jsx';
// import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';

// const Products = () => {
//   const [categories, setCategories] = useState(null);
//   const [test, setTest] = useState(null);
  
//   console.log( test, 'test');


//   const currentPath = window.location.pathname;
//   let segments = currentPath.split('/').filter(segment => segment !== '');
//   let lastSegment = segments[segments.length - 1].toLowerCase();


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://grzejniki2.ergotree.pl/wp-json/wc/v3/products/categories?per_page=100', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Basic ' + btoa('ck_333c63c1676df66d84322191922b725ba3dc7f1e:cs_85c7bc717de01741a71ad8dc9152986569b62cec')
//           },
//         });
//         const result = await response.json();
//         // Filter categories where parent is equal to 0 and exclude "Bez kategorii"
//         const filteredCategories = result.filter(category => category.parent === 0 && category.name !== "Bez kategorii");
//         setCategories(filteredCategories);



//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);
 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(' https://grzejniki2.ergotree.pl/wp-json/wc/v3/products/397', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Basic ' + btoa('ck_333c63c1676df66d84322191922b725ba3dc7f1e:cs_85c7bc717de01741a71ad8dc9152986569b62cec')
//           },
//         });
//         const result = await response.json();

//         setTest(result)


//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);
 

//   return (
//     <>
//     <section className={styles.breadcrumbs}>
//       <Breadcrumbs lastSegment={lastSegment} />
//       <h4> Produkty </h4>
//       </section>
// <section className={styles.sectionProduct}>
//       {categories && categories.map(category => (

//         <div className={styles.productsWrapper} key={category.id}>
//         <Link href={`/produkty/${category.id}`}>

//           {category.image && category.image.src && (
//             <img src={category.image.src} alt={category.image.alt} className={styles.categoryImage} />
//           )}
//                     <p className='p15six'>{category.name}</p>
//                     </Link>

//         </div>
//       ))}
//       </section>

//     </>
//   );
// };

// export default Products;

// {
//   "id": 397,
//   "name": "Aurora – 2 kolumny",
//   "slug": "aurora-2-kolumny",
//   "permalink": "https://grzejniki2.ergotree.pl/produkt/aurora-2-kolumny/",
//   "date_created": "2023-07-03T15:11:25",
//   "date_created_gmt": "2023-07-03T15:11:25",
//   "date_modified": "2024-01-12T02:04:47",
//   "date_modified_gmt": "2024-01-12T02:04:47",
//   "type": "variable",
//   "status": "publish",
//   "featured": false,
//   "catalog_visibility": "visible",
//   "description": "",
//   "short_description": "",
//   "sku": "",
//   "price": "",
//   "regular_price": "",
//   "sale_price": "",
//   "date_on_sale_from": null,
//   "date_on_sale_from_gmt": null,
//   "date_on_sale_to": null,
//   "date_on_sale_to_gmt": null,
//   "on_sale": false,
//   "purchasable": false,
//   "total_sales": 0,
//   "virtual": false,
//   "downloadable": false,
//   "downloads": [],
//   "download_limit": -1,
//   "download_expiry": -1,
//   "external_url": "",
//   "button_text": "",
//   "tax_status": "taxable",
//   "tax_class": "",
//   "manage_stock": false,
//   "stock_quantity": null,
//   "backorders": "no",
//   "backorders_allowed": false,
//   "backordered": false,
//   "low_stock_amount": null,
//   "sold_individually": false,
//   "weight": "",
//   "dimensions": {
//       "length": "",
//       "width": "",
//       "height": ""
//   },
//   "shipping_required": true,
//   "shipping_taxable": true,
//   "shipping_class": "",
//   "shipping_class_id": 0,
//   "reviews_allowed": false,
//   "average_rating": "0.00",
//   "rating_count": 0,
//   "upsell_ids": [],
//   "cross_sell_ids": [],
//   "parent_id": 0,
//   "purchase_note": "",
//   "categories": [
//       {
//           "id": 63,
//           "name": "Aurora",
//           "slug": "aurora"
//       },
//       {
//           "id": 16,
//           "name": "Grzejniki żeliwne",
//           "slug": "grzejniki-zeliwne"
//       }
//   ],
//   "tags": [
//       {
//           "id": 61,
//           "name": "Aurora",
//           "slug": "aurora"
//       }
//   ],
//   "images": [
//       {
//           "id": 612,
//           "date_created": "2023-08-06T12:34:56",
//           "date_created_gmt": "2023-08-06T12:34:56",
//           "date_modified": "2023-08-06T12:34:56",
//           "date_modified_gmt": "2023-08-06T12:34:56",
//           "src": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/07/grzejnik-zeliwny-aurora-2kolumny-1.png",
//           "name": "grzejnik-zeliwny-aurora-2kolumny-1",
//           "alt": ""
//       },
//       {
//           "id": 614,
//           "date_created": "2023-08-06T12:38:14",
//           "date_created_gmt": "2023-08-06T12:38:14",
//           "date_modified": "2023-08-06T12:38:14",
//           "date_modified_gmt": "2023-08-06T12:38:14",
//           "src": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/07/grzejnik-zeliwny-aurora-2kolumny-2.png",
//           "name": "grzejnik-zeliwny-aurora-2kolumny-2",
//           "alt": ""
//       },
//       {
//           "id": 618,
//           "date_created": "2023-08-06T12:39:02",
//           "date_created_gmt": "2023-08-06T12:39:02",
//           "date_modified": "2023-08-06T12:39:02",
//           "date_modified_gmt": "2023-08-06T12:39:02",
//           "src": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/07/grzejnik-zeliwny-aurora-2kolumny-l1.png",
//           "name": "grzejnik-zeliwny-aurora-2kolumny-l1",
//           "alt": ""
//       },
//       {
//           "id": 617,
//           "date_created": "2023-08-06T12:38:53",
//           "date_created_gmt": "2023-08-06T12:38:53",
//           "date_modified": "2023-08-06T12:38:53",
//           "date_modified_gmt": "2023-08-06T12:38:53",
//           "src": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/07/grzejnik-zeliwny-aurora-2kolumny-l2.png",
//           "name": "grzejnik-zeliwny-aurora-2kolumny-l2",
//           "alt": ""
//       }
//   ],
//   "attributes": [
//       {
//           "id": 1,
//           "name": "Dostępna wysokość",
//           "position": 0,
//           "visible": true,
//           "variation": true,
//           "options": [
//               "470 mm",
//               "670 mm",
//               "870 mm"
//           ]
//       }
//   ],
//   "default_attributes": [],
//   "variations": [
//       639,
//       640,
//       641
//   ],
//   "grouped_products": [],
//   "menu_order": 0,
//   "price_html": "",
//   "related_ids": [
//       521,
//       774,
//       717,
//       733,
//       707
//   ],
//   "meta_data": [
//       {
//           "id": 8208,
//           "key": "short_description",
//           "value": "Tradycyjna i delikatna forma, która podkreśli charakter pomieszczenia."
//       },
//       {
//           "id": 8209,
//           "key": "Series_small_title",
//           "value": "SERIA AURORA"
//       },
//       {
//           "id": 8210,
//           "key": "_Series_small_title",
//           "value": "field_64662bc3b700a"
//       },
//       {
//           "id": 8211,
//           "key": "Series_big_title",
//           "value": "Elegancki i delikatny element wnętrza"
//       },
//       {
//           "id": 8212,
//           "key": "_Series_big_title",
//           "value": "field_64662bccb700b"
//       },
//       {
//           "id": 8213,
//           "key": "Series_description",
//           "value": "Aurora wyróżnia się tradycyjną i delikatną formą, idealną do podkreślenia charakteru pomieszczenia. Grzejniki mają nostalgiczny urok, który sprawia, że doskonale pasują do każdego wnętrza, dodając mu wyrafinowania i elegancji. Prosta forma, efektywność i jakość, czyni je nie tylko funkcjonalnymi, ale także atrakcyjnymi elementami pomieszczenia."
//       },
//       {
//           "id": 8214,
//           "key": "_Series_description",
//           "value": "field_64662bd4b700c"
//       },
//       {
//           "id": 8215,
//           "key": "Series",
//           "value": ""
//       },
//       {
//           "id": 8216,
//           "key": "_Series",
//           "value": "field_64662bb4b7009"
//       },
//       {
//           "id": 8217,
//           "key": "tabs_0_title",
//           "value": "Wykończenia"
//       },
//       {
//           "id": 8218,
//           "key": "_tabs_0_title",
//           "value": "field_64662c9eb700e"
//       },
//       {
//           "id": 8219,
//           "key": "tabs_0_more",
//           "value": "Labore eiusmod aute officia commodo irure quis ut ea ut id commodo veniam id. Dolor laborum ad nulla minim do in in laboris laboris sit ut. Lorem ipsum ut aute dolore in dolore ut fugiat ea laboris in id occaecat nisi occaecat aliqua ut."
//       },
//       {
//           "id": 8220,
//           "key": "_tabs_0_more",
//           "value": "field_64662ca4b700f"
//       },
//       {
//           "id": 8221,
//           "key": "tabs_1_title",
//           "value": "Rodzaje podłączeń"
//       },
//       {
//           "id": 8222,
//           "key": "_tabs_1_title",
//           "value": "field_64662c9eb700e"
//       },
//       {
//           "id": 8223,
//           "key": "tabs_1_more",
//           "value": "Labore eiusmod aute officia commodo irure quis ut ea ut id commodo veniam id. Dolor laborum ad nulla minim do in in laboris laboris sit ut. Lorem ipsum ut aute dolore in dolore ut fugiat ea laboris in id occaecat nisi occaecat aliqua ut."
//       },
//       {
//           "id": 8224,
//           "key": "_tabs_1_more",
//           "value": "field_64662ca4b700f"
//       },
//       {
//           "id": 8225,
//           "key": "tabs_2_title",
//           "value": "Dane techniczne"
//       },
//       {
//           "id": 8226,
//           "key": "_tabs_2_title",
//           "value": "field_64662c9eb700e"
//       },
//       {
//           "id": 8227,
//           "key": "tabs_2_more",
//           "value": "Labore eiusmod aute officia commodo irure quis ut ea ut id commodo veniam id. Dolor laborum ad nulla minim do in in laboris laboris sit ut. Lorem ipsum ut aute dolore in dolore ut fugiat ea laboris in id occaecat nisi occaecat aliqua ut."
//       },
//       {
//           "id": 8228,
//           "key": "_tabs_2_more",
//           "value": "field_64662ca4b700f"
//       },
//       {
//           "id": 8229,
//           "key": "tabs_3_title",
//           "value": "Gwarancja"
//       },
//       {
//           "id": 8230,
//           "key": "_tabs_3_title",
//           "value": "field_64662c9eb700e"
//       },
//       {
//           "id": 8231,
//           "key": "tabs_3_more",
//           "value": "Labore eiusmod aute officia commodo irure quis ut ea ut id commodo veniam id. Dolor laborum ad nulla minim do in in laboris laboris sit ut. Lorem ipsum ut aute dolore in dolore ut fugiat ea laboris in id occaecat nisi occaecat aliqua ut."
//       },
//       {
//           "id": 8232,
//           "key": "_tabs_3_more",
//           "value": "field_64662ca4b700f"
//       },
//       {
//           "id": 8233,
//           "key": "tabs_4_title",
//           "value": "Dostawa"
//       },
//       {
//           "id": 8234,
//           "key": "_tabs_4_title",
//           "value": "field_64662c9eb700e"
//       },
//       {
//           "id": 8235,
//           "key": "tabs_4_more",
//           "value": "Labore eiusmod aute officia commodo irure quis ut ea ut id commodo veniam id. Dolor laborum ad nulla minim do in in laboris laboris sit ut. Lorem ipsum ut aute dolore in dolore ut fugiat ea laboris in id occaecat nisi occaecat aliqua ut."
//       },
//       {
//           "id": 8236,
//           "key": "_tabs_4_more",
//           "value": "field_64662ca4b700f"
//       },
//       {
//           "id": 8237,
//           "key": "tabs",
//           "value": "5"
//       },
//       {
//           "id": 8238,
//           "key": "_tabs",
//           "value": "field_64662c80b700d"
//       },
//       {
//           "id": 8239,
//           "key": "connection_types_0_image",
//           "value": "946"
//       },
//       {
//           "id": 8240,
//           "key": "_connection_types_0_image",
//           "value": "field_64662cceb7011"
//       },
//       {
//           "id": 8241,
//           "key": "connection_types_1_image",
//           "value": "947"
//       },
//       {
//           "id": 8242,
//           "key": "_connection_types_1_image",
//           "value": "field_64662cceb7011"
//       },
//       {
//           "id": 8243,
//           "key": "connection_types_2_image",
//           "value": "948"
//       },
//       {
//           "id": 8244,
//           "key": "_connection_types_2_image",
//           "value": "field_64662cceb7011"
//       },
//       {
//           "id": 8245,
//           "key": "connection_types",
//           "value": "3"
//       },
//       {
//           "id": 8246,
//           "key": "_connection_types",
//           "value": "field_64662cc2b7010"
//       },
//       {
//           "id": 8247,
//           "key": "technical_data_0_title",
//           "value": "Na wejściu"
//       },
//       {
//           "id": 8248,
//           "key": "_technical_data_0_title",
//           "value": "field_64662cf5b7013"
//       },
//       {
//           "id": 8249,
//           "key": "technical_data_0_description",
//           "value": "Labore eiusmod aute officia commodo irure quis ut ea ut id commodo veniam id. Dolor laborum ad nulla minim do in in laboris laboris sit ut. Lorem ipsum ut aute dolore in dolore ut fugiat ea laboris in id occaecat nisi occaecat aliqua ut."
//       },
//       {
//           "id": 8250,
//           "key": "_technical_data_0_description",
//           "value": "field_64662cfdb7014"
//       },
//       {
//           "id": 8251,
//           "key": "technical_data_1_title",
//           "value": "Na wyjściu"
//       },
//       {
//           "id": 8252,
//           "key": "_technical_data_1_title",
//           "value": "field_64662cf5b7013"
//       },
//       {
//           "id": 8253,
//           "key": "technical_data_1_description",
//           "value": "Labore eiusmod aute officia commodo irure quis ut ea ut id commodo veniam id. Dolor laborum ad nulla minim do in in laboris laboris sit ut. Lorem ipsum ut aute dolore in dolore ut fugiat ea laboris in id occaecat nisi occaecat aliqua ut."
//       },
//       {
//           "id": 8254,
//           "key": "_technical_data_1_description",
//           "value": "field_64662cfdb7014"
//       },
//       {
//           "id": 8255,
//           "key": "technical_data_2_title",
//           "value": "Objętość wewnętrzna"
//       },
//       {
//           "id": 8256,
//           "key": "_technical_data_2_title",
//           "value": "field_64662cf5b7013"
//       },
//       {
//           "id": 8257,
//           "key": "technical_data_2_description",
//           "value": "Labore eiusmod aute officia commodo irure quis ut ea ut id commodo veniam id. Dolor laborum ad nulla minim do in in laboris laboris sit ut. Lorem ipsum ut aute dolore in dolore ut fugiat ea laboris in id occaecat nisi occaecat aliqua ut."
//       },
//       {
//           "id": 8258,
//           "key": "_technical_data_2_description",
//           "value": "field_64662cfdb7014"
//       },
//       {
//           "id": 8259,
//           "key": "technical_data_3_title",
//           "value": "Rodzaj materiału"
//       },
//       {
//           "id": 8260,
//           "key": "_technical_data_3_title",
//           "value": "field_64662cf5b7013"
//       },
//       {
//           "id": 8261,
//           "key": "technical_data_3_description",
//           "value": "Labore eiusmod aute officia commodo irure quis ut ea ut id commodo veniam id. Dolor laborum ad nulla minim do in in laboris laboris sit ut. Lorem ipsum ut aute dolore in dolore ut fugiat ea laboris in id occaecat nisi occaecat aliqua ut."
//       },
//       {
//           "id": 8262,
//           "key": "_technical_data_3_description",
//           "value": "field_64662cfdb7014"
//       },
//       {
//           "id": 8263,
//           "key": "technical_data",
//           "value": "4"
//       },
//       {
//           "id": 8264,
//           "key": "_technical_data",
//           "value": "field_64662ce8b7012"
//       },
//       {
//           "id": 8265,
//           "key": "technical_image",
//           "value": "243"
//       },
//       {
//           "id": 8266,
//           "key": "_technical_image",
//           "value": "field_64662d0bb7015"
//       },
//       {
//           "id": 8267,
//           "key": "delivery_description",
//           "value": "Zapewniamy dożywotnią gwarancję na szczelność zestawów i 10 letnią gwarancję na powłokę lakierniczą.*\r\n\r\n* Gwarancja nie obejmuje uszkodzeń mechanicznych z winy użytkownika, jak również odbarwień lub odprysków lakieru spowodowanych długotrwałym działaniem czynników zewnętrznych (atmosferycznych) oraz źle dobranych i stosowanych środków czyszczących i konserwujących."
//       },
//       {
//           "id": 8268,
//           "key": "_delivery_description",
//           "value": "field_64662d37b7017"
//       },
//       {
//           "id": 8269,
//           "key": "delivery_image",
//           "value": "244"
//       },
//       {
//           "id": 8270,
//           "key": "_delivery_image",
//           "value": "field_64662d40b7018"
//       },
//       {
//           "id": 8271,
//           "key": "delivery",
//           "value": ""
//       },
//       {
//           "id": 8272,
//           "key": "_delivery",
//           "value": "field_64662d29b7016"
//       },
//       {
//           "id": 8273,
//           "key": "Series_image",
//           "value": "613"
//       },
//       {
//           "id": 8274,
//           "key": "_Series_image",
//           "value": "field_64662e2a7e58b"
//       },
//       {
//           "id": 8275,
//           "key": "guarantee_pack_description",
//           "value": "Zapewniamy dożywotnią gwarancję na szczelność zestawów i 10 letnią gwarancję na powłokę lakierniczą.*\r\n\r\n* Gwarancja nie obejmuje uszkodzeń mechanicznych z winy użytkownika, jak również odbarwień lub odprysków lakieru spowodowanych długotrwałym działaniem czynników zewnętrznych (atmosferycznych) oraz źle dobranych i stosowanych środków czyszczących i konserwujących."
//       },
//       {
//           "id": 8276,
//           "key": "_guarantee_pack_description",
//           "value": "field_64662f2b1f16d"
//       },
//       {
//           "id": 8277,
//           "key": "guarantee_pack_image",
//           "value": "1369"
//       },
//       {
//           "id": 8278,
//           "key": "_guarantee_pack_image",
//           "value": "field_64662f2b1f16e"
//       },
//       {
//           "id": 8279,
//           "key": "guarantee_pack",
//           "value": ""
//       },
//       {
//           "id": 8280,
//           "key": "_guarantee_pack",
//           "value": "field_64662f2b1f16c"
//       },
//       {
//           "id": 8281,
//           "key": "delivery_pack_description",
//           "value": "Wyróżniamy dwa modele dostaw :"
//       },
//       {
//           "id": 8282,
//           "key": "_delivery_pack_description",
//           "value": "field_64662f67b0f91"
//       },
//       {
//           "id": 8283,
//           "key": "delivery_pack_image",
//           "value": "1368"
//       },
//       {
//           "id": 8284,
//           "key": "_delivery_pack_image",
//           "value": "field_64662f74b0f92"
//       },
//       {
//           "id": 8285,
//           "key": "delivery_pack",
//           "value": ""
//       },
//       {
//           "id": 8286,
//           "key": "_delivery_pack",
//           "value": "field_64662d29b7016"
//       },
//       {
//           "id": 8287,
//           "key": "addon",
//           "value": "2 KOLUMNY"
//       },
//       {
//           "id": 8288,
//           "key": "_addon",
//           "value": "field_64662fc5b9986"
//       },
//       {
//           "id": 8289,
//           "key": "czas_dostawy",
//           "value": "6 - 8 tygodni"
//       },
//       {
//           "id": 8290,
//           "key": "_czas_dostawy",
//           "value": "field_648b2539a2bfa"
//       },
//       {
//           "id": 8291,
//           "key": "wykonczenia_0_title",
//           "value": "Signature series"
//       },
//       {
//           "id": 8292,
//           "key": "_wykonczenia_0_title",
//           "value": "field_648b2c9912649"
//       },
//       {
//           "id": 8293,
//           "key": "wykonczenia_0_description",
//           "value": "Klasyczne wykończenia kolorystyczne, świetnie dopasowane do większości wnętrz"
//       },
//       {
//           "id": 8294,
//           "key": "_wykonczenia_0_description",
//           "value": "field_648b2c9f1264a"
//       },
//       {
//           "id": 8295,
//           "key": "wykonczenia_0_produkt",
//           "value": [
//               "870",
//               "872",
//               "874",
//               "880",
//               "897",
//               "895",
//               "893",
//               "889",
//               "878",
//               "891",
//               "348",
//               "887",
//               "876"
//           ]
//       },
//       {
//           "id": 8296,
//           "key": "_wykonczenia_0_produkt",
//           "value": "field_648b2c051260f"
//       },
//       {
//           "id": 8297,
//           "key": "wykonczenia",
//           "value": "3"
//       },
//       {
//           "id": 8298,
//           "key": "_wykonczenia",
//           "value": "field_648b2bfa1260e"
//       },
//       {
//           "id": 8299,
//           "key": "technical_data_0_values_0_label",
//           "value": "A - Wymiary sekcji noga"
//       },
//       {
//           "id": 8300,
//           "key": "_technical_data_0_values_0_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8301,
//           "key": "technical_data_0_values_0_value",
//           "value": "640mm"
//       },
//       {
//           "id": 8302,
//           "key": "_technical_data_0_values_0_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8303,
//           "key": "technical_data_0_values_1_label",
//           "value": "B - Wymiary sekcji środkowej"
//       },
//       {
//           "id": 8304,
//           "key": "_technical_data_0_values_1_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8305,
//           "key": "technical_data_0_values_1_value",
//           "value": "580mm"
//       },
//       {
//           "id": 8306,
//           "key": "_technical_data_0_values_1_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8307,
//           "key": "technical_data_0_values_2_label",
//           "value": "C - Długość kolumny"
//       },
//       {
//           "id": 8308,
//           "key": "_technical_data_0_values_2_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8309,
//           "key": "technical_data_0_values_2_value",
//           "value": "60,3mm"
//       },
//       {
//           "id": 8310,
//           "key": "_technical_data_0_values_2_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8311,
//           "key": "technical_data_0_values_3_label",
//           "value": "D - Szerokość kolumny"
//       },
//       {
//           "id": 8312,
//           "key": "_technical_data_0_values_3_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8313,
//           "key": "technical_data_0_values_3_value",
//           "value": "89mm"
//       },
//       {
//           "id": 8314,
//           "key": "_technical_data_0_values_3_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8315,
//           "key": "technical_data_0_values_4_label",
//           "value": "E - Dolny wlot od podłogi"
//       },
//       {
//           "id": 8316,
//           "key": "_technical_data_0_values_4_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8317,
//           "key": "technical_data_0_values_4_value",
//           "value": "100mm"
//       },
//       {
//           "id": 8318,
//           "key": "_technical_data_0_values_4_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8319,
//           "key": "technical_data_0_values_5_label",
//           "value": "F - Górny wlot od podłogi"
//       },
//       {
//           "id": 8320,
//           "key": "_technical_data_0_values_5_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8321,
//           "key": "technical_data_0_values_5_value",
//           "value": "600mm"
//       },
//       {
//           "id": 8322,
//           "key": "_technical_data_0_values_5_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8323,
//           "key": "technical_data_0_values_6_label",
//           "value": "G - Środek otworu od boku sekcji"
//       },
//       {
//           "id": 8324,
//           "key": "_technical_data_0_values_6_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8325,
//           "key": "technical_data_0_values_6_value",
//           "value": "45mm"
//       },
//       {
//           "id": 8326,
//           "key": "_technical_data_0_values_6_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8327,
//           "key": "technical_data_0_values",
//           "value": "7"
//       },
//       {
//           "id": 8328,
//           "key": "_technical_data_0_values",
//           "value": "field_648c61c6713a9"
//       },
//       {
//           "id": 8329,
//           "key": "technical_data_1_values_0_label",
//           "value": "A - Wymiary sekcji noga"
//       },
//       {
//           "id": 8330,
//           "key": "_technical_data_1_values_0_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8331,
//           "key": "technical_data_1_values_0_value",
//           "value": "640mm"
//       },
//       {
//           "id": 8332,
//           "key": "_technical_data_1_values_0_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8333,
//           "key": "technical_data_1_values_1_label",
//           "value": "B - Wymiary sekcji środkowej"
//       },
//       {
//           "id": 8334,
//           "key": "_technical_data_1_values_1_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8335,
//           "key": "technical_data_1_values_1_value",
//           "value": "580mm"
//       },
//       {
//           "id": 8336,
//           "key": "_technical_data_1_values_1_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8337,
//           "key": "technical_data_1_values_2_label",
//           "value": "C - Długość kolumny"
//       },
//       {
//           "id": 8338,
//           "key": "_technical_data_1_values_2_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8339,
//           "key": "technical_data_1_values_2_value",
//           "value": "60,3mm"
//       },
//       {
//           "id": 8340,
//           "key": "_technical_data_1_values_2_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8341,
//           "key": "technical_data_1_values_3_label",
//           "value": "D - Szerokość kolumny"
//       },
//       {
//           "id": 8342,
//           "key": "_technical_data_1_values_3_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8343,
//           "key": "technical_data_1_values_3_value",
//           "value": "89mm"
//       },
//       {
//           "id": 8344,
//           "key": "_technical_data_1_values_3_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8345,
//           "key": "technical_data_1_values_4_label",
//           "value": "E - Dolny wlot od podłogi"
//       },
//       {
//           "id": 8346,
//           "key": "_technical_data_1_values_4_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8347,
//           "key": "technical_data_1_values_4_value",
//           "value": "100mm"
//       },
//       {
//           "id": 8348,
//           "key": "_technical_data_1_values_4_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8349,
//           "key": "technical_data_1_values_5_label",
//           "value": "F - Górny wlot od podłogi"
//       },
//       {
//           "id": 8350,
//           "key": "_technical_data_1_values_5_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8351,
//           "key": "technical_data_1_values_5_value",
//           "value": "600mm"
//       },
//       {
//           "id": 8352,
//           "key": "_technical_data_1_values_5_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8353,
//           "key": "technical_data_1_values_6_label",
//           "value": "G - Środek otworu od boku sekcji"
//       },
//       {
//           "id": 8354,
//           "key": "_technical_data_1_values_6_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8355,
//           "key": "technical_data_1_values_6_value",
//           "value": "45mm"
//       },
//       {
//           "id": 8356,
//           "key": "_technical_data_1_values_6_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8357,
//           "key": "technical_data_1_values",
//           "value": "7"
//       },
//       {
//           "id": 8358,
//           "key": "_technical_data_1_values",
//           "value": "field_648c61c6713a9"
//       },
//       {
//           "id": 8359,
//           "key": "technical_data_2_values_0_label",
//           "value": "A - Wymiary sekcji noga"
//       },
//       {
//           "id": 8360,
//           "key": "_technical_data_2_values_0_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8361,
//           "key": "technical_data_2_values_0_value",
//           "value": "640mm"
//       },
//       {
//           "id": 8362,
//           "key": "_technical_data_2_values_0_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8363,
//           "key": "technical_data_2_values_1_label",
//           "value": "B - Wymiary sekcji środkowej"
//       },
//       {
//           "id": 8364,
//           "key": "_technical_data_2_values_1_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8365,
//           "key": "technical_data_2_values_1_value",
//           "value": "580mm"
//       },
//       {
//           "id": 8366,
//           "key": "_technical_data_2_values_1_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8367,
//           "key": "technical_data_2_values_2_label",
//           "value": "C - Długość kolumny"
//       },
//       {
//           "id": 8368,
//           "key": "_technical_data_2_values_2_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8369,
//           "key": "technical_data_2_values_2_value",
//           "value": "60,3mm"
//       },
//       {
//           "id": 8370,
//           "key": "_technical_data_2_values_2_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8371,
//           "key": "technical_data_2_values_3_label",
//           "value": "D - Szerokość kolumny"
//       },
//       {
//           "id": 8372,
//           "key": "_technical_data_2_values_3_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8373,
//           "key": "technical_data_2_values_3_value",
//           "value": "89mm"
//       },
//       {
//           "id": 8374,
//           "key": "_technical_data_2_values_3_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8375,
//           "key": "technical_data_2_values_4_label",
//           "value": "E - Dolny wlot od podłogi"
//       },
//       {
//           "id": 8376,
//           "key": "_technical_data_2_values_4_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8377,
//           "key": "technical_data_2_values_4_value",
//           "value": "100mm"
//       },
//       {
//           "id": 8378,
//           "key": "_technical_data_2_values_4_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8379,
//           "key": "technical_data_2_values_5_label",
//           "value": "F - Górny wlot od podłogi"
//       },
//       {
//           "id": 8380,
//           "key": "_technical_data_2_values_5_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8381,
//           "key": "technical_data_2_values_5_value",
//           "value": "600mm"
//       },
//       {
//           "id": 8382,
//           "key": "_technical_data_2_values_5_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8383,
//           "key": "technical_data_2_values_6_label",
//           "value": "G - Środek otworu od boku sekcji"
//       },
//       {
//           "id": 8384,
//           "key": "_technical_data_2_values_6_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8385,
//           "key": "technical_data_2_values_6_value",
//           "value": "45mm"
//       },
//       {
//           "id": 8386,
//           "key": "_technical_data_2_values_6_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8387,
//           "key": "technical_data_2_values",
//           "value": "7"
//       },
//       {
//           "id": 8388,
//           "key": "_technical_data_2_values",
//           "value": "field_648c61c6713a9"
//       },
//       {
//           "id": 8389,
//           "key": "technical_data_3_values_0_label",
//           "value": "A - Wymiary sekcji noga"
//       },
//       {
//           "id": 8390,
//           "key": "_technical_data_3_values_0_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8391,
//           "key": "technical_data_3_values_0_value",
//           "value": "640mm"
//       },
//       {
//           "id": 8392,
//           "key": "_technical_data_3_values_0_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8393,
//           "key": "technical_data_3_values_1_label",
//           "value": "B - Wymiary sekcji środkowej"
//       },
//       {
//           "id": 8394,
//           "key": "_technical_data_3_values_1_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8395,
//           "key": "technical_data_3_values_1_value",
//           "value": "580mm"
//       },
//       {
//           "id": 8396,
//           "key": "_technical_data_3_values_1_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8397,
//           "key": "technical_data_3_values_2_label",
//           "value": "C - Długość kolumny"
//       },
//       {
//           "id": 8398,
//           "key": "_technical_data_3_values_2_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8399,
//           "key": "technical_data_3_values_2_value",
//           "value": "60,3mm"
//       },
//       {
//           "id": 8400,
//           "key": "_technical_data_3_values_2_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8401,
//           "key": "technical_data_3_values_3_label",
//           "value": "D - Szerokość kolumny"
//       },
//       {
//           "id": 8402,
//           "key": "_technical_data_3_values_3_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8403,
//           "key": "technical_data_3_values_3_value",
//           "value": "60,3mm"
//       },
//       {
//           "id": 8404,
//           "key": "_technical_data_3_values_3_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8405,
//           "key": "technical_data_3_values_4_label",
//           "value": "E - Dolny wlot od podłogi"
//       },
//       {
//           "id": 8406,
//           "key": "_technical_data_3_values_4_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8407,
//           "key": "technical_data_3_values_4_value",
//           "value": "100mm"
//       },
//       {
//           "id": 8408,
//           "key": "_technical_data_3_values_4_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8409,
//           "key": "technical_data_3_values_5_label",
//           "value": "F - Górny wlot od podłogi"
//       },
//       {
//           "id": 8410,
//           "key": "_technical_data_3_values_5_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8411,
//           "key": "technical_data_3_values_5_value",
//           "value": "600mm"
//       },
//       {
//           "id": 8412,
//           "key": "_technical_data_3_values_5_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8413,
//           "key": "technical_data_3_values_6_label",
//           "value": "G - Środek otworu od boku sekcji"
//       },
//       {
//           "id": 8414,
//           "key": "_technical_data_3_values_6_label",
//           "value": "field_648c61df713ab"
//       },
//       {
//           "id": 8415,
//           "key": "technical_data_3_values_6_value",
//           "value": "45mm"
//       },
//       {
//           "id": 8416,
//           "key": "_technical_data_3_values_6_value",
//           "value": "field_648c61d9713aa"
//       },
//       {
//           "id": 8417,
//           "key": "technical_data_3_values",
//           "value": "7"
//       },
//       {
//           "id": 8418,
//           "key": "_technical_data_3_values",
//           "value": "field_648c61c6713a9"
//       },
//       {
//           "id": 8419,
//           "key": "delivery_pack_title",
//           "value": ""
//       },
//       {
//           "id": 8420,
//           "key": "_delivery_pack_title",
//           "value": "field_6491b21855160"
//       },
//       {
//           "id": 8421,
//           "key": "delivery_pack_list_0_line",
//           "value": "Zamówienie dostarczamy naszym prywatnym transportem"
//       },
//       {
//           "id": 8422,
//           "key": "_delivery_pack_list_0_line",
//           "value": "field_6491b22e55162"
//       },
//       {
//           "id": 8423,
//           "key": "delivery_pack_list_1_line",
//           "value": "Zamówienie wysyłamy za pośrednictwem firmy logistycznej"
//       },
//       {
//           "id": 8424,
//           "key": "_delivery_pack_list_1_line",
//           "value": "field_6491b22e55162"
//       },
//       {
//           "id": 8425,
//           "key": "delivery_pack_list",
//           "value": "2"
//       },
//       {
//           "id": 8426,
//           "key": "_delivery_pack_list",
//           "value": "field_6491b22655161"
//       },
//       {
//           "id": 8427,
//           "key": "tytul_-_rodzaje_polaczen",
//           "value": "Rodzaje połączeń"
//       },
//       {
//           "id": 8428,
//           "key": "_tytul_-_rodzaje_polaczen",
//           "value": "field_6491b70f92ed1"
//       },
//       {
//           "id": 8429,
//           "key": "tytul_-_dane_techniczne",
//           "value": "Dane techniczne "
//       },
//       {
//           "id": 8430,
//           "key": "_tytul_-_dane_techniczne",
//           "value": "field_6491b72e92ed2"
//       },
//       {
//           "id": 8431,
//           "key": "tytul_-_gwarancja",
//           "value": "Gwarancja"
//       },
//       {
//           "id": 8432,
//           "key": "_tytul_-_gwarancja",
//           "value": "field_6491b74792ed3"
//       },
//       {
//           "id": 8433,
//           "key": "tytul_-_dostawa",
//           "value": "Dostawa"
//       },
//       {
//           "id": 8434,
//           "key": "_tytul_-_dostawa",
//           "value": "field_6491b75192ed4"
//       },
//       {
//           "id": 8435,
//           "key": "tytul_-_wykonczenia",
//           "value": "Wykończenia"
//       },
//       {
//           "id": 8436,
//           "key": "_tytul_-_wykonczenia",
//           "value": "field_6491b779d6cab"
//       },
//       {
//           "id": 8437,
//           "key": "wykonczenia_0_id_label",
//           "value": "signature-series"
//       },
//       {
//           "id": 8438,
//           "key": "_wykonczenia_0_id_label",
//           "value": "field_6491beab4cc7a"
//       },
//       {
//           "id": 8439,
//           "key": "wykonczenia_0_tab_name",
//           "value": "Signature series"
//       },
//       {
//           "id": 8440,
//           "key": "_wykonczenia_0_tab_name",
//           "value": "field_6491bf0cd8ab9"
//       },
//       {
//           "id": 8441,
//           "key": "wykonczenia_1_title",
//           "value": "Bare metal"
//       },
//       {
//           "id": 8442,
//           "key": "_wykonczenia_1_title",
//           "value": "field_648b2c9912649"
//       },
//       {
//           "id": 8443,
//           "key": "wykonczenia_1_id_label",
//           "value": "bare-metal"
//       },
//       {
//           "id": 8444,
//           "key": "_wykonczenia_1_id_label",
//           "value": "field_6491beab4cc7a"
//       },
//       {
//           "id": 8445,
//           "key": "wykonczenia_1_tab_name",
//           "value": "Bare metal"
//       },
//       {
//           "id": 8446,
//           "key": "_wykonczenia_1_tab_name",
//           "value": "field_6491bf0cd8ab9"
//       },
//       {
//           "id": 8447,
//           "key": "wykonczenia_1_description",
//           "value": "Klasyczne wykończenia kolorystyczne, świetnie dopasowane do większości wnętrz"
//       },
//       {
//           "id": 8448,
//           "key": "_wykonczenia_1_description",
//           "value": "field_648b2c9f1264a"
//       },
//       {
//           "id": 8449,
//           "key": "wykonczenia_1_produkt",
//           "value": [
//               "899",
//               "901",
//               "903",
//               "905",
//               "907",
//               "909",
//               "911",
//               "913",
//               "915",
//               "917",
//               "919",
//               "921"
//           ]
//       },
//       {
//           "id": 8450,
//           "key": "_wykonczenia_1_produkt",
//           "value": "field_648b2c051260f"
//       },
//       {
//           "id": 8451,
//           "key": "wykonczenia_2_title",
//           "value": "RAL"
//       },
//       {
//           "id": 8452,
//           "key": "_wykonczenia_2_title",
//           "value": "field_648b2c9912649"
//       },
//       {
//           "id": 8453,
//           "key": "wykonczenia_2_id_label",
//           "value": "ral"
//       },
//       {
//           "id": 8454,
//           "key": "_wykonczenia_2_id_label",
//           "value": "field_6491beab4cc7a"
//       },
//       {
//           "id": 8455,
//           "key": "wykonczenia_2_tab_name",
//           "value": "RAL"
//       },
//       {
//           "id": 8456,
//           "key": "_wykonczenia_2_tab_name",
//           "value": "field_6491bf0cd8ab9"
//       },
//       {
//           "id": 8457,
//           "key": "wykonczenia_2_description",
//           "value": "Klasyczne wykończenia kolorystyczne, świetnie dopasowane do większości wnętrz"
//       },
//       {
//           "id": 8458,
//           "key": "_wykonczenia_2_description",
//           "value": "field_648b2c9f1264a"
//       },
//       {
//           "id": 8459,
//           "key": "wykonczenia_2_produkt",
//           "value": [
//               "923",
//               "925",
//               "927",
//               "1346",
//               "929",
//               "931",
//               "933",
//               "1344",
//               "1342",
//               "1340",
//               "1338",
//               "1336",
//               "1334",
//               "1332",
//               "1330",
//               "1328",
//               "1326",
//               "1324",
//               "1322",
//               "1320",
//               "1318",
//               "1316",
//               "1314",
//               "1312",
//               "1310",
//               "1308",
//               "1306",
//               "1304",
//               "1302",
//               "1300",
//               "1298",
//               "1296",
//               "1294",
//               "1292",
//               "1290",
//               "1288",
//               "1286",
//               "1284",
//               "1282",
//               "1280",
//               "1278",
//               "1276",
//               "1274",
//               "1272",
//               "1270",
//               "1268",
//               "1266",
//               "1264",
//               "1262",
//               "1260",
//               "1258",
//               "1256",
//               "1254",
//               "1252",
//               "1250",
//               "1248",
//               "1246",
//               "1244",
//               "1242",
//               "1240",
//               "1238",
//               "1236",
//               "1234",
//               "1232",
//               "1230",
//               "1228",
//               "1226",
//               "1224",
//               "1222",
//               "1220",
//               "1218",
//               "1216",
//               "1214",
//               "1212",
//               "1210",
//               "1208",
//               "1206",
//               "1204",
//               "1202",
//               "1200",
//               "1198",
//               "1196",
//               "1194",
//               "1192",
//               "1190",
//               "1188",
//               "1186",
//               "1184",
//               "1182",
//               "1180",
//               "1178",
//               "1176",
//               "1174",
//               "1172",
//               "1170",
//               "1168",
//               "1166",
//               "1163",
//               "1161",
//               "1159",
//               "1157",
//               "1155",
//               "1153",
//               "1151",
//               "1149",
//               "1147",
//               "1145",
//               "1143",
//               "1141",
//               "1139",
//               "1137",
//               "1135",
//               "1133",
//               "1131",
//               "1129",
//               "1127",
//               "1125",
//               "1123",
//               "1121",
//               "1119",
//               "1117",
//               "1115",
//               "1113",
//               "1111",
//               "1109",
//               "1107",
//               "1105",
//               "1103",
//               "1101",
//               "1099",
//               "1097",
//               "1094",
//               "1092",
//               "1090",
//               "1088",
//               "1086",
//               "1084",
//               "1082",
//               "1080",
//               "1078",
//               "1076",
//               "1074",
//               "1072",
//               "1070",
//               "1068",
//               "1066",
//               "1064",
//               "1062",
//               "1060",
//               "1058",
//               "1056",
//               "1054",
//               "1052",
//               "1050",
//               "1048",
//               "1046",
//               "1044",
//               "1041",
//               "1039",
//               "1037",
//               "1035",
//               "1033",
//               "1031",
//               "1029",
//               "1027",
//               "1025",
//               "1023",
//               "1021",
//               "1019",
//               "1016",
//               "1013",
//               "1011",
//               "1009",
//               "1007",
//               "1005",
//               "1003",
//               "1001",
//               "998",
//               "996",
//               "994",
//               "992",
//               "990",
//               "987",
//               "985",
//               "983",
//               "981",
//               "979",
//               "976",
//               "974",
//               "971"
//           ]
//       },
//       {
//           "id": 8460,
//           "key": "_wykonczenia_2_produkt",
//           "value": "field_648b2c051260f"
//       },
//       {
//           "id": 8561,
//           "key": "image_product",
//           "value": "615"
//       },
//       {
//           "id": 8562,
//           "key": "_image_product",
//           "value": "field_64a2e47936fdb"
//       },
//       {
//           "id": 8563,
//           "key": "image_product_hover",
//           "value": "616"
//       },
//       {
//           "id": 8564,
//           "key": "_image_product_hover",
//           "value": "field_64a2e49df0656"
//       },
//       {
//           "id": 8566,
//           "key": "czy_wyswietlic_sekcje_z_3_kolumnami",
//           "value": "0"
//       },
//       {
//           "id": 8567,
//           "key": "_czy_wyswietlic_sekcje_z_3_kolumnami",
//           "value": "field_64a2deb036f60"
//       },
//       {
//           "id": 8590,
//           "key": "tytul_na_strone_produktu",
//           "value": "Aurora"
//       },
//       {
//           "id": 8591,
//           "key": "_tytul_na_strone_produktu",
//           "value": "field_64a2e829c4a59"
//       },
//       {
//           "id": 10333,
//           "key": "typ_galerii",
//           "value": "yes"
//       },
//       {
//           "id": 10334,
//           "key": "_typ_galerii",
//           "value": "field_64a2eece0a071"
//       },
//       {
//           "id": 10335,
//           "key": "inne_produkty",
//           "value": [
//               "477",
//               "505",
//               "733",
//               "521"
//           ]
//       },
//       {
//           "id": 10336,
//           "key": "_inne_produkty",
//           "value": "field_64a30a13d0e0b"
//       },
//       {
//           "id": 14869,
//           "key": "dopis_przy_cenie",
//           "value": "od 999"
//       },
//       {
//           "id": 14870,
//           "key": "_dopis_przy_cenie",
//           "value": "field_64abdc7b9504b"
//       },
//       {
//           "id": 15718,
//           "key": "inline_featured_image",
//           "value": "0"
//       },
//       {
//           "id": 16031,
//           "key": "technical_data_wrapper",
//           "value": ""
//       },
//       {
//           "id": 16032,
//           "key": "_technical_data_wrapper",
//           "value": "field_64c13057260c4"
//       },
//       {
//           "id": 30907,
//           "key": "_yoast_wpseo_primary_product_cat",
//           "value": ""
//       },
//       {
//           "id": 30908,
//           "key": "_yoast_wpseo_title",
//           "value": "Aurora 2-kolumny"
//       },
//       {
//           "id": 30909,
//           "key": "_yoast_wpseo_metadesc",
//           "value": "Tradycyjna i delikatna forma, która podkreśli charakter pomieszczenia."
//       },
//       {
//           "id": 30910,
//           "key": "_yoast_wpseo_estimated-reading-time-minutes",
//           "value": "0"
//       },
//       {
//           "id": 30911,
//           "key": "_yoast_wpseo_wordproof_timestamp",
//           "value": ""
//       }
//   ],
//   "stock_status": "instock",
//   "has_options": true,
//   "yoast_head": "<!-- This site is optimized with the Yoast SEO plugin v21.5 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>Aurora 2-kolumny</title>\n<meta name=\"description\" content=\"Tradycyjna i delikatna forma, która podkreśli charakter pomieszczenia.\" />\n<meta name=\"robots\" content=\"noindex, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\" />\n<meta property=\"og:locale\" content=\"pl_PL\" />\n<meta property=\"og:type\" content=\"article\" />\n<meta property=\"og:title\" content=\"Aurora 2-kolumny\" />\n<meta property=\"og:description\" content=\"Tradycyjna i delikatna forma, która podkreśli charakter pomieszczenia.\" />\n<meta property=\"og:url\" content=\"https://grzejniki2.ergotree.pl/produkt/aurora-2-kolumny/\" />\n<meta property=\"og:site_name\" content=\"Grzejniki\" />\n<meta property=\"article:modified_time\" content=\"2024-01-12T02:04:47+00:00\" />\n<meta property=\"og:image\" content=\"http://grzejniki2.ergotree.pl/wp-content/uploads/2023/07/grzejnik-zeliwny-aurora-2kolumny-1.png\" />\n\t<meta property=\"og:image:width\" content=\"785\" />\n\t<meta property=\"og:image:height\" content=\"588\" />\n\t<meta property=\"og:image:type\" content=\"image/png\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\" />\n<script type=\"application/ld+json\" class=\"yoast-schema-graph\">{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://grzejniki2.ergotree.pl/produkt/aurora-2-kolumny/\",\"url\":\"https://grzejniki2.ergotree.pl/produkt/aurora-2-kolumny/\",\"name\":\"Aurora 2-kolumny\",\"isPartOf\":{\"@id\":\"https://grzejniki2.ergotree.pl/#website\"},\"datePublished\":\"2023-07-03T15:11:25+00:00\",\"dateModified\":\"2024-01-12T02:04:47+00:00\",\"description\":\"Tradycyjna i delikatna forma, która podkreśli charakter pomieszczenia.\",\"breadcrumb\":{\"@id\":\"https://grzejniki2.ergotree.pl/produkt/aurora-2-kolumny/#breadcrumb\"},\"inLanguage\":\"pl-PL\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://grzejniki2.ergotree.pl/produkt/aurora-2-kolumny/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://grzejniki2.ergotree.pl/produkt/aurora-2-kolumny/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Strona główna\",\"item\":\"https://grzejniki2.ergotree.pl/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Sklep\",\"item\":\"https://grzejniki2.ergotree.pl/sklep/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Aurora – 2 kolumny\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://grzejniki2.ergotree.pl/#website\",\"url\":\"https://grzejniki2.ergotree.pl/\",\"name\":\"Grzejniki\",\"description\":\"\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://grzejniki2.ergotree.pl/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"pl-PL\"}]}</script>\n<!-- / Yoast SEO plugin. -->",
//   "yoast_head_json": {
//       "title": "Aurora 2-kolumny",
//       "description": "Tradycyjna i delikatna forma, która podkreśli charakter pomieszczenia.",
//       "robots": {
//           "index": "noindex",
//           "follow": "follow",
//           "max-snippet": "max-snippet:-1",
//           "max-image-preview": "max-image-preview:large",
//           "max-video-preview": "max-video-preview:-1"
//       },
//       "og_locale": "pl_PL",
//       "og_type": "article",
//       "og_title": "Aurora 2-kolumny",
//       "og_description": "Tradycyjna i delikatna forma, która podkreśli charakter pomieszczenia.",
//       "og_url": "https://grzejniki2.ergotree.pl/produkt/aurora-2-kolumny/",
//       "og_site_name": "Grzejniki",
//       "article_modified_time": "2024-01-12T02:04:47+00:00",
//       "og_image": [
//           {
//               "width": 785,
//               "height": 588,
//               "url": "http://grzejniki2.ergotree.pl/wp-content/uploads/2023/07/grzejnik-zeliwny-aurora-2kolumny-1.png",
//               "type": "image/png"
//           }
//       ],
//       "twitter_card": "summary_large_image",
//       "schema": {
//           "@context": "https://schema.org",
//           "@graph": [
//               {
//                   "@type": "WebPage",
//                   "@id": "https://grzejniki2.ergotree.pl/produkt/aurora-2-kolumny/",
//                   "url": "https://grzejniki2.ergotree.pl/produkt/aurora-2-kolumny/",
//                   "name": "Aurora 2-kolumny",
//                   "isPartOf": {
//                       "@id": "https://grzejniki2.ergotree.pl/#website"
//                   },
//                   "datePublished": "2023-07-03T15:11:25+00:00",
//                   "dateModified": "2024-01-12T02:04:47+00:00",
//                   "description": "Tradycyjna i delikatna forma, która podkreśli charakter pomieszczenia.",
//                   "breadcrumb": {
//                       "@id": "https://grzejniki2.ergotree.pl/produkt/aurora-2-kolumny/#breadcrumb"
//                   },
//                   "inLanguage": "pl-PL",
//                   "potentialAction": [
//                       {
//                           "@type": "ReadAction",
//                           "target": [
//                               "https://grzejniki2.ergotree.pl/produkt/aurora-2-kolumny/"
//                           ]
//                       }
//                   ]
//               },
//               {
//                   "@type": "BreadcrumbList",
//                   "@id": "https://grzejniki2.ergotree.pl/produkt/aurora-2-kolumny/#breadcrumb",
//                   "itemListElement": [
//                       {
//                           "@type": "ListItem",
//                           "position": 1,
//                           "name": "Strona główna",
//                           "item": "https://grzejniki2.ergotree.pl/"
//                       },
//                       {
//                           "@type": "ListItem",
//                           "position": 2,
//                           "name": "Sklep",
//                           "item": "https://grzejniki2.ergotree.pl/sklep/"
//                       },
//                       {
//                           "@type": "ListItem",
//                           "position": 3,
//                           "name": "Aurora – 2 kolumny"
//                       }
//                   ]
//               },
//               {
//                   "@type": "WebSite",
//                   "@id": "https://grzejniki2.ergotree.pl/#website",
//                   "url": "https://grzejniki2.ergotree.pl/",
//                   "name": "Grzejniki",
//                   "description": "",
//                   "potentialAction": [
//                       {
//                           "@type": "SearchAction",
//                           "target": {
//                               "@type": "EntryPoint",
//                               "urlTemplate": "https://grzejniki2.ergotree.pl/?s={search_term_string}"
//                           },
//                           "query-input": "required name=search_term_string"
//                       }
//                   ],
//                   "inLanguage": "pl-PL"
//               }
//           ]
//       }
//   },
//   "produkt_thumbnails": [
//       {
//           "wykonczenie": "Signature series",
//           "produkty": [
//               {
//                   "produkt_id": 870,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-anthracite.png"
//               },
//               {
//                   "produkt_id": 872,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-astral-grey-1.png"
//               },
//               {
//                   "produkt_id": 874,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-astral-grey-mid-1.png"
//               },
//               {
//                   "produkt_id": 880,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-black-iron.png"
//               },
//               {
//                   "produkt_id": 897,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-bright-white.png"
//               },
//               {
//                   "produkt_id": 895,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-ceramic-white.png"
//               },
//               {
//                   "produkt_id": 893,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-chalk.png"
//               },
//               {
//                   "produkt_id": 889,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-grey-bronze.png"
//               },
//               {
//                   "produkt_id": 878,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-iron-grey-1.png"
//               },
//               {
//                   "produkt_id": 891,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-manhattan.png"
//               },
//               {
//                   "produkt_id": 348,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/06/Matt-Black.png"
//               },
//               {
//                   "produkt_id": 887,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-mercury-iron.png"
//               },
//               {
//                   "produkt_id": 876,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-midnight-ink-1.png"
//               }
//           ]
//       },
//       {
//           "wykonczenie": "Bare metal",
//           "produkty": [
//               {
//                   "produkt_id": 899,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-aged-gold.png"
//               },
//               {
//                   "produkt_id": 901,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-beaten-brass.png"
//               },
//               {
//                   "produkt_id": 903,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-bronze.png"
//               },
//               {
//                   "produkt_id": 905,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-etch-coated-polish.png"
//               },
//               {
//                   "produkt_id": 907,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-full-polish.png"
//               },
//               {
//                   "produkt_id": 909,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-mirror-polish.png"
//               },
//               {
//                   "produkt_id": 911,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-natural-brass.png"
//               },
//               {
//                   "produkt_id": 913,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-natural-pewter.png"
//               },
//               {
//                   "produkt_id": 915,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-ox-blood.png"
//               },
//               {
//                   "produkt_id": 917,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-sapphire-blue.png"
//               },
//               {
//                   "produkt_id": 919,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-satin-polish.png"
//               },
//               {
//                   "produkt_id": 921,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-wimbledon-green.png"
//               }
//           ]
//       },
//       {
//           "wykonczenie": "RAL",
//           "produkty": [
//               {
//                   "produkt_id": 923,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018.png"
//               },
//               {
//                   "produkt_id": 925,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9017.png"
//               },
//               {
//                   "produkt_id": 927,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9016.png"
//               },
//               {
//                   "produkt_id": 1346,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T132005.753.png"
//               },
//               {
//                   "produkt_id": 929,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9010.png"
//               },
//               {
//                   "produkt_id": 931,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9007.png"
//               },
//               {
//                   "produkt_id": 933,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9006.png"
//               },
//               {
//                   "produkt_id": 1344,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131921.983.png"
//               },
//               {
//                   "produkt_id": 1342,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131852.130.png"
//               },
//               {
//                   "produkt_id": 1340,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131826.070.png"
//               },
//               {
//                   "produkt_id": 1338,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131752.242.png"
//               },
//               {
//                   "produkt_id": 1336,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131726.194.png"
//               },
//               {
//                   "produkt_id": 1334,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131654.677.png"
//               },
//               {
//                   "produkt_id": 1332,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131623.176.png"
//               },
//               {
//                   "produkt_id": 1330,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131554.078.png"
//               },
//               {
//                   "produkt_id": 1328,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131525.929.png"
//               },
//               {
//                   "produkt_id": 1326,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131500.483.png"
//               },
//               {
//                   "produkt_id": 1324,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131435.594.png"
//               },
//               {
//                   "produkt_id": 1322,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131408.394.png"
//               },
//               {
//                   "produkt_id": 1320,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131253.995.png"
//               },
//               {
//                   "produkt_id": 1318,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131227.788.png"
//               },
//               {
//                   "produkt_id": 1316,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131204.552.png"
//               },
//               {
//                   "produkt_id": 1314,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131131.980.png"
//               },
//               {
//                   "produkt_id": 1312,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131047.212.png"
//               },
//               {
//                   "produkt_id": 1310,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T131010.285.png"
//               },
//               {
//                   "produkt_id": 1308,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T130939.622.png"
//               },
//               {
//                   "produkt_id": 1306,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T130857.725.png"
//               },
//               {
//                   "produkt_id": 1304,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T130834.809.png"
//               },
//               {
//                   "produkt_id": 1302,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T130806.138.png"
//               },
//               {
//                   "produkt_id": 1300,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T130735.233.png"
//               },
//               {
//                   "produkt_id": 1298,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T130705.759.png"
//               },
//               {
//                   "produkt_id": 1296,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T130635.592.png"
//               },
//               {
//                   "produkt_id": 1294,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T130316.805.png"
//               },
//               {
//                   "produkt_id": 1292,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T130244.720.png"
//               },
//               {
//                   "produkt_id": 1290,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T130157.094.png"
//               },
//               {
//                   "produkt_id": 1288,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T130131.389.png"
//               },
//               {
//                   "produkt_id": 1286,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T130103.600.png"
//               },
//               {
//                   "produkt_id": 1284,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T130033.009.png"
//               },
//               {
//                   "produkt_id": 1282,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T130003.323.png"
//               },
//               {
//                   "produkt_id": 1280,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125926.494.png"
//               },
//               {
//                   "produkt_id": 1278,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125857.216.png"
//               },
//               {
//                   "produkt_id": 1276,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125825.011.png"
//               },
//               {
//                   "produkt_id": 1274,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125756.457.png"
//               },
//               {
//                   "produkt_id": 1272,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125725.455.png"
//               },
//               {
//                   "produkt_id": 1270,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125612.559.png"
//               },
//               {
//                   "produkt_id": 1268,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125548.794.png"
//               },
//               {
//                   "produkt_id": 1266,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125518.284.png"
//               },
//               {
//                   "produkt_id": 1264,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125447.752.png"
//               },
//               {
//                   "produkt_id": 1262,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125419.997.png"
//               },
//               {
//                   "produkt_id": 1260,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125352.518.png"
//               },
//               {
//                   "produkt_id": 1258,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125323.948.png"
//               },
//               {
//                   "produkt_id": 1256,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125256.718.png"
//               },
//               {
//                   "produkt_id": 1254,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125230.944.png"
//               },
//               {
//                   "produkt_id": 1252,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125154.567.png"
//               },
//               {
//                   "produkt_id": 1250,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125122.300.png"
//               },
//               {
//                   "produkt_id": 1248,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125055.003.png"
//               },
//               {
//                   "produkt_id": 1246,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T125006.665.png"
//               },
//               {
//                   "produkt_id": 1244,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124944.228.png"
//               },
//               {
//                   "produkt_id": 1242,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124911.154.png"
//               },
//               {
//                   "produkt_id": 1240,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124840.022.png"
//               },
//               {
//                   "produkt_id": 1238,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124803.018.png"
//               },
//               {
//                   "produkt_id": 1236,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124735.706.png"
//               },
//               {
//                   "produkt_id": 1234,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124709.677.png"
//               },
//               {
//                   "produkt_id": 1232,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124636.763.png"
//               },
//               {
//                   "produkt_id": 1230,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124609.250.png"
//               },
//               {
//                   "produkt_id": 1228,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124545.113.png"
//               },
//               {
//                   "produkt_id": 1226,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124515.281.png"
//               },
//               {
//                   "produkt_id": 1224,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124451.641.png"
//               },
//               {
//                   "produkt_id": 1222,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124427.523.png"
//               },
//               {
//                   "produkt_id": 1220,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124359.014.png"
//               },
//               {
//                   "produkt_id": 1218,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124330.125.png"
//               },
//               {
//                   "produkt_id": 1216,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124303.198.png"
//               },
//               {
//                   "produkt_id": 1214,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124226.945.png"
//               },
//               {
//                   "produkt_id": 1212,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124202.598.png"
//               },
//               {
//                   "produkt_id": 1210,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124134.677.png"
//               },
//               {
//                   "produkt_id": 1208,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124051.858.png"
//               },
//               {
//                   "produkt_id": 1206,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T124021.670.png"
//               },
//               {
//                   "produkt_id": 1204,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T123943.711.png"
//               },
//               {
//                   "produkt_id": 1202,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T123917.596.png"
//               },
//               {
//                   "produkt_id": 1200,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T123841.548.png"
//               },
//               {
//                   "produkt_id": 1198,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T123742.405.png"
//               },
//               {
//                   "produkt_id": 1196,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T123715.858.png"
//               },
//               {
//                   "produkt_id": 1194,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T123608.236.png"
//               },
//               {
//                   "produkt_id": 1192,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T123507.368.png"
//               },
//               {
//                   "produkt_id": 1190,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T123345.358.png"
//               },
//               {
//                   "produkt_id": 1188,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T123204.191.png"
//               },
//               {
//                   "produkt_id": 1186,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T123124.370.png"
//               },
//               {
//                   "produkt_id": 1184,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T123051.177.png"
//               },
//               {
//                   "produkt_id": 1182,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T123007.927.png"
//               },
//               {
//                   "produkt_id": 1180,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2023-09-06T122928.278.png"
//               },
//               {
//                   "produkt_id": 1178,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-100.png"
//               },
//               {
//                   "produkt_id": 1176,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-99.png"
//               },
//               {
//                   "produkt_id": 1174,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-98.png"
//               },
//               {
//                   "produkt_id": 1172,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-97.png"
//               },
//               {
//                   "produkt_id": 1170,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-96.png"
//               },
//               {
//                   "produkt_id": 1168,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-95.png"
//               },
//               {
//                   "produkt_id": 1166,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-94.png"
//               },
//               {
//                   "produkt_id": 1163,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-93.png"
//               },
//               {
//                   "produkt_id": 1161,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-92.png"
//               },
//               {
//                   "produkt_id": 1159,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-91.png"
//               },
//               {
//                   "produkt_id": 1157,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-90.png"
//               },
//               {
//                   "produkt_id": 1155,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-89.png"
//               },
//               {
//                   "produkt_id": 1153,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-88.png"
//               },
//               {
//                   "produkt_id": 1151,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-87.png"
//               },
//               {
//                   "produkt_id": 1149,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-86.png"
//               },
//               {
//                   "produkt_id": 1147,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-85.png"
//               },
//               {
//                   "produkt_id": 1145,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-84.png"
//               },
//               {
//                   "produkt_id": 1143,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-83.png"
//               },
//               {
//                   "produkt_id": 1141,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-82.png"
//               },
//               {
//                   "produkt_id": 1139,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-81.png"
//               },
//               {
//                   "produkt_id": 1137,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-80.png"
//               },
//               {
//                   "produkt_id": 1135,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-79.png"
//               },
//               {
//                   "produkt_id": 1133,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-78.png"
//               },
//               {
//                   "produkt_id": 1131,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-77.png"
//               },
//               {
//                   "produkt_id": 1129,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-76.png"
//               },
//               {
//                   "produkt_id": 1127,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-75.png"
//               },
//               {
//                   "produkt_id": 1125,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-74.png"
//               },
//               {
//                   "produkt_id": 1123,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-73.png"
//               },
//               {
//                   "produkt_id": 1121,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-72.png"
//               },
//               {
//                   "produkt_id": 1119,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-71.png"
//               },
//               {
//                   "produkt_id": 1117,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-70.png"
//               },
//               {
//                   "produkt_id": 1115,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-69.png"
//               },
//               {
//                   "produkt_id": 1113,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-68.png"
//               },
//               {
//                   "produkt_id": 1111,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-67.png"
//               },
//               {
//                   "produkt_id": 1109,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-66.png"
//               },
//               {
//                   "produkt_id": 1107,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-65.png"
//               },
//               {
//                   "produkt_id": 1105,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-64.png"
//               },
//               {
//                   "produkt_id": 1103,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-63.png"
//               },
//               {
//                   "produkt_id": 1101,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-62.png"
//               },
//               {
//                   "produkt_id": 1099,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-61.png"
//               },
//               {
//                   "produkt_id": 1097,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-60.png"
//               },
//               {
//                   "produkt_id": 1094,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-58.png"
//               },
//               {
//                   "produkt_id": 1092,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-57.png"
//               },
//               {
//                   "produkt_id": 1090,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-59.png"
//               },
//               {
//                   "produkt_id": 1088,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-56.png"
//               },
//               {
//                   "produkt_id": 1086,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-55.png"
//               },
//               {
//                   "produkt_id": 1084,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-54.png"
//               },
//               {
//                   "produkt_id": 1082,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-53.png"
//               },
//               {
//                   "produkt_id": 1080,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-52.png"
//               },
//               {
//                   "produkt_id": 1078,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-51.png"
//               },
//               {
//                   "produkt_id": 1076,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-50.png"
//               },
//               {
//                   "produkt_id": 1074,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-49.png"
//               },
//               {
//                   "produkt_id": 1072,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-48.png"
//               },
//               {
//                   "produkt_id": 1070,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-47.png"
//               },
//               {
//                   "produkt_id": 1068,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-46.png"
//               },
//               {
//                   "produkt_id": 1066,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-45.png"
//               },
//               {
//                   "produkt_id": 1064,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-44.png"
//               },
//               {
//                   "produkt_id": 1062,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-43.png"
//               },
//               {
//                   "produkt_id": 1060,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-42.png"
//               },
//               {
//                   "produkt_id": 1058,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-41.png"
//               },
//               {
//                   "produkt_id": 1056,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-40.png"
//               },
//               {
//                   "produkt_id": 1054,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-39.png"
//               },
//               {
//                   "produkt_id": 1052,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-38.png"
//               },
//               {
//                   "produkt_id": 1050,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-37.png"
//               },
//               {
//                   "produkt_id": 1048,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-36.png"
//               },
//               {
//                   "produkt_id": 1046,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-35.png"
//               },
//               {
//                   "produkt_id": 1044,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-34.png"
//               },
//               {
//                   "produkt_id": 1041,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-33.png"
//               },
//               {
//                   "produkt_id": 1039,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-32.png"
//               },
//               {
//                   "produkt_id": 1037,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-31.png"
//               },
//               {
//                   "produkt_id": 1035,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-30.png"
//               },
//               {
//                   "produkt_id": 1033,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-29.png"
//               },
//               {
//                   "produkt_id": 1031,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-28.png"
//               },
//               {
//                   "produkt_id": 1029,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-27.png"
//               },
//               {
//                   "produkt_id": 1027,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-26.png"
//               },
//               {
//                   "produkt_id": 1025,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-25.png"
//               },
//               {
//                   "produkt_id": 1023,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-24.png"
//               },
//               {
//                   "produkt_id": 1021,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-23.png"
//               },
//               {
//                   "produkt_id": 1019,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-22.png"
//               },
//               {
//                   "produkt_id": 1016,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-21.png"
//               },
//               {
//                   "produkt_id": 1013,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-20.png"
//               },
//               {
//                   "produkt_id": 1011,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-19.png"
//               },
//               {
//                   "produkt_id": 1009,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-18.png"
//               },
//               {
//                   "produkt_id": 1007,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-17.png"
//               },
//               {
//                   "produkt_id": 1005,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-16.png"
//               },
//               {
//                   "produkt_id": 1003,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-15.png"
//               },
//               {
//                   "produkt_id": 1001,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-14.png"
//               },
//               {
//                   "produkt_id": 998,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-12.png"
//               },
//               {
//                   "produkt_id": 996,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-11.png"
//               },
//               {
//                   "produkt_id": 994,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-10.png"
//               },
//               {
//                   "produkt_id": 992,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-9.png"
//               },
//               {
//                   "produkt_id": 990,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-8.png"
//               },
//               {
//                   "produkt_id": 987,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-7.png"
//               },
//               {
//                   "produkt_id": 985,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-13.png"
//               },
//               {
//                   "produkt_id": 983,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-6.png"
//               },
//               {
//                   "produkt_id": 981,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-5.png"
//               },
//               {
//                   "produkt_id": 979,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-4.png"
//               },
//               {
//                   "produkt_id": 976,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-3.png"
//               },
//               {
//                   "produkt_id": 974,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-2.png"
//               },
//               {
//                   "produkt_id": 971,
//                   "thumbnail": "https://grzejniki2.ergotree.pl/wp-content/uploads/2023/09/wykonczenie-9018-1.png"
//               }
//           ]
//       }
//   ],
//   "_links": {
//       "self": [
//           {
//               "href": "https://grzejniki2.ergotree.pl/wp-json/wc/v3/products/397"
//           }
//       ],
//       "collection": [
//           {
//               "href": "https://grzejniki2.ergotree.pl/wp-json/wc/v3/products"
//           }
//       ]
//   }
// }