import { Category } from '../types';
import CategoryButton from './CategoryButton';

interface CategorySelectProps {
  categories: Category[]
}

const CategorySelect = ({ categories }: CategorySelectProps) => {
  return (
    <div className="page-container">
      <h3 className="page-header">
        select a category
      </h3>
      <div id="category-select" className="select-container">
        {categories.map((c) => (
          <CategoryButton key={c.label} category={c} />
        ))}
      </div>
    </div>
  );
};

export default CategorySelect;
