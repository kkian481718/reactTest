import React, { useContext } from "react";
import { OpenContext } from "../context/ControlContext";

const menuContainerStyle = {
  position: "relative",
  width: "300px",
  padding: "14px",
  fontFamily: "Microsoft JhengHei",
  paddingBottom: "7px",
  backgroundColor: "white",
  border: "1px solid #E5E5E5",
};

const menuTitleStyle = {
  marginBottom: "7px",
  fontWeight: "bold",
  color: "#00a0e9",
  cursor: "pointer",
};

const menuBtnStyle = {
  position: "absolute",
  right: "7px",
  top: "33px",
  backgroundColor: "transparent",
  border: "none",
  color: "#00a0e9",
  outline: "none",
};

function Menu({ title, children }) {
  const isOpenUtil = useContext(OpenContext);
  return (
    <div style={menuContainerStyle}>
      <p style={menuTitleStyle}>{title}</p>
      <button
        style={menuBtnStyle}
        onClick={() => {
          isOpenUtil.setOpenContext(!isOpenUtil.openContext);
        }}
      >
        {isOpenUtil.openContext ? "^" : "V"}
      </button>
      {isOpenUtil.openContext ? <ul>{children}</ul> : <></>}
    </div>
  );
}

export default Menu;
