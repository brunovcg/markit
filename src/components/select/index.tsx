import { SelectStyled } from "./styles";
import { ISelect } from "./types";

function Select({ options = [], onChange, label, ID, error }: ISelect) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <SelectStyled>
      {label && <label htmlFor={ID}>{label}</label>}
      <select onChange={(e) => handleChange(e)} defaultValue="default">
        <option value="default" disabled>
          {error ? "Necessário escolher uma opção" : "Escolha uma opção"}
        </option>
        {options.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </SelectStyled>
  );
}

export default Select;
