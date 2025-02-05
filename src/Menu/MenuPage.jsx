import React, { useRef } from "react";
import MenuRight from "./MenuRight";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Menu Page
const MenuPage = (props) => {
  // Closing effects
  const menuRef = useRef(null);
  useGSAP(() => {
    if (props.menuOpen) {
      gsap.to(menuRef.current, {
        top: 0,
      }); 
    } else {
      gsap.to(menuRef.current, {
        top: "100%",
      });
    }
  }, [props.menuOpen]);

  return (
    <div
      ref={menuRef}
      className="h-screen w-full top-full bg-slate-900  z-50"
    >
      <MenuRight menuOpen={props.menuOpen} setOpen={props.setOpen} />
    </div>
  );
};

export default MenuPage;
