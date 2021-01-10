import { Link } from 'react-router-dom';
import './ListItem.css';

const ListItem = ({ itemDetails }) => {
  return (
    <section className="ListItem">
      <Link className="link" to={`/items/${itemDetails.id}`}>
        <figure>
          <img src={itemDetails.picture} alt={itemDetails.title} />
        </figure>
        <div className="details">
          <h2>
            {new Intl.NumberFormat('es-AR', { style: 'currency', currency: itemDetails.price.currency, minimumFractionDigits: 0 }).format(itemDetails.price.ammount)}
            {itemDetails.free_shipping && <span className="free-shipping"></span>}
          </h2>
          <h3>
            {itemDetails.title}
          </h3>
        </div>
        <div className="location">
          {itemDetails.location}
        </div>
      </Link>
    </section>
  );
};

export default ListItem;
