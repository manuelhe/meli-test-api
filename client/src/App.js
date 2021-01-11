import { Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './components/Header/Header';
import ItemsDetails from './containers/ItemDetails/ItemDetails';
import ListItems from './containers/ListItems/ListItems';

function App() {
  return (
    <RecoilRoot>
        <div className="App">
          <Header/>
          <Switch>
              <Route exact path='/items' component={ListItems}/>
              <Route path='/items/:id' component={ItemsDetails}/>
          </Switch>
        </div>
    </RecoilRoot>
  );
}

export default App;
