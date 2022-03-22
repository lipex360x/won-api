'use strict';
const axios = require('axios')

module.exports = {
  populate: async (params) => {
    const gogUrl = `https://www.gog.com/games/ajax/filtered?mediaType=game&page=1&sort=popularity`

    const { data: { products }} = await axios.get(gogUrl)

    console.log(products[0])
  }
};
