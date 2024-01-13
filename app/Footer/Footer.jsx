import React from "react";
import Logo from "./components/Logo";

const Footer = () => {
  // Dane w postaci tablic dla kategorii, serii, menu i mediów społecznościowych
  const categories = ["Grzejniki łazienkowe", "Zawory", "Akcesoria", "Próbki wykończeń"];
  const series = ["Emmeline", "Vulcan", "Grace", "Mercury", "Rococo", "Neptune"];
  const menuItems = ["Opinie", "Renowacja", "Dla biznesu", "Kontakt"];
  const socialMedia = ["Facebook", "Instagram", "Pinterest"];

  return (
    <footer className="footer">
      
      <div className="up">
      <Logo />
      

        <div className="footer-column">
          <p className="body-small-bigger-second">Kategorie</p>
          <ul>
            {categories.map((category, index) => (
              <li key={index}><h6 className="h6-400-third">{category}</h6></li>
            ))}
          </ul>
        </div>
        {/* Renderowanie serii */}
        <div className="footer-column">
          <p className="body-small-bigger-second">Serie</p>
          <ul>
            {series.map((serie, index) => (
              <li key={index}><h6 className="h6-400-third">{serie}</h6></li>
            ))}
          </ul>
        </div>
        {/* Renderowanie menu */}
        <div className="footer-column">
          <p className="body-small-bigger-second">Menu</p>
          <ul>
            {menuItems.map((menuItem, index) => (
              <li key={index}><h6 className="h6-400-third">{menuItem}</h6></li>
            ))}
          </ul>
        </div>
        {/* Renderowanie mediów społecznościowych */}
        <div className="footer-column">
          <p className="body-small-bigger-second">Social Media</p>
          <ul>
            {socialMedia.map((media, index) => (
              <li key={index}><h6 className="h6-400-third">{media}</h6></li>
            ))}
          </ul>
        </div>
      </div>
      {/* Dolna sekcja stopki */}
      <div className="bottom-footer">
        <div className="copyright">
          <p className="body-small-smaller-second">
            Żeliwne 2023
          </p>
        </div>
        <div className="paper">
          <p className="body-small-smaller-second">Regulamin</p>
          <p className="body-small-smaller-second">Polityka prywatności</p>
          <p className="body-small-smaller-second">Polityka cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
