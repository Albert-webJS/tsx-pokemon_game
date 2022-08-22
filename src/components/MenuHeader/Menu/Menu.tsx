import { MenuItem, MENU } from "./MenuItem";
import { MenuProps } from "./Menu.props";
import { Link } from "react-router-dom";
import clasess from "./Menu.module.css";
import cn from "classnames";
import { useContext } from "react";
import { PageContext } from "../../../context";

export const Menu = ({ isOpen, onClickHamburg }: MenuProps) => {
  const { onChangePage } = useContext(PageContext);
  const handleClick = (): void => {
    onClickHamburg && onClickHamburg();
  };
  const handlePathPage = (path: string) => {
    onChangePage && onChangePage(path);
  };
  return (
    <div
      className={cn(clasess.menuContainer, {
        [clasess.active]: isOpen === true,
        [clasess.deactive]: isOpen === false,
      })}
    >
      <div className={clasess.overlay} />
      <div className={clasess.menuItems}>
        <ul>
          {MENU.map(({ id, title, path }: MenuItem) => (
            <li key={id}>
              <Link
                to={path}
                onClick={() => {
                  handleClick();
                  handlePathPage(path);
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
