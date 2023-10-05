import Image from "next/image";
import Link from "next/link";

import myimage from "../../../public/Logo/Logo-dark.png";


const Logo = () => {
    return (

          <div className="footer-logo-parent">
        <div className="footer-logo-inner">
          <Link href="/#">

      <Image src={myimage}  alt="Footer-Logo"/>
            </Link>
            </div>
         </div>

    );
  };
  
  export default Logo;
  