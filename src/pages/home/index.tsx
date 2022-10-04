import StyledHome from "./styles";
import { useData } from "../../providers/data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CategoriesObjectType, MarksObject } from "../../providers/data/types";
import SectionTitle from "../../components/section-title";
import ButtonList from "../../components/button-list";

function Home() {
  const { data } = useData();
  const [selected, setSelected] = useState<CategoriesObjectType>(
    {} as CategoriesObjectType
  );
  const navigate = useNavigate();

  const handleClickCategory = (
    e: React.MouseEvent<HTMLButtonElement>,
    selected: CategoriesObjectType
  ) => {
    setSelected(selected);
  };

  const handleClickMark = (
    e: React.MouseEvent<HTMLButtonElement>,
    mark: MarksObject
  ) => {
    navigate(`/category/${mark.id}`, { state: { mark } });
  };

  const isSelected = !!Object.keys(selected).length;

  return (
    <StyledHome>
      <h1>Mark.it</h1>

      <SectionTitle title="Categories" onClick={() => {}} />

      <ButtonList data={data} onClick={handleClickCategory} />

      {isSelected && (
        <>
          <SectionTitle title="Marks" onClick={() => {}} />
          <ButtonList data={selected.marks || []} onClick={handleClickMark} />
        </>
      )}
    </StyledHome>
  );
}

export default Home;
