import { NavbarProps } from "./Navbar.props";
import clasess from "./Navbar.module.css";
import cn from "classnames";

export const Navbar = ({ bgActive, isOpen, onClickHamburg }: NavbarProps) => {
  const handleClick = (): void => {
    onClickHamburg && onClickHamburg();
  };
  return (
    <nav
      id={clasess.navbar}
      className={cn(clasess.root, {
        [clasess.bgActive]: bgActive,
      })}
    >
      <div className={clasess.navWrapper}>
        <p className={clasess.brand}>LOGO</p>
        <div
          className={cn(clasess.menuButton, {
            [clasess.active]: isOpen,
          })}
          onClick={handleClick}
        >
          <span />
        </div>
      </div>
    </nav>
  );
};
