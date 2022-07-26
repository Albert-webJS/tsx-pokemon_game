import clasess from "./Input.module.css";
import { InputProps } from "./Input.props";

export const Input = ({
  value,
  label,
  type,
  name,
  onChange,
}: InputProps): JSX.Element => {
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };
  return (
    <div className={clasess.root}>
      <input
        className={clasess.input}
        type={type}
        value={value}
        name={name}
        onChange={handleClick}
        required
      />
      <span className={clasess.highlight}></span>
      <span className={clasess.bar}></span>
      <label className={clasess.label}>{label}</label>
    </div>
  );
};
