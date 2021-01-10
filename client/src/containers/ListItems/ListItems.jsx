import ListItem from '../../components/ListItem/ListItem';
import './ListItems.css';

const ListItems = () => {
  const resultItems = [
    {
      id: 'NMS29834SD4',
      price: {
        currency: 'ARS',
        ammount: 7234,
        decimal: 0,
      },
      free_shipping: true,
      title: 'Super duper buffed tornillo sónico de grado militar',
      picture: 'http://http2.mlstatic.com/D_977520-MLA44340358527_122020-O.jpg',
      location: 'Península de La Concordia y San Rafael'
    },
    {
      id: 'MS46p24SD4',
      price: {
        currency: 'ARS',
        ammount: 170000,
        decimal: 0,
      },
      free_shipping: false,
      title: 'iPhone 11 128 Gb Verde',
      picture: 'http://http2.mlstatic.com/D_652261-MLA43654417418_102020-I.jpg',
      location: 'Capital Federal'
    },
];

  return (
    <main className="ListItems">
      {resultItems.map((item => <ListItem itemDetails={item} />))}
    </main>
  );
};

export default ListItems;
