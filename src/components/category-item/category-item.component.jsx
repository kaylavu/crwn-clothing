import './category-item.styles.scss'

const CategoryItem = ({category, key}) => {
  return (
    <div key={key} className="category-container"> 
    <div className="background-image" style={{backgroundImage: `url(${category.imageUrl})`}} />
    <div className="category-body-container">
      <h2>{category.title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
  )
}

export default CategoryItem