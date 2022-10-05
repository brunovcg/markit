import Button from "../button";
import { StyledSectionButton } from "./styles";
import { SectionTitleProps } from "./types";

function SectionTitle({ title, onClick }: SectionTitleProps) {
  return (
    <StyledSectionButton>
      <span className="dashed">---</span>
      <Button
        variant="primary"
        size="fit-content"
        name={<h2>{title}</h2>}
        onClick={(e) => onClick(e)}
      />
      <span className="dashed">---</span>
    </StyledSectionButton>
  );
}
export default SectionTitle;
