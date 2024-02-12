import { Category } from '../types';

interface CategoryButtonProps {
  category: Category
}

const CategoryButton = ({ category }: CategoryButtonProps) => {
  const { label } = category;

  return (
    <button
      type="button"
      className="btn category-btn"
      onClick={() => console.log(label)}
    >
      {label}
    </button>
  );
};

export default CategoryButton;
