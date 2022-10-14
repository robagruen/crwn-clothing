import './CategoryDirectory.styles.scss';

import CategoryItem from './../../components/CategoryItem/CategoryItem.component';

const CategoryDirectory = ({ categories }) => {
  return (
    <div className="category-directory-container">
      {
        categories.map((category) => (
          <CategoryItem key={ category.id } category={ category } />
        ))
      }  
    </div>
  );
}

export default CategoryDirectory;