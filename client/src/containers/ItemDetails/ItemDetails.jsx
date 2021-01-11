import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { itemDetailsState } from '../../store/stores';
import { currentItemQuery } from '../../store/itemDetails.selector';
import './ItemDetails.css';

const ItemsDetails = () => {
  const { id } = useParams();
  const setCurrentItem = useSetRecoilState(itemDetailsState);
  setCurrentItem(id);

  const itemDetails = useRecoilValueLoadable(currentItemQuery);

  return (
    <main className="ItemsDetails">
      {itemDetails.state === 'loading' &&  <div>Cargando...</div>}
      {itemDetails.state === 'hasError' &&  <div>Un error inesperado ha ocurrido. Inténtalo de nuevo</div>}
      {itemDetails.state === 'hasValue' && itemDetails.getValue() && (
        <>
          <Helmet>
            <title>Mercado Libre - {itemDetails.getValue().title}</title>
          </Helmet>
          <figure>
            <img src={itemDetails.getValue().picture} alt={itemDetails.getValue().title}></img>
          </figure>
          <section className="item-info">
            <h4>
              <span>{itemDetails.getValue().condition === 'new' ? 'Nuevo' : 'Usado'}</span> - <span>{itemDetails.getValue().sold_quantity} vendidos</span>
            </h4>
            <h2>{itemDetails.getValue().title}</h2>
            <h3>
              {new Intl.NumberFormat('es-AR', { style: 'currency', currency: itemDetails.getValue().price.currency, minimumFractionDigits: 0 }).format(itemDetails.getValue().price.ammount)}
              <sup>{`${itemDetails.getValue().price.decimals}`.padStart(2, '0')}</sup>
            </h3>
            <button className="main-action">Comprar</button>
          </section>
          <section className="item-description">
            <h2>Descripción del Producto</h2>
            <p>
              {itemDetails.getValue().description}
            </p>
          </section>
        </>
     )}
    </main>
  );
};

export default ItemsDetails;
