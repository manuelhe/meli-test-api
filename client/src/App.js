import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import ListItems from './containers/ListItems/ListItems';

const categories = [
  'Electrónica Audio y Video',
  'IPod',
  'Reproductores',
  'IPod Touch',
  '32 GB',
];

function App() {
  return (
    <div className="App">
      <Header categories={categories}/>
      <Switch>
          <Route exact path='/items' component={ListItems}/>
          <Route path='/items/:id' component={ItemDetails}/>
      </Switch>
    </div>
  );
}

const ItemDetails = () => {
  return (
    <h1>ItemDetails</h1>
  );
};

export default App;
