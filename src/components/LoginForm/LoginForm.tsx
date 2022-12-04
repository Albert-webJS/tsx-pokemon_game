import { useEffect, useState } from "react";
import { TypeUserInfo } from "../../types";
import { Input } from "./Input/Input";
import classes from "./LoginForm.module.css";

interface LoginFormProps {
  onSubmit: (props: TypeUserInfo) => void;
  isResetFiled?: boolean;
}

export const LoginForm = ({
  onSubmit,
  isResetFiled = false,
}: LoginFormProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [onLogin, setLogin] = useState<boolean>(true);
  const [onRegister, setRegister] = useState<boolean>(false);

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isResetFiled]);

  const handleChangeAuth = (): void => {
    setLogin((prevState) => !prevState);
    setRegister((prevState) => !prevState);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onSubmit &&
      onSubmit({
        onLogin,
        onRegister,
        email,
        password,
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={email}
        type="email"
        label="Email"
        name="email"
        onChange={setEmail}
      />
      <Input
        value={password}
        type="password"
        label="Password"
        name="password"
        onChange={setPassword}
      />
      <div className={classes.flex}>
        <button className={classes.button}>
          {onRegister ? "Login" : "Register"}
        </button>
        <div className={classes.link} onClick={handleChangeAuth}>
          {onLogin ? "Login" : "Signup"}
        </div>
      </div>
    </form>
  );
};
