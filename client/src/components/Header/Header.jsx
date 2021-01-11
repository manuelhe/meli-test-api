import { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import SearchBar from '../SearchBar/SearchBar';
import CategoryPath from '../CategoryPath/CategoryPath';
import { itemsState } from '../../store/stores';
import { currentCategoriesQuery } from '../../store/items.selector';
import './Header.css';

const Header = () => {
  const [searchString, setSearchString] = useState('');
  const history = useHistory();
  const setCurrentItems = useSetRecoilState(itemsState);
  const categories = useRecoilValueLoadable(currentCategoriesQuery);
  
  const search = (search) => {
    history.push(`/items?q=${search}`);
    setCurrentItems(search);
    setSearchString(search);
  };

  return (
    <>
      {searchString && <Helmet><title>Mercado Libre - resultados para {searchString}</title></Helmet>}
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
