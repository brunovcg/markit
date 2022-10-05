import { useState } from "react";
import Button from "../../../../components/button";
import Input from "../../../../components/input";
import { TemplateStyled } from "../styles";
import { IAddTemplateProps } from "./types";

export function AddTemplate({ setShow, title, onClick }: IAddTemplateProps) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#000");
  const [error, setError] = useState(false);

  const handleChangeName = (e: string) => {
    setName(e);
    setError(false);
  };

  const handleChangeColor = (e: string) => {
    setColor(e);
  };

  const handleClick = () => {
    if (!name) {
      return setError(true);
    }
    onClick(name, color);
    setShow(false);
  };

  return (
    <TemplateStyled>
      <Input
        ID="add-name-template"
        label={`Nome da ${title}`}
        onChange={handleChangeName}
        error={error}
      />

      <Input
        ID="add-name-color"
        label="Escolha a cor"
        onChange={handleChangeColor}
        type="color"
      />

      <Button
        name="Criar"
        variant="secondary"
        onClick={handleClick}
        size="fit-content"
      />
    </TemplateStyled>
  );
}
