import { MdOutlineThumbUp } from "react-icons/md";
import { MdThumbDownOffAlt } from "react-icons/md";
import useScreenSize from "../../useScreenSize";

const Footer = () => {
  const isMobile = useScreenSize();
  return (
    <div
      style={{
        marginTop: "16px",
        paddingLeft: isMobile ? 0 : "15px",
        marginBottom: isMobile ? "70px" : "40px",
        display: "flex",
        justifyContent: isMobile ? "start" : "space-between",
        alignItems: isMobile ? "start" : "center",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <div>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#334155",
            borderRadius: "6px",
            color: "white",
            fontSize: "14px",
            lineHeight: "24px",
          }}
        >
          Request Accurate Nutrition
        </button>
      </div>
      <div style={{ display: "flex", gap: "30px", marginTop: isMobile ? "10px" : 0 }}>
        <p style={{ fontSize: "10px", fontWeight: 400, lineHeight: "20px" }}>
          Did you find this useful?
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <MdOutlineThumbUp style={{ width: "16px", height: "16px", cursor: "pointer" }} />
          <MdThumbDownOffAlt style={{ width: "16px", height: "16px", cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
