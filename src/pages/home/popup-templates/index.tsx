import { TemplateStyled } from "./styles";
import { useState } from "react";
import { PopupTemplateHandleOptionsType, IPopupTemplatesProps } from "./types";
import Button from "../../../components/button";

function PopupTemplates({ template1, template2 }: IPopupTemplatesProps) {
  const [renderOption, setRenderOption] =
    useState<PopupTemplateHandleOptionsType>(0);

  const handleRender = (option: PopupTemplateHandleOptionsType) =>
    setRenderOption(option);

  const renderer = (renderOption: PopupTemplateHandleOptionsType) => {
    switch (renderOption) {
      case 1:
        return template1;

      case 2:
        return template2;
    }
  };

  return (
    <TemplateStyled>
      <div className="buttons">
        <Button
          name="Adicionar"
          onClick={() => handleRender(1)}
          size="fit-content"
          variant="primary"
          outlineColor={renderOption === 1 ? "var(--secondary)" : ""}
        />
        <Button
          name="Deletar"
          onClick={() => handleRender(2)}
          size="fit-content"
          variant="tertiary"
          outlineColor={renderOption === 2 ? "var(--secondary)" : ""}
        />
      </div>

      {renderer(renderOption)}
    </TemplateStyled>
  );
}

export default PopupTemplates;
