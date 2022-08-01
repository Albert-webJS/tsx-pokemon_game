import { useEffect, useState } from "react";
import { Input } from "./Input/Input";
import { LoginFormProps } from "./LoginForm.props";
import classes from "./LoginForm.module.css";

export const LoginForm = ({
  onSubmit,
  isResetFiled = false,
}: LoginFormProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setLogin] = useState<boolean>(true);

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isResetFiled]);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onSubmit &&
      onSubmit({
        type: isLogin ? "login" : "signup",
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
          {isLogin ? "Login" : "Signup"}
        </button>
        <div className={classes.link} onClick={() => setLogin(!isLogin)}>
          {isLogin ? "Register" : "Login"}
        </div>
      </div>
    </form>
  );
};
