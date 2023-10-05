import Deliver from "../../../public/static/ProductPage/Delivery/delivery.png";



const Delivery = () => {
    return (
      <>
        <div className="col-6">
          <h6 className="h6-300">
        Wyróżniamy dwa modele dostaw : <br />
1.Zamówienie dostarczamy naszym prywatnym transportem <br />
2.Zamówienie wysyłamy za pośrednictwem firmy logistycznej <br />
</h6>
</div>
              <div className="col-6">
                <Image className="delivery-package" src={Deliver} />
              </div>

      </>
    );
  };
  
  export default Delivery;
  