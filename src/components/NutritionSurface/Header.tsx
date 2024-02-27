import { FaXmark } from "react-icons/fa6";
interface HeaderProps {
  handleClose: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleClose }) => {
  return (
    <div className="flex justify-between p-3 items-center">
      <div>
        <img src="https://app.bettermenu.live/bettermenu-logo.svg" alt="logo" />
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
