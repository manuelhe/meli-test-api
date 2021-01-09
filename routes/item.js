const express = require('express');
const axios = require('axios');

const router = express.Router();
const config = require('../config');

// Data results processing
const dataParsing = (data) => {
  if (!data) {
    return {};
  }

  const parsedItem = {
    id: data.id,
    title: data.title,
    price: {
      currency: data.currency_id,
      ammount: Math.floor(data.price),
      // Get decimal values from price returned by the endpoint
      decimals: Math.ceil((data.price - Math.floor(data.price)) * 100),
    },
    picture: data.pictures[0].secure_url,
    condition: data.condition,
    free_shipping: data.shipping.free_shipping,
    sold_quantity: data.sold_quantity,
    description: data.plain_text,
  };

  return { author: config.API_AUTHOR_INFO, item: parsedItem };
};

// GET return item details
router.get('/:id', async (req, res) => {
  const itemId = req.params.id ? req.params.id.trim() : '';

  // Return status error when item id is missing
  if (!itemId) {
    res.status(422).send('ERROR 422: Bad query params');
    return;
  }

  // Performs request to external endpoint
  try {
    const itemDetails = await axios(`${config.API_BASE_PATH}${config.API_ITEMS_PATH}${itemId}`);
    const itemDescription = await axios(`${config.API_BASE_PATH}${config.API_ITEMS_PATH}${itemId}/description`);
    Promise.all([itemDescription, itemDetails])
    .then((resp) => {
      const mergedResponses = {...resp[0].data, ...resp[1].data}
      res.json(dataParsing(mergedResponses));
    });
  } catch (error) {
    // If endpoint fails, returns error
    res.status(503).send('ERROR 503: Internal service unavailable');
  }

});

module.exports = router;
