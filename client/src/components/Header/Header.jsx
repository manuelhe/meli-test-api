import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import SearchBar from '../SearchBar/SearchBar';
import CategoryPath from '../CategoryPath/CategoryPath';
import { itemsState } from '../../store/items.store';
import { currentCategoriesQuery } from '../../store/items.selector';
import './Header.css';

const Header = () => {
  const history = useHistory();
  const setCurrentItems = useSetRecoilState(itemsState);
  const categories = useRecoilValueLoadable(currentCategoriesQuery);
  
  const search = (searchString) => {
    history.push(`/items?q=${searchString}`);
    setCurrentItems(searchString);
  };

  return (
    <>
      <header className="HeaderBar">
        <div className="HeaderContent">
          <h1><Link to="/" className="homeLink"><span>Mercado Libre</span></Link></h1>
          <SearchBar searchCallback={search}/>
        </div>
    </header>
    {categories.state === 'hasValue' && <CategoryPath items={categories.getValue()} />}
    </>
  );
}

export default Header;
