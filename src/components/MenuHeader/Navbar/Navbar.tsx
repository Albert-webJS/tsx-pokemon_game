import { NavbarProps } from "./Navbar.props";
import clasess from "./Navbar.module.css";
import cn from "classnames";
import {ReactComponent as LogoSVG} from "@assets/Logo (1).svg";
import {ReactComponent as LoginAuth} from "@assets/loginAuth.svg";

export const Navbar = ({
  bgActive,
  isOpen,
  onClickHamburg,
  onClickLogin,
}: NavbarProps) => {
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
        <div className={clasess.brand}>
          <LogoSVG />
        </div>
        <div className={clasess.loginAndMenu}>
          <div className={clasess.loginWrap} onClick={onClickLogin}>
            <LoginAuth />
          </div>
          <div
            className={cn(clasess.menuButton, {
              [clasess.active]: isOpen,
            })}
            onClick={handleClick}
          >
            <span />
          </div>
        </div>
      </div>
    </nav>
  );
};
