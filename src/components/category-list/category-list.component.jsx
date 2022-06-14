import CategoryItem from "../category-item/category-item.component"

const CategoryList = ({categories}) => {
  return (
    <div clasName="categories-container">
       {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
  )
}

export default CategoryList;