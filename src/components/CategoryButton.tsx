import { Category } from '../types';

interface CategoryButtonProps {
  category: Category
  selected: Category | null
  setSelected: (category: Category) => void
}

const CategoryButton = ({ category, selected, setSelected }: CategoryButtonProps) => {
  const { label } = category;

  const style = category === selected ? ' selected-category' : '';

  return (
    <button
      type="button"
      className={`btn category-btn${style}`}
      onClick={() => setSelected(category)}
    >
      {label}
    </button>
  );
};

export default CategoryButton;
