import "../App.scss";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import Whatsapp from "../assets/Twitter.png";
import Twitter from "../assets/Whatsapp.png";
import Youtube from "../assets/Youtube.png";
import GooglePlay from "../assets/googleplay.png";
import AppStore from "../assets/AppStore.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-terms">
        <h4>&#169; 2023-2023 SendMeMoney</h4>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Privacy</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Legal</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          Acessibility Statement
        </a>
      </div>
      <div className="footer-links">
        <div className="socials">
          <a href="https://www.facebook.com/">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/adomas-kazlauskas/">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://www.whatsapp.com/">
            <img src={Whatsapp} alt="Whatsapp" />
          </a>
          <a href="https://twitter.com/">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={Youtube} alt="Youtube" />
          </a>
        </div>
        <div className="app-stores">
          <a href="https://play.google.com/store/games?device=windows&pli=1">
            <img src={GooglePlay} alt="GooglePlay" />
          </a>
          <a href="https://www.apple.com/app-store/">
            <img src={AppStore} alt="AppStore" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
