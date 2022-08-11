import { NavbarProps } from "./Navbar.props";
import clasess from "./Navbar.module.css";
import cn from "classnames";
import { ReactComponent as LogoSVG } from "@assets/Logo (1).svg";
import { ReactComponent as LoginAuth } from "@assets/loginAuth.svg";
import { ReactComponent as UserSVG } from "@assets/userSVG.svg";
import { useSelector } from "react-redux";
import { secectGetLocalId, selectUserLoading } from "../../../store/user/user";

export const Navbar = ({
  bgActive,
  isOpen,
  onClickHamburg,
  onClickLogin,
}: NavbarProps) => {
  const isLoadingUser = useSelector(selectUserLoading);
  const localId = useSelector(secectGetLocalId);
  console.log("isLoadingUser:", isLoadingUser);
  console.log("localId:", localId);
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
          {!isLoadingUser && !localId && (
            <div className={clasess.loginWrap} onClick={onClickLogin}>
              <LoginAuth />
            </div>
          )}
          {!isLoadingUser && localId && (
            <div className={clasess.loginWrap} onClick={onClickLogin}>
              <UserSVG />
            </div>
          )}
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
