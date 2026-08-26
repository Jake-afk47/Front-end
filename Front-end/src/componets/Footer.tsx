import { Phone,Mail} from "lucide-react";

function Footer(){
    return(
        <div className="bg-gray-400 h-30 w-full">
            <div className="flex items-center justify-center">
                    <Phone/>
                    <span>123456789</span>
                </div>
                <div className="flex items-center justify-center">
                    <Mail/>
                    <span>[EMAIL_ADDRESS]</span>
                </div>
        </div>
    );
}

export default Footer;