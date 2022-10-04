import StyledHome from "./styles";
import { useData } from "../../providers/data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CategoriesObjectType, MarksObject } from "../../providers/data/types";
import SectionTitle from "../../components/section-title";
import ButtonList from "../../components/button-list";
import Modal from "../../components/modal";
import { AddCategoryTemplate } from "./popup-templates/add-category/AddCategoryTemplate";

function Home() {
  const { data } = useData();

  const [categoryModalState, setCategoryModalState] = useState(false);

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

  const openCategoryModal = (state: boolean) => {
    console.log(!categoryModalState);
    setCategoryModalState(state);
  };

  const isSelected = !!Object.keys(selected).length;

  return (
    <StyledHome>
      <h1>Mark.it</h1>

      <SectionTitle
        title="Categories"
        onClick={() => openCategoryModal(true)}
      />

      <ButtonList data={data} onClick={handleClickCategory} />

      {isSelected && (
        <>
          <SectionTitle title="Marks" onClick={() => {}} />
          <ButtonList data={selected.marks || []} onClick={handleClickMark} />
        </>
      )}

      <Modal
        show={categoryModalState}
        setShow={setCategoryModalState}
        title="Adicionar Categoria"
        content={<AddCategoryTemplate setShow={setCategoryModalState} />}
      />
    </StyledHome>
  );
}

export default Home;
