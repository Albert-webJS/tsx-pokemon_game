import { useState, useEffect } from "react";
import clasess from "./Result.module.css";
import YouWin from "./assets/you-win.png";
import YouLose from "./assets/you-lose.png";
import Draw from "./assets/draw.png";

interface ResultProps {
  type: string;
}

export const Result = ({ type }: ResultProps): JSX.Element => {
  const [url, setUrl] = useState<any>(null);

  useEffect(() => {
    switch (type) {
      case "win":
        return setUrl(YouWin);
      case "lose":
        return setUrl(YouLose);
      case "draw":
        return setUrl(Draw);
      default:
        return setUrl(YouWin);
    }
  }, [type]);

  return (
    <div className={clasess.result}>
      <img src={url} alt="photo description result this game" />
    </div>
  );
};
