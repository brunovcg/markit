import StyledHome from "./styles";
import { useData } from "../../providers/data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ICategoriesObject, IMarksObject } from "../../providers/data/types";
import SectionTitle from "../../components/section-title";
import ButtonList from "../../components/button-list";
import Modal from "../../components/modal";
import PopupTemplates from "./popup-templates";
import { AddTemplate } from "./popup-templates/add-template";
import DeleteTemplate from "./popup-templates/delete-template";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const { data, createCategory, deleteCategory, createMark, deleteMark } =
    useData();

  const [categoryModalState, setCategoryModalState] = useState(false);
  const [markModalState, setMarkModalState] = useState(false);
  const [selected, setSelected] = useState<ICategoriesObject>(
    {} as ICategoriesObject
  );

  const navigate = useNavigate();

  const handleClickCategory = (
    e: React.MouseEvent<HTMLButtonElement>,
    selected: ICategoriesObject
  ) => {
    setSelected(selected);
  };

  const handleClickMark = (
    e: React.MouseEvent<HTMLButtonElement>,
    mark: IMarksObject
  ) => {
    navigate(`/category/${mark.id}`, {
      state: { mark, categoryId: selected.id },
    });
  };

  const openCategoryModal = (state: boolean) => {
    setCategoryModalState(state);
  };

  const openMarkModal = (state: boolean) => {
    setMarkModalState(state);
  };

  const handleAddCategory = (name: string, color: string) =>
    createCategory({
      id: uuidv4(),
      name: name,
      color: color,
      marks: [],
    });

  const handleDeleteCategory = (categoryId: string) =>
    deleteCategory(categoryId);

  const handleAddMark = (name: string, color: string) => {
    createMark(selected.id, {
      id: uuidv4(),
      name: name,
      color: color,
      entries: [],
    });
  };

  const handleDeleteMark = (markId: string) => {
    deleteMark(selected.id, markId);
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
          <SectionTitle title="Marks" onClick={openMarkModal} />
          <ButtonList data={selected.marks || []} onClick={handleClickMark} />
        </>
      )}

      <Modal
        show={categoryModalState}
        setShow={setCategoryModalState}
        title="Editar Categorias"
        content={
          <PopupTemplates
            template1={
              <AddTemplate
                setShow={setCategoryModalState}
                title="Categoria"
                onClick={handleAddCategory}
              />
            }
            template2={
              <DeleteTemplate
                setShow={setCategoryModalState}
                options={data}
                title="Categoria"
                onClick={handleDeleteCategory}
              />
            }
          />
        }
      />

      <Modal
        show={markModalState}
        setShow={setMarkModalState}
        title="Editar Marks"
        content={
          <PopupTemplates
            template1={
              <AddTemplate
                setShow={setMarkModalState}
                title="Mark"
                onClick={handleAddMark}
              />
            }
            template2={
              <DeleteTemplate
                setShow={setMarkModalState}
                options={selected.marks}
                title="Mark"
                onClick={handleDeleteMark}
              />
            }
          />
        }
      />
    </StyledHome>
  );
}

export default Home;
