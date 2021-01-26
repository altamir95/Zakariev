import React from "react";
import $ from "jquery";

// import {NavLink} from "react-router-dom"
// const MasterCard = "/images/mastercard.svg";
// const Visa = "/images/visa.svg";
// const Maestro = "/images/maestro.svg";
// const Mir = "/images/mir.svg";
// const Jcb = "/images/jcb.svg";

// const Facebook = "/images/facebook.svg";
// const Instagram = "/images/instagram.svg";
// const Telegram = "/images/telegram.svg";
// const Vk = "/images/vk.svg";
// const Whatsapp = "/images/whatsapp.svg";
// const Youtube = "/images/youtube.svg";
// var socialNetworksLogos = {
//     width: 30,
//     height: 30
// };
// var BankCards = {
//     width: 60,
//     height: 60
// };
function Footer() {

  return (
    <footer className="bg-black text-white">
      <div className="container pr-1 pl-1 pr-sm-1 pl-sm-1 pr-md-1 pl-md-1 pr-lg-5 pl-lg-5 pr-xl-5 pl-xl-5">
        <div className="row  m-0 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3 ">
          <div className="col mt-2">
            {/* <p className="font-weight-bold text-uppercase">Телетефон:</p> */}
            <p className="font-weight-light">8 (985) 846-44-74</p>
            <p className="font-weight-light text-white-50">© ЗАКАРИЕВ, 1996—2020</p>
          </div>
          {/* <div className="col ">
            <p className="font-weight-bold text-uppercase">Способы оплаты</p>
            <img className="m-2 " width={BankCards.width} src={MasterCard}></img>
            <img className="m-2 " width={BankCards.width} src={Visa}></img>
            <img className="m-2 " width={BankCards.width} src={Maestro}></img>
            <img className="m-2 " width={BankCards.width} src={Mir}></img>
            <img className="m-2 " width={BankCards.width} src={Jcb}></img>
          </div>
          <div className="col">
            <p className="font-weight-bold text-uppercase">Присоеденяйтесь</p>
            <img className="m-2" width={socialNetworksLogos.width} src={Facebook}></img>
            <img className="m-2" width={socialNetworksLogos.width} src={Instagram}></img>
            <img className="m-2" width={socialNetworksLogos.width} src={Telegram}></img>
            <img className="m-2" width={socialNetworksLogos.width} src={Vk}></img>
            <img className="m-2" width={socialNetworksLogos.width} src={Whatsapp}></img>
            <img className="m-2" width={socialNetworksLogos.width} src={Youtube}></img>
          </div> */}
          
        </div>
      </div>
    </footer>
   
  );
}
export default Footer;
