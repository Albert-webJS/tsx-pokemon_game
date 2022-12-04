import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import clasess from "./style.module.css";
import cn from "classnames";

interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string;
    title: string;
    urlBg?: string;
    colorBg?: string;
    children?: ReactNode
}
export const Layout = ({
  id,
  title,
  urlBg,
  colorBg,
  children
}: LayoutProps): JSX.Element => {
  const stylesSection = urlBg
    ? { backgroundImage: `url(${urlBg})` }
    : { backgroundColor: colorBg };
  return (
    <section id={id} style={stylesSection} className={clasess.root}>
      <div className={clasess.wrapper}>
        <article>
          <div className={clasess.title}>
            <h3>{title}</h3>
            <span className={clasess.separator}></span>
          </div>
          <div className={cn(clasess.desc, clasess.full)}>
            {children}
          </div>
        </article>
      </div>
    </section>
  );
};
