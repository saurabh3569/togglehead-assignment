import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{
        background: "#2ecc71",
        padding: "40px 0",
        marginTop: "40px",
        opacity: 1,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          color: "#fff",
        }}
      >
        {/* Email & Phone */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            marginBottom: "20px",
          }}
        >
          {/* Email */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              <FaEnvelope style={{ marginRight: "8px" }} /> Email ID
            </div>
            <div>example@xyz.com</div>
          </div>

          {/* Phone */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              <FaPhone style={{ marginRight: "8px" }} /> Phone
            </div>
            <div>+91 12345 67890</div>
          </div>
        </div>

        {/* Social Links */}
        <div style={{ marginBottom: "20px" }}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "#fff", fontSize: "20px" }}
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "#fff", fontSize: "20px" }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "#fff", fontSize: "20px" }}
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "#fff", fontSize: "20px" }}
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Footer Info */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.3)",
            paddingTop: "15px",
            fontSize: "14px",
          }}
        >
          <span style={{ margin: "0 10px", cursor: "pointer" }}>
            Terms & Condition
          </span>
          |
          <span style={{ margin: "0 10px", cursor: "pointer" }}>
            Privacy Policy
          </span>
          |
          <span style={{ margin: "0 10px", cursor: "pointer" }}>
            Copyright Reserved @xyz
          </span>
          |
          <span style={{ margin: "0 10px", cursor: "pointer" }}>
            Crafted by @togglehead.in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
