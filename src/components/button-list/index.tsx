import { ButtonListProps } from "./types";
import Button from "../../components/button";
import StyledButtonList from "./styles";

function ButtonList({ data, onClick, selectedId }: ButtonListProps) {
  return (
    <StyledButtonList>
      {data?.map((item) => {
        const { id, color, name } = item;
        return (
          <Button
            key={id}
            name={name}
            color={color}
            onClick={(e) => onClick(e, item)}
            size="fit-content"
            outlineColor={selectedId === id ? "var(--secondary)" : ""}
          />
        );
      })}
    </StyledButtonList>
  );
}

export default ButtonList;
