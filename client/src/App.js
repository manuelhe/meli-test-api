import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path='/items' component={ListItems}/>
          <Route path='/items/:id' component={ItemDetails}/>
      </Switch>
    </div>
  );
}

const ListItems = () => {
  return (
    <h1>ListItems</h1>
  );
};

const ItemDetails = () => {
  return (
    <h1>ItemDetails</h1>
  );
};

export default App;
