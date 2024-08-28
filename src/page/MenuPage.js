import React, { useState } from "react";

import MenuItem from "../component/MenuItem";
import Menu from "../component/Menu";
import { OpenContext } from "../context/ControlContext";

let menuItemWording = ["Like的發問", "Like的回答", "Like的文章", "Like的留言"];

const MenuPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  let menuItemArr = menuItemWording.map((wording) => (
    <MenuItem text={wording} />
  ));

  return (
    <OpenContext.Provider
      value={{
        openContext: isOpen,
        setOpenContext: setIsOpen,
      }}
    >
      <Menu title={"Andy Chang的like"}>{menuItemArr}</Menu>
    </OpenContext.Provider>
  );
};

export default MenuPage;
