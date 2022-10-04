import { useState } from "react";
import Button from "../../../../components/button";
import Input from "../../../../components/input";
import { TemplateStyled } from "./styles";
import { IAddCategoryTemplateProps } from "./types";

export function AddCategoryTemplate({ setShow }: IAddCategoryTemplateProps) {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e: string) => {
    setName(e);
    setError(false);
  };

  const handleClick = () => {
    if (!name) {
      return setError(true);
    }
    setShow(false);
  };

  return (
    <TemplateStyled>
      <Input
        ID="add-category-temaple"
        label="Nome da categoria"
        onChange={handleChange}
        error={error}
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
