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
  description: '- EL KIT SOLAR INCLUYE -\n\n• 1 Panel de 75W policristalino (Vida útil 30 años). Medidas en milímetros (780 x 670).\n\n• 1 Regulador de carga 10 A (Inteligente con pantalla y USB).\n\n• 1 Batería Solar de 45Ah.\n\n• 1 Inversor de 12V a 220V - 300W Onda Modificada (con USB).\n\n• Todos los cables y bornes para su conexión.\n\n• Soporte de aluminio para el panel adaptable a cualquier superficie.\n\n\n- EJEMPLOS DE USO -\n\n• Por 4 a 6 horas\n5 Lámparas de 5W\n1 Modem WiFi\n1 Cargador de celular\n\n• Por 3 a 5 Horas\n3 Lámparas de 5W\n1 Modem WiFi\n1 Notebook\n\n• Por 3 a 5 horas\n1 DVR con 4 cámaras\n\n• Por 4 a 6 horas\n5 Lámparas de 5W\n1 Radio\n1 Cargador de celular\n\n• Por 3 a 4 horas\n1 TV\n1 Deco\n1 Cargador de celular\n\n• También podes enchufar lo que necesites, que no supere los 300W.\n\n\n- MEDIOS DE PAGO -\n\n• Todos los medios que ofrece Mercado Pago.\n\n• Realizamos factura A y B.\n\n\n- TU CONSULTA NO MOLESTA -\n\n• Sentite con seguridad, preguntanos todas tus dudas.\n\n• También armamos kits completos a la medida de tus consumos.\n\n\n- UBICACIÓN -\n\n• Estamos en Lanús.\n• Horario: Lu a Vie de 9:00 a 17:00.\n\n\n- MIRA TODOS NUESTROS PRODUCTOS -\n\nhttp://eshops.mercadolibre.com.ar/KIT-SOLAR/\n\n\n- KIT SOLAR -\n\n• Somos una empresa con más de 10 años de experiencia en energías alternativas.\nKIT SOLAR es la marca más confiable del mercado gracias al cuidadoso armado y a sus componentes de primera calidad.\nLos que hacemos KIT SOLAR cuidamos cada detalle en el armado y el dimensionado.\nCon nosotros tenés la seguridad de que lo que compres es lo que vas a recibir.',
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
