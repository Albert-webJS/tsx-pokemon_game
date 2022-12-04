import { format } from "date-fns";

import clasess from "./Footer.module.css";

interface FooterProps {
  bgActive: boolean;
}

export const Footer = ({ bgActive }: FooterProps): JSX.Element => {
  return (
    <footer className={bgActive ? clasess.bgActive : ""}>
      <div className={clasess.wrapper}>
        <h3>THANKS FOR VISITING</h3>
        <p>© {format(new Date(), "yyyy")} AlbertPivnenko</p>
      </div>
    </footer>
  );
};
