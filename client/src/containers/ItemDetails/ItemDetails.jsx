import './ItemDetails.css';

const itemDetails = {
  id: 'MLA901457937',
  title: 'Given 01 - Natsuki Kizu - Panini Manga',
  price: {
    currency: 'ARS',
    ammount: 490,
    // Get decimal values from price returned by the endpoint
    decimals: 15,
  },
  picture: 'https://http2.mlstatic.com/D_806455-MLA44359919998_122020-O.jpg',
  condition: 'new',
  free_shipping: true,
  sold_quantity: 100,
  description: '¡ENVIAMOS CON NORMALIDAD EN CUARENTENA! Libreria MD y Comic Store Quienes somos: Somos una tienda con presencia física y online. Especializados en Mangas, Comics, Libros, Juegos de mesa y Juguetes. Trabajamos con diferentes editoriales locales e internacionales. Enviamos a TODO el país. ------------------------------------------------------------------------------------------------------------ ENVIOS GRATIS: Si agregas artículos al carrito y superas los $2500 tenes envío SIN CARGO a todo el país( está sujeto al peso, precio y la distancia del envío). Visitá nuestros artículos para sumar en: https://eshops.mercadolibre.com.ar/libreria+md ------------------------------------------------------------------------------------------------------------ MERCADO ENVIOS FLEX: -Entregas en el día CABA, Zona Norte, Oeste y Sur La compras despachadas por este medio se entregan en el día entre las 15 hrs y 21 hrs. Por favor, indicar referencias, un celular, y domicilio donde en la tarde estén para esperarlo. ------------------------------------------------------------------------------------------------------------ Compras: Comprá varias cosas y pagá UN SOLO ENVÍO Entrá a nuestro SHOP y agregá al carrito lo que más te guste para abonar solo un envió https://eshops.mercadolibre.com.ar/libreria+md ------------------------------------------------------------------------------------------------------------ MERCADO ENVIOS FULL: Significa que la publicación está en el depósito de Mercado Libre en el cual te va a llegar más rápido y seguro, debido a que está listo para despachar. También podés sumar al carrito las publicaciones que digan FULL. ------------------------------------------------------------------------------------------------------------ Despachos: Despachamos 24 horas a partir de su compra. Algunas compras se despachan en el mismo día de recibidas. El envío se realiza a través de Mercado Envíos. ----------------------------------------------------------------------------------------------------------------- Retiros: Los retiros se realizan en nuestras tiendas, de lunes a Sábados de 8 a 11.30 horas. Por favor NO insista con otros horarios o puntos de encuentro. Cuando venga a retirar, que sea luego de nuestro aviso de pedido preparado. Si no viene a retirar el titular de la compra se debe autorizar a la persona que retira. En todos los casos la persona que retira, sea titular o autorizado, debe presentar su DNI. -------------------------------------------------------------------------------------------------------------- Formas de pago: Mercado Pago y sus múltiples opciones',
};

const ItemsDetails = () => {
  return (
    <main className="ItemsDetails">
      <figure>
        <img src={itemDetails.picture} alt={itemDetails.title}></img>
      </figure>
      <section className="item-info">
        <h4>
          <span>{itemDetails.condition === 'new' ? 'Nuevo' : 'Usado'}</span> - <span>{itemDetails.sold_quantity} vendidos</span>
        </h4>
        <h2>{itemDetails.title}</h2>
        <h3>
          {new Intl.NumberFormat('es-AR', { style: 'currency', currency: itemDetails.price.currency, minimumFractionDigits: 0 }).format(itemDetails.price.ammount)}
          <sup>{`${itemDetails.price.decimals}`.padStart('0')}</sup>
        </h3>
        <button className="main-action">Comprar</button>
      </section>
      <section className="item-description">
        <h2>Descripción del Producto</h2>
        <p>
          {itemDetails.description}
        </p>
      </section>
    </main>
  );
};

export default ItemsDetails;
