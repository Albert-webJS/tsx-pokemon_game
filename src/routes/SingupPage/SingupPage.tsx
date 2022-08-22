import clasess from "./SingupPage.module.css";
import go from "../../assets/go-logo.png";
import { SingupProps } from "./SinguypProps";

export const SingupPage = ({ page }: SingupProps): JSX.Element => {
  console.log("### singup props page: ", page);
  return (
    <div className={clasess.container}>
      <h2 className={clasess.heading}>
        Finish registering and dive into a world of adventure !
        <img className={clasess.goLogo} src={go} alt="logo pokemon game" />
        <p>context page: {page}</p>
      </h2>
    </div>
  );
};
