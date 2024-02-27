import "./style.css";
import { FaWhatsapp } from "react-icons/fa6";

function NeedHelp() {
  return (
    <div className="need-help">
      <p className="need-help-p">Need help?</p>
      <p className="need-help-p">Call us on +994 55 555 55 55</p>

      <a
        className="need-help-a" 
        target="_blank"
        rel="noopener noreferrer"
        href="https://cdn.textstudio.com/output/sample/normal/8/4/9/4/hello-logo-73-4948.png"
      >
        <FaWhatsapp className="need-help-wp-icon" />
        SEND US A MESSAGE
      </a>
    </div>
  );
}

export default NeedHelp;
