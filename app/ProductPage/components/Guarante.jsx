import Image from "next/image";
import Guarante from "../../../public/static/ProductPage/Guarantee/guarantee.png";



const Guarantee = () => {
    return (
      <>
        <div className="col-6">
<h6 className="first-p h6-300">Zapewniamy dożywotnią gwarancję na szczelność zestawów i 10 letnią gwarancję na powłokę lakierniczą.*</h6>
<h6 className="second-p h6-300">* Gwarancja nie obejmuje uszkodzeń mechanicznych z winy użytkownika, jak również odbarwień lub odprysków lakieru spowodowanych długotrwałym działaniem czynników zewnętrznych (atmosferycznych) oraz źle dobranych i stosowanych środków czyszczących i konserwujących.</h6>
</div>
              <div className="col-6">
                <Image className="ImgGuarantee" src={Guarante} />
              </div>

      </>
    );
  };
  
  export default Guarantee;
  