/* eslint-disable react/jsx-filename-extension */
/* eslint-disable quotes */

import React, { useMemo } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

function UserIcon() {
  const iconsSize = useMemo(
    () => ({
      size: "60px",
    }),
    [],
  );
  return (
    <IconContext.Provider value={iconsSize}>
      <div>
        <FaUserCircle />
      </div>
    </IconContext.Provider>
  );
}

export default UserIcon;
