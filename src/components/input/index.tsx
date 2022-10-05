import { InputStyled } from "./styles";
import { IInput } from "./types";

function Input({ ID, label, onChange, error = false, type = "text" }: IInput) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputStyled>
      {label && <label htmlFor={ID}>{label}</label>}
      <input
        id={ID}
        placeholder={error ? "esse campo é obrigatório" : ""}
        onChange={(e) => handleChange(e)}
        type={type}
      />
    </InputStyled>
  );
}

export default Input;
