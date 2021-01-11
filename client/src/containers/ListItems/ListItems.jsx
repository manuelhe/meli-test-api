import { useRecoilValueLoadable } from 'recoil';
import ListItem from '../../components/ListItem/ListItem';
import { currentItemsQuery } from '../../store/items.selector';
import './ListItems.css';

const ListItems = () => {
  const resultItems = useRecoilValueLoadable(currentItemsQuery);

  return (
    <main className="ListItems">
      {resultItems.state === 'hasValue' && resultItems.getValue() && resultItems.getValue().map((item => <ListItem key={item.id} itemDetails={item} />))}
      {resultItems.state === 'loading' &&  <div>Cargando...</div>}
      {resultItems.state === 'hasError' &&  <div>Un error inesperado ha ocurrido. Inténtalo de nuevo</div>}
    </main>
  );
};

export default ListItems;
