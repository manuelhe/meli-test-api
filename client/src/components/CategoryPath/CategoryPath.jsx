import './CategoryPath.css';

const CategoryPath = ({items}) => {
  return items ? (
    <ul className="CategoryPath">
      {items.map((item =><li key={item}>{item}</li>))}
    </ul>
  ) : null;
};
export default CategoryPath;
