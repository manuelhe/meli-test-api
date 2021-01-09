const express = require('express');
const axios = require('axios');

const router = express.Router();
const config = require('../config');

// Parse categories
const parseCategories = (data) => {
  if (!data.filters.length) {
    return [];
  }
  const filtered = data.filters.filter((item) => item.id === 'category');

  if (!filtered.length) {
    return [];
  }

  const categories = filtered[0].values[0].path_from_root || [];

  return categories.map((item) => item.name);
};

// Data results processing
const dataParsing = (data) => {
  if (!data && !data.results) {
    return [];
  }

  const resp = [];
  const categories = parseCategories(data);

  for (let i = 0; i < config.ITEMS_PER_PAGE; i++) {
    const parsedItem = {
      id: data.results[i].id,
      title: data.results[i].title,
      price: {
        currency: data.results[i].currency_id,
        ammount: Math.floor(data.results[i].price),
        // Get decimal values from price returned by the endpoint
        decimals: Math.ceil((data.results[i].price - Math.floor(data.results[i].price)) * 100),
      },
      picture: data.results[i].thumbnail,
      condition: data.results[i].condition,
      free_shipping: data.results[i].shipping.free_shipping,
    };
    resp.push(parsedItem);
  }

  return { author: config.API_AUTHOR_INFO, categories, resp };
};

// GET search products
router.get('/', async (req, res) => {
  const searchItem = req.query.q ? req.query.q.trim() : '';

  // Return status error when search query is missing
  if (!searchItem) {
    res.status(422).send('ERROR 422: Bad query params');
    return;
  }

  try {
    // Performs request to external endpoint
    const response = await axios.request({
      url: `${config.API_BASE_PATH}${config.API_SEARCH_PATH}`,
      method: 'get',
      params: { q: searchItem },
    });
    res.json(dataParsing(response.data));
  } catch (error) {
    // If endpoint fails, returns error
    res.status(503).send('ERROR 503: Internal service unavailable');
  }
});

module.exports = router;
