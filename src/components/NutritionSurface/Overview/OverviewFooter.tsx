import { MdOutlineThumbUp } from "react-icons/md";
import { MdThumbDownOffAlt } from "react-icons/md";
import useScreenSize from "../../useScreenSize";

const Footer = () => {
  const isMobile = useScreenSize();
  return (
    <>
      <div
        style={{
          marginTop: "16px",
          paddingLeft: isMobile ? 0 : "15px",
          marginBottom: isMobile ? "70px" : "45px",
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
      {/* footer banner */}
      <div
        style={{
          backgroundColor: "#F1F5F9",
          padding: "2px 10px",
          width: "100%",
          bottom: 0,
          marginTop: "18px",
          right: 0,
          left: 0,
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          textAlign: "start",
          position: "fixed",
        }}
      >
        <h1 style={{ fontWeight: 500, fontSize: "12px", lineHeight: "20px" }}>Disclaimer</h1>
        <p style={{ fontSize: "10px", marginTop: "2px", lineHeight: "15px", marginBottom: "5px" }}>
          Nutritional values, allergens, and diet information are estimates based on the ingredients
          listed on this website. For accurate details, contact the restaurant directly.
        </p>
      </div>
    </>
  );
};

export default Footer;
