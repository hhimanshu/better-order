import { FaXmark } from "react-icons/fa6";
import img from "../../assets/logo.png";
interface HeaderProps {
  handleClose: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleClose }) => {
  const logo = chrome.runtime.getURL(img);
  return (
    <div className="flex justify-between p-3 items-center">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <button onClick={handleClose}>
          <FaXmark className="w-[24px] h-[24px] cursor-pointer text-[#000000] font-[400]" />
        </button>
      </div>
    </div>
  );
};

export default Header;
