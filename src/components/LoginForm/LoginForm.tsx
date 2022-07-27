import { useEffect, useState } from "react";
import { Input } from "./Input/Input";
import { LoginFormProps } from "./LoginForm.props";
import clasess from "./LoginForm.module.css";

export const LoginForm = ({
  onSubmit,
  isResetFiled = false,
}: LoginFormProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isResetFiled]);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onSubmit &&
      onSubmit({
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
      <button className={clasess.button}>LOGIN</button>
    </form>
  );
};
