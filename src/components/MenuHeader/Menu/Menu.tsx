import { MenuItem, MENU } from "./MenuItem";
import { Link } from "react-router-dom";
import clasess from "./Menu.module.css";
import cn from "classnames";
import { usePageContex } from "../../../context";

interface MenuProps {
  onClickHamburg: () => void,
  isOpen: boolean
}

export const Menu = ({ isOpen, onClickHamburg }: MenuProps) => {
  const { onChangePage } = usePageContex();
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
