import CategoryButton from './CategoryButton';
import { Category } from '../types';
import { CATEGORIES } from '../data';


interface CategorySelectProps {
  selected: Category | null
  setSelected: (category: Category) => void
}

const CategorySelect = ({ selected, setSelected }: CategorySelectProps) => {
  return (
    <div className="page-container">
      <h3 className="page-header">select a category</h3>
      <div id="category-select" className="select-container">
        {CATEGORIES.map((c) => (
          <CategoryButton
            key={c.label}
            category={c}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySelect;
