import React from "react";

const Navbar = () => {
  const navItems = [
    { name: "Story", link: "#" },
    { name: "Our Products", link: "#products" },
    { name: "Store Location", link: "#" },
    { name: "Kitchen", link: "#" },
    { name: "Media", link: "#" },
    { name: "Blogs", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        background: "#fff",
        padding: "20px 20px",
        display: "flex",
        justifyContent: "flex-end",
        gap: "20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.link}
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
            margin: "0 10px",
          }}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
