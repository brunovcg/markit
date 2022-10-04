import Button from "../button";
import Icon from "../icon";
import { StyledSectionButton } from "./styles";
import { SectionTitleProps } from "./types";

function SectionTitle({ title, onClick }: SectionTitleProps) {
  return (
    <StyledSectionButton>
      <span className="dashed">---</span>
      <h2>{title}</h2>
      <Button
        variant="primary"
        size="fit-content"
        name={<Icon icon="add" />}
        round
        onClick={(e) => onClick(e)}
      />
      <span className="dashed">---</span>
    </StyledSectionButton>
  );
}
export default SectionTitle;
