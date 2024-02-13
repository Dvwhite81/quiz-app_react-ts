import { Category } from '../types';

interface CategoryButtonProps {
  category: Category;
  selected: Category | null;
  setSelected: (category: Category) => void;
  usedCategories: Category[];
}

const CategoryButton = ({
  category,
  selected,
  setSelected,
  usedCategories,
  }: CategoryButtonProps) => {
  const { label } = category;

  const style = category === selected ? ' selected-btn' : '';
  const isDisabled = usedCategories.includes(category);
  return (
    <button
      type="button"
      className={`btn category-btn${style}`}
      onClick={() => setSelected(category)}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default CategoryButton;
