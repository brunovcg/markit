import { ButtonListProps } from "./types";
import Button from "../../components/button";

function ButtonList({ data, onClick }: ButtonListProps) {
  return (
    <section className="category">
      <div className="button-list">
        {data?.map((item) => {
          const { id, color, name } = item;
          return (
            <Button
              key={id}
              name={name}
              color={color}
              onClick={(e) => onClick(e, item)}
              size="fit-content"
            />
          );
        })}
      </div>
    </section>
  );
}

export default ButtonList;
