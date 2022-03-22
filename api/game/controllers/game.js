'use strict';

module.exports = {
  populate: (ctx) => {
    console.log('Starting to populate')

    console.log(ctx.query)

    ctx.send("Finished populating!")
  }
};
