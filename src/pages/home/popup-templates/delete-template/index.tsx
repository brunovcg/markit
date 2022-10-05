import Select from "../../../../components/select";
import { IDeleteTemplateProps } from "./types";
import { useState } from "react";
import { TemplateStyled } from "../styles";
import Button from "../../../../components/button";

function DeleteTemplate({
  setShow,
  options,
  title,
  onClick,
}: IDeleteTemplateProps) {
  const [selectedValue, setSelectedValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e: string) => {
    setSelectedValue(e);
  };

  const handleClick = () => {
    if (!selectedValue) {
      return setError(true);
    }
    onClick(selectedValue);
    setShow(false);
  };
  const sortedOption = options.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <TemplateStyled>
      <Select
        ID="delete-template"
        label={`Selecione uma ${title} para deletar:`}
        options={sortedOption}
        onChange={handleChange}
        error={error}
      />

      <Button
        name="Apagar"
        variant="secondary"
        onClick={handleClick}
        size="fit-content"
      />
    </TemplateStyled>
  );
}

export default DeleteTemplate;
