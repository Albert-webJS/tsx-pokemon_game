import { MenuHeaderProps } from "./MenuHeader.props";
import { useState } from "react";
import { Menu } from "./Menu/Menu";
import { Navbar } from "./Navbar/Navbar";

export const MenuHeader = ({ bgActive }: MenuHeaderProps): JSX.Element => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleClicHamburg = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <Menu isOpen={isOpen} onClickHamburg={handleClicHamburg} />
      <Navbar
        isOpen={isOpen}
        onClickHamburg={handleClicHamburg}
        bgActive={bgActive}
      />
    </>
  );
};
