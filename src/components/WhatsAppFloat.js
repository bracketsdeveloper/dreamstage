// WhatsAppFloat.js
import React from "react";

const WhatsAppFloat = () => {
  const phoneNumber = "918880472070"; // Replace with your WhatsApp number (with country code)
  const message = "Hi, I'm interested!"; // Optional preset message
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const iconStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
  };

  const iconImgStyle = {
    width: "35px",
    height: "35px",
  };

  return (
    <div style={iconStyle} onClick={() => window.open(whatsappURL, "_blank")}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        style={iconImgStyle}
      />
    </div>
  );
};

export default WhatsAppFloat;
