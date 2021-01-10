import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { useHistory } from 'react-router-dom';
import CategoryPath from '../CategoryPath/CategoryPath';
import './Header.css';

const Header = ({categories}) => {
  const history = useHistory();
  const search = (val) => {
    history.push(`/items?q=${val}`)
  };

  return (
    <>
      <header className="HeaderBar">
        <div className="HeaderContent">
          <h1><Link to="/" className="homeLink"><span>Mercado Libre</span></Link></h1>
          <SearchBar searchCallback={search}/>
        </div>
    </header>
    {categories && <CategoryPath items={categories} />}
    </>
  );
}

export default Header;
